import "./App.css";
import LeftNavPanel from "./components/left-nav-panel";
import "./App.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Dashboard from "./screens/dashboard/dashboard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://devtest1/security/api/accounts?email=himanshu.malviya@nirmata.com"
        );
        if (!response.ok) {
          throw new Error("response was not ok");
        }
        const responseData = await response.json();
        setData(responseData.accounts[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);
  if (data) {
    const jsonString = JSON.stringify(data);
    console.log(data + "data");
    Cookies.set("nirmata.session.userData", jsonString);
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "100vh",
            width: "15vw",
          }}
        >
          <LeftNavPanel
            hasClusterAccess={true}
            productData={{
              isPolicyManagerProduct: true,
            }}
            userData={{
              tenantType: "GA2",
              product: "Policy Manager Enterprise",
              role: "admin",
              isActivated: true,
              identityProvider: "Local",
              features: [
                "configure-kyverno",
                "upgrade-kyverno",
                "image-verification",
                "resource-events",
                "kubeconfig-expiration",
                "enable-security-role",
                "auto-remediation",
                "compliance-per-namespace",
                "git-policy-set",
                "auto-namespace-assignment",
              ],
              tenantName: "Nirmata-NPM-Atul",
              name: "Himanshu Malviya",
              tenantId: "61645ecf-e231-42b7-9ed9-e978297a7acf",
              id: "3597d7d6-02c9-489b-b7b6-738db4b88d7e",
              isDisabled: false,
              fullname: "Himanshu Malviya",
              tenantState: "enabled",
              email: "himanshu.malviya@nirmata.com",
              numAccounts: 1,
            }}
            isSmallNav={false}
            hasOidcAccess={false}
            hashLocation={""}
          />
        </div>
        <div
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
