import { logo } from "../../assets/assets";
import SearchBar from "../search-bar/SearchBar";
import styles from "./Sidebar.module.css";

import {
  Building2,
  Search,
  LayoutDashboard,
  ChevronDown,
  House,
  LucideAArrowDown,
} from "lucide-react";
import { sidebarNav } from "./utils/Utils";
import { useState } from "react";

export default function Sidebar() {
  const [navItems, setNavItems] = useState(sidebarNav);
  // const [childItem, setChildItems] = useState()

  const toggleMenu = (id) => {
  setNavItems((prev) =>
    prev.map((item) => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false,
      children: item.children
        ? item.children.map((child) => ({
            ...child,
            isSelected: false,
          }))
        : item.children,
    }))
  );
};




const handleChildSelection = (id) => {
  console.log('id :>> ', id);
  setNavItems((prev) =>
    prev.map((item) => ({
      ...item,
      children: item.children
        ? item.children.map((child) => ({
            ...child,
            isSelected: child.id === id,
          }))
        : item.children,
    }))
  );
};



  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.headerSection}>
          <div className={styles.headerContainer}>
            <div className={styles.logoArea}>
              <img src={logo} alt="Logo" height={"26.46px"} width={"31.97px"} />
            </div>
            <div className={styles.titleArea}>FinBowl</div>
          </div>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.mainNavSection}>
          <div className={styles.searchbox}>
            <SearchBar />
          </div>
          <div className={styles.dashboard}>
            <div className={styles.dashboardContainer}>
              <House size={18} className={styles.dashboardLogo} />
              <span className={styles.dashboardHeading}>Dashboard</span>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.menu}>
        <div className={styles.otherNavItems}>
          {navItems.map((item) => (
            <div key={item.id}>
              {/* Parent Item */}
              <div
                className={styles.dashboardContainerLowerPart}
                onClick={() => item.hasChildren && toggleMenu(item.id)}
              >
                <div className={styles.left}>
                  <item.icon size={18} className={styles.dashboardLogo} />
                  <span className={styles.dashboardHeading}>{item.label}</span>
                </div>

                {item.hasChildren && (
                  <ChevronDown
                    size={18}
                    className={`${styles.chevron} ${
                      item.isOpen ? styles.rotate : ""
                    }`}
                  />
                )}
              </div>

              {item.hasChildren && item.isOpen && (
                <div className={styles.subMenu}>
                  {item.children.map((child) => (
                    <div key={child.id} className={`${styles.subMenuItem}`}>
                      {console.log('child.isSelected >> ', child)}
                      <div
                        className={` ${styles.subItemStyle}   ${
                          child.isSelected ? styles.selected : ""
                        }`}

                        onClick={() => handleChildSelection(child?.id)}
                      >
                        <div
                          style={{
                            marginLeft: "15px",
                            display: "flex",
                            gap: "11.5px",
                          }}
                        >
                          <child.icon size={16} />
                          <span>{child.label}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.version}>Version 1.0</div>
    </aside>
  );
}
