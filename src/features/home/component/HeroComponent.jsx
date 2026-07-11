import React from "react";
import BreadCrumbBar from "../../../componets/breadcrumb-bar/BreadCrumbBar";
import styles from "./HeroComponent.module.css";
import CustomButton from "../../../componets/custom/custom-button/CustomButton";
import { buttonConfig, heroButtonConfig } from "./utils";
import { ChevronRight } from "lucide-react";

const HeroComponent = () => {
    const title = 'Disbursment'
    const arrayOfRoutes = [
        {
            id: 1,
            name: "RMS",
            isLast: false
        },
        {
            id: 2,
            name: "Disbursement",
            isLast: false
        },
        {
            id: 3,
            name: "List",
            isLast: true
        }
    ]
  return (
    <>
      <BreadCrumbBar />
     <div className={styles.heroContainerMain}>
         <div className={styles.heroContainer}>
        <div className={styles.heroInnerContainer}>
          <div className={styles.heroLeftContainer}>
            <div className={styles.leftUpperSection}>
                {title}
            </div>
            <div className={styles.leftBottomSection}>
                 {arrayOfRoutes.map((item, index) => (
                  <div key={item.id} style={{display:'flex', alignItems:'center'}}>
                    <span
                      className={
                        item.isLast
                          ? styles.activeRoute
                          : styles.route
                      }
                    >
                      {item.name}
                    </span>

                    {!item.isLast && (
                      <ChevronRight
                        size={18}
                        className={styles.separator}
                      />
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
     </div>
     
    </>
  );
};

export default HeroComponent;
