import React from "react";
import BreadCrumbBar from "../../../componets/breadcrumb-bar/BreadCrumbBar";
import styles from "./HeroComponent.module.css";
import CustomButton from "../../../componets/custom/custom-button/CustomButton";
import { buttonConfig, heroButtonConfig } from "./utils";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

const HeroComponent = () => {
  const title = "Disbursment";
  const arrayOfRoutes = [
    {
      id: 1,
      name: "RMS",
      isLast: false,
    },
    {
      id: 2,
      name: "Disbursement",
      isLast: true,
    },
    // {
    //     id: 3,
    //     name: "List",
    //     isLast: true
    // }
  ];

  const cardInfo = [
    {
      id: 1,
      name: "Total Disbursements",
      childData: 8,
    },
    {
      id: 2,
      name: "Total Disbursed Amount",
      childData: "₹3,62,50,000",
    },
    {
      id: 3,
      name: "Submitted",
      childData: 12,
    },
    {
      id: 4,
      name: "Verified",
      childData: 1,
    },
    {
      id: 5,
      name: "Processed",
      childData: 5,
    },
    {
      id: 6,
      name: "Audited",
      childData: 12,
    },
  ];
  return (
    <>
      <BreadCrumbBar />
      <div className={styles.heroContainerMain}>
        <div className={styles.heroContainer}>
          <div className={styles.heroInnerContainer}>
            <div className={styles.heroLeftContainer}>
              <div className={styles.leftUpperSection}>{title}</div>
              <div className={styles.leftBottomSection}>
                {arrayOfRoutes.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      className={
                        item.isLast ? styles.activeRoute : styles.route
                      }
                    >
                      {item.name}
                    </span>

                    {!item.isLast && (
                      <ChevronRight size={18} className={styles.separator} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroRightContainer}>
              <CustomButton config={heroButtonConfig.activity} />

              <CustomButton config={heroButtonConfig.importExcel} />

              <CustomButton config={heroButtonConfig.addDisbursement} />
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          {cardInfo?.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <p className={styles.title}>{item?.name}</p>
                <h2 className={styles.amount}>{item?.childData}</h2>
              </div>
            );
          })}
        </div>
      <div className={styles.tableSection}>
<div className={styles.tableUpperSection}>
    <div className={styles.tableSearchbar}>
    <Search size={16} strokeWidth={2} className={styles.searchIcon} />
    <input
      type="text"
      placeholder="Search for Disbursement"
      className={styles.searchInput}
    />
    <span className={styles.shortcut}>⌘K</span>
  </div>

  <div className={styles.tableActions}>
    <button className={styles.actionButton}>
      Saved View
      <ChevronDown size={16} />
    </button>

    <button className={styles.actionButton}>
      Export All
      <ChevronDown size={16} />
    </button>
  </div>
</div>
</div>
      </div>
    </>
  );
};

export default HeroComponent;
