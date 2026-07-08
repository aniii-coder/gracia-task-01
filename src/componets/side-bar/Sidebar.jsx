import { logo } from "../../assets/assets";
import SearchBar from "../search-bar/SearchBar";
import styles from "./Sidebar.module.css";

import {
  Building2,
  Search,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>
        <div className={styles.headerSection}>
           <div className={styles.headerContainer}>
                 <div className={styles.logoArea}>
                    <img src={logo} alt="Logo" height={'26.46px'} width={'31.97px'} />
                 </div>
            <div className={styles.titleArea}>FinBowl</div>
           </div>
        </div>
      </div>

      {/* <div className={styles.searchBox}>
        <Search size={18} />
        <input placeholder="Search" />
      </div> */}

      {/* <SearchBar /> */}

      <div className={styles.menu}>

        {/* <div className={styles.menuItem}>
          <LayoutDashboard size={18} />
          Dashboard
        </div> */}

        {/* <div className={`${styles.menuItem} ${styles.active}`}>
          <LayoutDashboard size={18} />
          RMS
          <ChevronDown
            size={16}
            className={styles.arrow}
          />
        </div> */}

      </div>

      <div className={styles.version}>
        Version 1.0
      </div>

    </aside>
  );
}