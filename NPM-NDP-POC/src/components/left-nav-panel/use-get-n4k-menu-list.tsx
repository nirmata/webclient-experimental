import { IdcardOutlined, UserOutlined } from '@ant-design/icons';
import { TMenuItem } from './types';
import License from '../../assets/license.svg';
import GetStarted from '../../assets/getStarted.svg';
import { FC } from 'react';

type ImageComponentProps = {
  imageSrc: string;
  altText: string;
};

export const withImageComponent = <P extends ImageComponentProps>(
  Component: FC<P>,
  imageSrc: string,
  altText: string
) => {
  return (props: P) => (
    <div style={{ marginLeft: '-6px!important' }}>
      <Component {...props} imageSrc={imageSrc} altText={altText} />
    </div>
  );
};

export const ImageComponent: FC<ImageComponentProps> = ({ imageSrc, altText }) => (
  <img style={{ height: '1em', width: '1em' }} src={imageSrc} alt={altText} />
);

const LicenseComponent = withImageComponent(ImageComponent, License, 'licenseIcon');
const GetStartedComponent = withImageComponent(ImageComponent, GetStarted, 'getStartedIcon');

export const useGetN4kMenuList = (): TMenuItem[] => {
  return [
    {
      id: 'get_started_menu',
      route: 'kyverno',
      title: 'Get Started',
      dataTestId: 'get-started',
      component: GetStartedComponent,
      submenu: [
        {
          id: 'kyverno_menu',
          route: 'kyverno',
          title: 'Kyverno',
          dataTestId: 'get-started-kyverno'
        },
        {
          id: 'adapters_menu',
          route: 'adapters',
          title: 'Adapters',
          dataTestId: 'get-started-adapters'
        }
      ]
    },
    {
      id: 'license_menu',
      route: 'license',
      title: 'License',
      component: LicenseComponent,
      dataTestId: 'license'
    },
    {
      id: 'iam_menu',
      route: 'users',
      title: 'Identity & Access',
      component: IdcardOutlined,
      dataTestId: 'identity-and-access',
      submenu: [
        {
          id: 'users_menu',
          route: 'users',
          title: 'Users',
          dataTestId: 'identity-and-access-users'
        },
        {
          id: 'saml_menu',
          route: 'saml',
          title: 'SAML',
          dataTestId: 'identity-and-access-saml'
        },
        {
          id: 'oidc_menu',
          route: 'oidc',
          title: 'OIDC',
          dataTestId: 'identity-and-access-oidc'
        },
        {
          id: 'mfa_menu',
          route: 'mfa',
          title: 'MFA',
          dataTestId: 'identity-and-access-mfa'
        }
      ]
    },
    {
      id: 'profile_menu',
      route: 'profile',
      title: 'Profile',
      component: UserOutlined,
      dataTestId: 'settings-profile'
    }
  ];
};
