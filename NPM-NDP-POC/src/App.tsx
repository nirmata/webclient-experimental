import Cookies from "js-cookie";
import LeftNavPanel from "./components/left-nav-panel";
import "./App.css";
import Dashboard from "./screens/dashboard/dashboard";
import { TUserData } from "./components/left-nav-panel/types";

const fallbackUserData: TUserData = {
  tenantType: "default",
  product: "default",
  role: "guest",
  isActivated: false,
  identityProvider: "default",
  features: [],
  tenantName: "default tenant",
  name: "Guest",
  tenantId: "0",
  id: "guest",
  isDisabled: false,
  fullname: "Guest User",
  tenantState: "inactive",
  email: "guest@example.com",
  numAccounts: 0,
};

function App() {
  let userData: TUserData;

  try {
    const cookieData = Cookies.get("nirmata.session.userData");
    userData = cookieData ? JSON.parse(cookieData) : fallbackUserData;
  } catch (e) {
    console.error("Error parsing userData from cookies:", e);
    userData = fallbackUserData;
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
            userData={userData} 
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
