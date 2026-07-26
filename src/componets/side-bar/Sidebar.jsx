import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, House } from "lucide-react";

import { logo } from "../../assets/assets";
import SearchBar from "../search-bar/SearchBar";
import { sidebarNav } from "./utils/Utils";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [openedMenu, setOpenedMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const parent = sidebarNav.find((item) =>
      item.children?.some((child) => child.path === location.pathname),
    );

    if (parent) {
      setOpenedMenu(parent.id);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/rms/disbursement", { replace: true });
    }
  }, [location.pathname, navigate]);

  const toggleMenu = (id) => {
    setOpenedMenu((prev) => (prev === id ? null : id));
  };

  const handleParentClick = (item) => {
    if (item.hasChildren) {
      toggleMenu(item.id);
    } else {
      navigate(item.path);
    }
  };

  const handleChildClick = (child) => {
    navigate(child.path);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.headerSection}>
          <div className={styles.headerContainer}>
            <div className={styles.logoArea}>
              <img src={logo} alt="Logo" width={31.97} height={26.46} />
            </div>
            <div className={styles.titleArea}>FinBowl</div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className={styles.searchContainer}>
        <div className={styles.mainNavSection}>
          <div className={styles.searchbox}>
            <SearchBar />
          </div>

          <div
            className={styles.dashboard}
            onClick={() => navigate("/dashboard")}
          >
            <div className={styles.dashboardContainer}>
              <House size={18} className={styles.dashboardLogo} />
              <span className={styles.dashboardHeading}>Dashboard</span>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        <div className={styles.otherNavItems}>
          {sidebarNav.map((item) => {
            const isOpen = openedMenu === item.id;
            const isParentSelected = item.path === location.pathname;

            return (
              <div key={item.id}>
                {/* Parent */}
                <div
                  className={styles.dashboardContainerLowerPart}
                  onClick={() => handleParentClick(item)}
                >
                  <div className={styles.left}>
                    <item.icon size={18} className={styles.dashboardLogo} />

                    <span className={styles.dashboardHeading}>
                      {item.label}
                    </span>
                  </div>

                  {item.hasChildren && (
                    <ChevronDown
                      size={18}
                      className={`${styles.chevron} ${
                        isOpen ? styles.rotate : ""
                      }`}
                    />
                  )}
                </div>

                {/* Children */}
                {item.hasChildren && isOpen && (
                  <div className={styles.subMenu}>
                    {item.children.map((child) => (
                      <div
                        key={child.id}
                        className={`${styles.subItemStyle} ${
                          child.path === location.pathname
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() => handleChildClick(child)}
                      >
                        {console.log(
  child.label,
  child.path,
  location.pathname,
  child.path === location.pathname
)}

                        <div
                          style={{
                            marginLeft: "15px",
                            display: "flex",
                            gap: "11.5px",
                            alignItems: "center",
                          }}
                        >
                          <child.icon size={16} />
                          <span>{child.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.version}>Version 1.0</div>
    </aside>
  );
}
