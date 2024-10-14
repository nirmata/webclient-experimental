import React, { useEffect, useState } from "react";
import { createPublication, subscribe } from "pusu";
import { Tag } from "antd";

import NMenu from "../menu";
import DataTestId from "../data-test-id";

import {
  filterMenu,
  findIdAndAncestors,
  findIdByRoute,
  getMenuConfig,
} from "./panel-util";
import { LeftNavPanelProps, MenuItem, TMenuItem } from "./types";

export const toggleLeftNavPanelPub = createPublication();

export const ImagesMenuItem = () => {
  return (
    <>
      {"Images"}{" "}
      <Tag
        style={{ borderRadius: "4px", marginLeft: "10px" }}
        color="#FA8C16"
        title="Preview"
      >
        Preview
      </Tag>
    </>
  );
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: MouseEvent
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
};

const getMenuItems = (input: TMenuItem[]): MenuItem[] => {
  return input.map((item, _) => {
    if (item.submenu && item.submenu.length > 0) {
      const submenuItems = item.submenu.map((subItem) =>
        getItem(
          <DataTestId value={`submenu-item-${subItem.title}`}>
            {(dataTestId) => (
              <a
                {...dataTestId}
                style={{ color: "inherit", textDecoration: "none" }}
                href={`${subItem.route}`}
              >
                {subItem.title}
              </a>
            )}
          </DataTestId>,
          `${subItem.id}`,
          undefined,
          undefined
        )
      );
      return getItem(
        <DataTestId value={`menu-item-title-${item.title}`}>
          {(dataTestId) => (
            <a
              {...dataTestId}
              style={{ color: "inherit", textDecoration: "none" }}
              href={`${item.route}`}
            >
              {item.title}
              {item.preview && (
                <Tag
                  style={{ borderRadius: "4px", marginLeft: "10px" }}
                  color="#FA8C16"
                  title="Preview"
                >
                  Preview
                </Tag>
              )}
            </a>
          )}
        </DataTestId>,
        `${item.id}`,
        item?.component ? (
          <a href={`${item.route}`}>
            {" "}
            {React.createElement(item.component)}
          </a>
        ) : undefined,
        submenuItems
      );
    } else {
      return getItem(
        <DataTestId value={`menu-item-title-${item.title}`}>
          {(dataTestId) => (
            <a
              {...dataTestId}
              style={{ color: "inherit", textDecoration: "none" }}
              href={`${item.route}`}
            >
              {" "}
              {item.title}
              {item.preview && (
                <Tag
                  style={{ borderRadius: "4px", marginLeft: "10px" }}
                  color="#FA8C16"
                  title="Preview"
                >
                  Preview
                </Tag>
              )}
            </a>
          )}
        </DataTestId>,
        item.id,
        item?.component ? (
          <a href={`${item.route}`}>{React.createElement(item.component)} </a>
        ) : undefined
      );
    }
  });
};

const LeftNavPanel: React.FC<LeftNavPanelProps> = ({
  hasClusterAccess,
  productData,
  userData,
  hasOidcAccess,
  hashLocation,
}: LeftNavPanelProps) => {
  const { role, tenantType, product, features } = userData;
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(["policies_menu"]);

  const toggleCollapsed = (isExpanded: boolean) => {
    setCollapsed(isExpanded);
  };
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const menuConfig = getMenuConfig(
    features,
    role,
    tenantType,
    product,
    hasClusterAccess,
    productData,
    hasOidcAccess
  );
  const finalMenuConfig = filterMenu(menuConfig);
  const finalItems = getMenuItems(finalMenuConfig);

  const handleOpenChange = (keys: string[]) => {
    // Close all other menu item groups when one is opened
    setOpenKeys([...keys]);
  };

  // handle menu mode small/large toggle
  useEffect(() => {
    const unSubscribeToggleLeftNavPanelPub = subscribe(
      toggleLeftNavPanelPub,
      (isExpanded: boolean) => {
        toggleCollapsed(isExpanded);
        if (!isExpanded) {
          const newOpenGroup = findIdAndAncestors(
            finalMenuConfig,
            location.hash
          );
          setOpenKeys([...newOpenGroup]);
        }
      }
    );
    return () => {
      unSubscribeToggleLeftNavPanelPub();
    };
  }, []);

  useEffect(() => {
    const newSelectedKeys = findIdByRoute(finalMenuConfig, location.hash) ?? "";
    if (newSelectedKeys) setSelectedKeys([newSelectedKeys]);
  }, [hashLocation]);

  return (
    <NMenu
      defaultSelectedKeys={[finalMenuConfig[0].id]}
      mode="inline"
      theme={"light"}
      items={finalItems}
      inlineCollapsed={collapsed}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      selectedKeys={selectedKeys}
    ></NMenu>
  );
};

export default LeftNavPanel;
