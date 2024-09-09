import Cookies from "js-cookie";

const UserSettingsSection = () => {
  const user = JSON.parse(Cookies.get("nirmata.session.userData") as string);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="panel panel-default n-m-b">
          <div className="panel-heading">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>My Settings</span>
            </div>
          </div>
          <div className="panel-body">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "secondary" }}>Name</div>
                  <div>{user.name}</div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "secondary" }}>Email</div>
                  <div>{user.email}</div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "secondary" }}>Identity Provider</div>
                  <div>{user.identityProvider}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "secondary" }}>Role</div>
                  <div>{user.role}</div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "secondary" }}>Last Login</div>
                  <div>{user.lastLogin}</div>
                </div>
              </div>
              <div style={{ flex: 1 }}>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsSection;
