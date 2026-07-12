import styles from "../HeroComponent.module.css";
import {
  CloudDownload,
  RefreshCw,
  ChevronDown,
} from "lucide-react";



export const buttonDesigns = {
  primary: {
    className: styles.primaryButton,
  },

  secondary: {
    className: styles.secondaryButton,
  },

  danger: {
    className: styles.dangerButton,
  },

  ghost: {
    className: styles.ghostButton,
  },
};




export const heroButtonConfig = {
  activity: {
    design: buttonDesigns.secondary,

    render: () => (
      <div className={styles.activity}>
        <RefreshCw size={18} />
        <span>Activity</span>
      </div>
    ),
  },

  importExcel: {
    design: buttonDesigns.secondary,

    render: () => (
      <div className={styles.activity}>
        <CloudDownload size={18} />
        <span>Import Excel</span>
      </div>
    ),
  },

  addDisbursement: {
    design: buttonDesigns.primary,

    render: () => (
      <>
        <span>Add Disbursement</span>
        <ChevronDown size={18} />
      </>
    ),
  },
};




export const mockViews = [
  { id: 1, name: "My Loan View", isDefault: true },
  { id: 2, name: "Priority Loans", isDefault: false },
  { id: 3, name: "Submitted Loans", isDefault: false },
  { id: 4, name: "Draft Applications", isDefault: false },
];
export const exportData = [
  { id: 1, name: "Export All" },
  // { id: 2, name: "Priority Loans", isDefault: false },
  // { id: 3, name: "Submitted Loans", isDefault: false },
  // { id: 4, name: "Draft Applications", isDefault: false },
];