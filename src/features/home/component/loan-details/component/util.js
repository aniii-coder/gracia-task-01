import { ArrowUpDown } from "lucide-react";
import heroStyles from  '../LoanDetails.module.css'
import React from 'react';
import styles from '../LoanDetails.module.css';

export const disbursementColumns = [
  {
    key: "id",
    title: "Disbursement ID",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Disbursement ID</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "date",
    title: "Disbursement Date",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Disbursement Date</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "amount",
    title: "Disbursement Amount",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Disbursement Amount</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.greenText}>{value}</span>
    ),
  },
  {
    key: "verifiedAmount",
    title: "Verified Disbursement Amount",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Verified Disbursement Amount</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.greenText}>{value}</span>
    ),
  },
  {
    key: "utr",
    title: "UTR Number",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>UTR Number</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "tranche",
    title: "Tranche",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Tranche</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "status",
    title: "Disbursement Status",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Disbursement Status</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.statusBadgeYellow}>{value}</span>
    ),
  },
];

export const disbursementData = [
  {
    id: 'DB002-24-1001',
    date: '22-11-2024',
    amount: '₹4,80,000.00',
    verifiedAmount: '₹4,80,000.00',
    utr: '426715893247',
    tranche: 'Full',
    status: 'Processed',
  },
  {
    id: 'DB002-24-1001',
    date: '23-11-2024',
    amount: '₹5,25,000.00',
    verifiedAmount: '₹5,25,000.00',
    utr: '426715893248',
    tranche: 'Full',
    status: 'Processed',
  },
  {
    id: 'DB002-24-1001',
    date: '24-11-2024',
    amount: '₹6,00,000.00',
    verifiedAmount: '₹6,00,000.00',
    utr: '426715893249',
    tranche: 'Full',
    status: 'Processed',
  },
  {
    id: 'DB002-24-1001',
    date: '25-11-2024',
    amount: '₹6,75,000.00',
    verifiedAmount: '₹7,00,000.00',
    utr: '426715893250',
    tranche: 'Full',
    status: 'Processed',
  },
];

// 2. Commission
export const commissionColumns = [
  {
    key: "partyName",
    title: "Party Name (Used Code)",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Party Name (Used Code)</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "subCodeComm",
    title: "Sub-Code Commission (Net)%",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Sub-Code Commission (Net)%</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "grossComm",
    title: "Gross Commission %",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Gross Commission %</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "commAmount",
    title: "Commission Amount",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Commission Amount</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.greenText}>{value}</span>
    ),
  },
  {
    key: "invoiceNo",
    title: "Invoice No",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Invoice No</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.linkText}>{value}</span>
    ),
  },
  {
    key: "status",
    title: "Invoice Status",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Invoice Status</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.statusBadgeGreen}>{value}</span>
    ),
  },
];

export const commissionData = [
  {
    partyName: 'Amit Sharma',
    subCodeComm: '0.7500%',
    grossComm: '0.7500%',
    commAmount: '₹3,400.00',
    invoiceNo: 'RMS-INV-2026-00156',
    status: 'Paid',
  },
  {
    partyName: 'Anjali Mehta',
    subCodeComm: '0.8500%',
    grossComm: '1.2500%',
    commAmount: '₹4,200.00',
    invoiceNo: 'RMS-INV-2026-00157',
    status: 'Paid',
  },
  {
    partyName: 'Ravi Kumar',
    subCodeComm: '0.9000%',
    grossComm: '1.5000%',
    commAmount: '₹5,000.00',
    invoiceNo: 'RMS-INV-2026-00158',
    status: 'Paid',
  },
  {
    partyName: 'Sneha Iyer',
    subCodeComm: '1.0000%',
    grossComm: '2.0000%',
    commAmount: '₹6,300.00',
    invoiceNo: 'RMS-INV-2026-00159',
    status: 'Paid',
  },
];

// 3. Broker Information
export const brokerColumns = [
  {
    key: "brokerName",
    title: "Broker Name / Code",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Broker Name / Code</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ row }) => (
      <div className={heroStyles.brokerCell}>
        <div>
          <div>{row?.name}</div>
          <div className={heroStyles.subText}>{row?.code}</div>
        </div>
        {row?.role && <span className={heroStyles.roleBadge}>{row.role}</span>}
      </div>
    ),
  },
  {
    key: "brokerComm",
    title: "Broker Commission %",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Broker Commission %</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "referralFee",
    title: "Referral Fee",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Referral Fee</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => value || "-",
  },
  {
    key: "poDetails",
    title: "PO No & Date",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>PO No & Date</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ row }) => (
      <div className={heroStyles.poCell}>
        <span className={heroStyles.pinkLinkText}>{row?.poNo}</span>
        {row?.poDate && (
          <span className={heroStyles.dateBadge}>{row.poDate}</span>
        )}
      </div>
    ),
  },
  {
    key: "status",
    title: "PO Status",
    visible: true,
    header: () => (
      <div className={heroStyles.headerCell}>
        <span>PO Status</span>
        <ArrowUpDown size={14} />
      </div>
    ),
    render: ({ value }) => (
      <span className={heroStyles.statusBadgeGreen}>{value}</span>
    ),
  },
];

export const brokerData = [
  {
    name: 'Amit Sharma',
    code: 'CON-001',
    role: 'Aggregator',
    brokerComm: '0.7500%',
    referralFee: '₹3,020.00',
    poNo: 'RMS-PO-2026-00089',
    poDate: '22-11-2024',
    status: 'Paid',
  },
  {
    name: 'Ravi Patel',
    code: 'CON-002',
    role: 'Sub-connector',
    brokerComm: '0.8500%',
    referralFee: '₹2,875.00',
    poNo: 'RMS-PO-2026-00090',
    poDate: '23-11-2024',
    status: 'Paid',
  },
  {
    name: 'Amit Sharma',
    code: 'CON-001',
    role: 'Aggregator',
    brokerComm: '0.9000%',
    referralFee: '₹2,960.00',
    poNo: 'RMS-PO-2026-00091',
    poDate: '24-11-2024',
    status: 'Paid',
  },
  {
    name: 'Sita Verma',
    code: 'CON-003',
    role: 'Aggregator',
    brokerComm: '1.0000%',
    referralFee: '₹3,150.00',
    poNo: 'RMS-PO-2026-00091',
    poDate: '24-11-2024',
    status: 'Paid',
  },
];

// 4. Documents
export const documentsData = [
  { name: 'Invoices.pdf', size: '800 KB' },
  { name: 'Invoices.pdf', size: '800 KB' },
];
export const applicantColumns = [
  {
    key: "name",
    title: "Name",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Name</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "type",
    title: "Type",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Type</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => (
      <span
        className={`${heroStyles.statusBadge} ${
          value === "Applicant"
            ? heroStyles.success
            : heroStyles.defaultBadge
        }`}
      >
        {value}
      </span>
    ),
  },

  {
    key: "email",
    title: "Email ID",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Email ID</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },

  {
    key: "phone",
    title: "Phone Number",
    visible: true,

    header: () => (
      <div className={heroStyles.headerCell}>
        <span>Phone Number</span>
        <ArrowUpDown size={14} />
      </div>
    ),

    render: ({ value }) => value,
  },
];



export const applicantData = [
  {
    id: 1,
    name: "Rahul Verma",
    type: "Applicant",
    email: "rahul.verma@gmail.com",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Priya Sharma",
    type: "Co-Applicant",
    email: "priya.sharma@gmail.com",
    phone: "+91 9123456789",
  },
  {
    id: 3,
    name: "Neha Gupta",
    type: "Co-Applicant",
    email: "neha.gupta@gmail.com",
    phone: "+91 9988776655",
  },
];



export const activityLogsData = [
  {
    id: 1,
    title: "Loan Created",
    user: "Amit Sharma",
    avatar: "https://i.pravatar.cc/100?img=32",
    timestamp: "20 May (9:20 AM)",
  },
  {
    id: 2,
    title: "Status Updated",
    user: "Amit Sharma",
    avatar: "https://i.pravatar.cc/100?img=32",
    timestamp: "20 May (9:20 AM)",
    type: "status",
    from: "Verified",
    to: "Processed",
  },
  {
    id: 3,
    title: "Updated",
    user: "Amit Sharma",
    avatar: "https://i.pravatar.cc/100?img=32",
    timestamp: "20 May (9:20 AM)",
    type: "amount",
    field: "Disbursed Amount",
    from: "₹30,00,000.00",
    to: "₹31,00,000.00",
  },
];