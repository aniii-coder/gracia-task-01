import React, { useState } from "react";
import styles from "./Accordian.module.css";

const Accordion = ({ title,titleStyle, icon, children, defaultOpen = true, style }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer} style={style}>
      {/* Accordion Header */}
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className={styles.headerLeft}>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          <span style={titleStyle} className={styles.titleText}>{title}</span>
        </div>
        <div className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ""}`}>
          {/* Simple SVG Chevron Arrow */}
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Accordion Content Wrapper */}
      <div
        className={`${styles.contentWrapper} ${isOpen ? styles.showContent : ""}`}
      >
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
