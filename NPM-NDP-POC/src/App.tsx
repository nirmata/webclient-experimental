import "./App.css";
import LeftNavPanel from "./components/left-nav-panel";
import "./App.css";
import Dashboard from "./screens/dashboard/dashboard";

function App() {
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
