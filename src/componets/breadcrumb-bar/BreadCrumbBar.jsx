import React, { useState } from "react";
import styles from "./BreadCrumb.module.css";
import CustomDropDown from "../custom/custom-dropdown/CustomDropDown";
import { dropdownConfig, moduleList } from "./utils/Utils";
import { Bell } from "lucide-react";
import { logo } from "../../assets/assets";


export const headerActions = [
  {
    id: "notification",
    type: "icon",
    icon: Bell,
    badge: 2,
    onClick: () => console.log("Notification"),
  },
  {
    id: "profile",
    type: "image",
    src: logo,
    alt: "Profile",
    onClick: () => console.log("Profile"),
  },
];



const BreadCrumbBar = () => {
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <div className={styles.breadCrumbContainer}>
      <div className={styles.breadCrumbLeft}>
        <CustomDropDown
          viewList={moduleList}
          selected={selectedModule}
          onSelect={(item) => {
            console.log("item :>> ", item);
            setSelectedModule(item);

            console.log(item);
          }}
          config={dropdownConfig}
        />
        <CustomDropDown
          viewList={moduleList}
          selected={selectedModule}
          onSelect={(item) => {
            console.log("item :>> ", item);
            setSelectedModule(item);

            console.log(item);
          }}
          config={dropdownConfig}
        />
      </div>
    <div className={styles.breadCrumbRight}>
  {headerActions.map((item) => {
    if (item.type === "icon") {
      const Icon = item.icon;

      return (
        <button
          key={item.id}
          className={styles.actionButton}
          onClick={item.onClick}
        >
          <Icon size={32} />

          {item.badge > 0 && (
            <span className={styles.badge}>
              {item.badge}
            </span>
          )}
        </button>
      );
    }

    return (
      <button
        key={item.id}
        className={styles.profileButton}
        onClick={item.onClick}
      >
        <img src={item.src} alt={item.alt} />
      </button>
    );
  })}
</div>
      {/* <div></div> */}
    </div>
  );
};

export default BreadCrumbBar;
