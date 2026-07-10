import styles from '../BreadCrumb.module.css'
import {
  Building2,
  Landmark,
  BriefcaseBusiness,
  Building,
  Factory,
} from "lucide-react";


export const dropdownConfig = {
  placeholder: "Select Module",

  renderSelected: (item) => (
    <div className={styles.selected}>
      {item.icon}
      <span>{item.title}</span>
    </div>
  ),

  renderItem: (item) => (
    <div className={styles.option}>
      <div className={styles.icon}>{item.icon}</div>

      <div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>
          {item.description}
        </div>
      </div>
    </div>
  ),
};

export const moduleList = [
  {
    id: 1,
    title: "Gracia Advisory LLP",
    description: "Management Consulting",
    icon: <Building2 size={20} strokeWidth={1.8} />,
    code: "GRA001",
  },
  {
    id: 2,
    title: "Gracia Capital Partners",
    description: "Financial Services",
    icon: <Landmark size={20} strokeWidth={1.8} />,
    code: "GCP002",
  },
  {
    id: 3,
    title: "Gracia Corporate Solutions",
    description: "Business Consulting",
    icon: <BriefcaseBusiness size={20} strokeWidth={1.8} />,
    code: "GCS003",
  },
  {
    id: 4,
    title: "Gracia Holdings Pvt. Ltd.",
    description: "Investment Company",
    icon: <Building size={20} strokeWidth={1.8} />,
    code: "GHL004",
  },
  {
    id: 5,
    title: "Gracia Manufacturing LLP",
    description: "Manufacturing Division",
    icon: <Factory size={20} strokeWidth={1.8} />,
    code: "GML005",
  },
];
