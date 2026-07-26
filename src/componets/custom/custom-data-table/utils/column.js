import { ArrowUpDown, Menu } from "lucide-react";
import heroStyles from '../../../../features/home/component/HeroComponent.module.css'
import SelectAllCheckbox from "../component/select-all-checkbox/SelectAllCheckbox";
import RowCheckBox from "../component/row-checkbox/RowCheckbox";
import { generatePath, Link } from "react-router-dom";


export const getColumnsConfig = (pathname) => [
  {
    key: "select",
    title: "Select",
    visible: true,
    width: 60,

    header: () => <SelectAllCheckbox />,

    render: ({ row }) => <RowCheckBox row={row} />,
  },

  {
    key: "disbursementDate",
    title: "Disbursement Date",
    visible: true,
    width: 150,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Disbursement Date</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "loanId",
    title: "Loan ID",
    visible: true,
    width: 170,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Loan ID</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value, row }) => (
      <Link to={`${pathname}/${row.loanId}`}>
  {row.loanId}
</Link>
    ),
  },

  {
    key: "status",
    title: "Status",
    visible: true,
    width: 130,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Status</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => (
      <div
        className={`${heroStyles.statusBadge} ${
          heroStyles[value?.toLowerCase()]
        }`}
      >
        <span className={heroStyles.statusDot}></span>
        <span>{value}</span>
      </div>
    ),
  },

  {
    key: "applicantName",
    title: "Applicant Name",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Applicant Name</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "bankName",
    title: "Bank Name",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Bank Name</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "sanctionedAmount",
    title: "Sanctioned Amount",
    visible: true,
    align: "right",

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Sanctioned Amt</span>

        <div className={heroStyles.headerActions}>
          <ArrowUpDown size={14} />
          <Menu size={14} />
        </div>
      </div>
    ),

    render: ({ value }) =>
      `₹ ${Number(value).toLocaleString("en-IN")}`,
  },

  {
    key: "verifiedAmount",
    title: "Verified Amount",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Verified Amt</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "referral",
    title: "Referral %",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Referral %</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "bankExecutive",
    title: "Bank Executive",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Bank Executive</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },
];