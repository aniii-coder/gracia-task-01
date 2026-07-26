import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  ChevronRight,
  UserCheck,
  Banknote,
  Receipt,
  Percent,
  UserCheck2,
  FileText,
  FileCheck2,
  FileCode2,
} from "lucide-react";

import CustomButton from "../../../../componets/custom/custom-button/CustomButton";
import BreadCrumbBar from "../../../../componets/breadcrumb-bar/BreadCrumbBar";
import Accordion from "../../../../componets/accordian/Accordian";
import CustomDataTable from "../../../../componets/custom/custom-data-table/CustomDataTable";
import SidebarWrapper from "../../../../componets/custom/custom-sidebar-wrapper/SidebarWrapper";

import { loanDetails } from "../utils";
import { toTitleCase } from "../../../../helpers";
import styles from "./LoanDetails.module.css";
import {
  applicantColumns,
  applicantData,
  disbursementColumns,
  disbursementData,
  commissionColumns,
  commissionData,
  brokerColumns,
  brokerData,
  documentsData,
  activityLogsData,
} from "./component/util";

const summaryCards = [
  { title: "Total Sanctioned Amount", value: "₹4,80,000.00" },
  { title: "Total Disbursement Amount", value: "₹42,75,000.00" },
  { title: "Commission Income", value: "₹52,450.00" },
  { title: "Referral Fee", value: "₹18,750.00" },
  { title: "Net Income", value: "₹71,200.00", success: true },
];

const menu = [
  "Applicant Information",
  "Loan Details",
  "Disbursement Information",
  "Commission",
  "Broker Information",
  "Notes / Additional Information",
  "Documents",
];

const LOAN_DETAILS_SECTIONS = [
  {
    sectionTitle: null,
    fields: [
      { label: "Loan ID", key: "loanId", type: "text" },
      { label: "Loan Type", key: "loanType", type: "badge" },
      { label: "Bank", key: "bank", type: "text" },
      { label: "Stage", key: "stage", type: "text" },
    ],
  },
  {
    sectionTitle: "Sanction Details:",
    fields: [
      { label: "Sanctioned Date", key: "sanctionedDate", type: "text" },
      { label: "Loan Sanctioned Amount", key: "sanctionedAmount", type: "currency" },
      { label: "Verified Sanctioned Amount", key: "verifiedSanctionedAmount", type: "currency" },
    ],
  },
  {
    sectionTitle: "Team Details:",
    fields: [
      { label: "Bank Executive Name", key: "bankExecutiveName", type: "text" },
      { label: "Credit Executive Details", key: "creditExecutiveDetails", type: "text" },
      { label: "Source", key: "source", type: "text" },
    ],
  },
];

export default function LoanDetails({ dynamicLoanData, notesText }) {
  const { module, page, id } = useParams();

  // 1. Manage Active Menu Index & Accordion Open States
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track open state for each section: 0 is true by default, rest are false
  const [openSections, setOpenSections] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // 2. Refs to target accordion elements for smooth scrolling
  const sectionRefs = useRef([]);

  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const loanData = dynamicLoanData || {
    loanId: `Loan - ${id || "2026-04892"}`,
    loanType: "Home Loan",
    bank: "HDFC Bank - (Adyar Branch)",
    stage: "Lead",
    sanctionedDate: "22/11/2024",
    sanctionedAmount: "₹4,80,000.00",
    verifiedSanctionedAmount: "₹4,80,000.00",
    bankExecutiveName: "Amit Sharma",
    creditExecutiveDetails: "Preethi Sharma",
    source: "Ramesh Kumar",
  };

  const defaultNotes =
    notesText ||
    "Party applied for a home loan for property purchase in Chennai. Documents verified successfully and income proof has been submitted. Awaiting final bank approval and disbursement confirmation.";

  const arrayOfRoutes = [
    { id: 1, name: toTitleCase(module), isLast: false },
    { id: 2, name: toTitleCase(page), isLast: false },
    { id: 3, name: id, isLast: true },
  ];

  const renderFieldValue = (field, value) => {
    if (!value) return <span className={styles.detailValue}>-</span>;
    if (field.key === "loanType" || value === "Home Loan") {
      return <span className={styles.purpleBadge}>{value}</span>;
    }
    if (field.key.toLowerCase().includes("amount") || field.isAmount) {
      return <span className={styles.redText}>{value}</span>;
    }
    return <span className={styles.detailValue}>{value}</span>;
  };

  // Handler for Sidebar Menu item click
  const handleMenuClick = (index) => {
    setActiveIndex(index);

    // Open the target accordion section when menu item is clicked
    setOpenSections((prev) => ({
      ...prev,
      [index]: true,
    }));

    // Smooth scroll to the corresponding section element
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Toggle individual accordion manually
  const toggleAccordion = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const activityButtonConfig = {
    ...loanDetails.activityLogs,
    onClick: () => setIsActivityOpen(true),
  };




  return (
    <>
      <BreadCrumbBar />

      <div className={styles.heroInnerContainer}>
        <div className={styles.heroLeftContainer}>
          <div className={styles.leftUpperSection}>{`Loan - ${id}`}</div>

          <div className={styles.leftBottomSection}>
            {arrayOfRoutes.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  className={item.isLast ? styles.activeRoute : styles.route}
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
          <CustomButton config={loanDetails.archive} />

          <div
            onClick={() => setIsActivityOpen(true)}
            style={{ display: "inline-block" }}
          >
            <CustomButton
              config={activityButtonConfig}
              onClick={() => setIsActivityOpen(true)}
            />
          </div>

          <CustomButton config={loanDetails.editLoan} />
        </div>
      </div>

      <div className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.nameRow}>
              <h2>Rahul Verma</h2>
              <span className={styles.badge}>Processed</span>
            </div>
            <span className={styles.loanType}>Home Loan</span>
          </div>

          <div className={styles.toggleContainer}>
            <div className={styles.toggle}></div>
            <span>Summary Tiles</span>
          </div>
        </div>

        {/* Summary */}
        <div className={styles.summaryGrid}>
          {summaryCards?.map((item, index) => (
            <div className={styles.card} key={index}>
              <p className={styles.title}>{item?.title}</p>
              <h2 className={styles.amount}>{item?.value}</h2>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Sidebar Menu */}
          <div className={styles.sidebar}>
            {menu.map((item, index) => (
              <div
                key={item}
                onClick={() => handleMenuClick(index)}
                className={`${styles.menuItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className={styles.content}>
            {/* 1. Applicant Information */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[0] = el)}
            >
              <Accordion
                isOpen={openSections[0]}
                onToggle={() => toggleAccordion(0)}
                icon={<UserCheck size={16} strokeWidth={2} color="black" />}
                title={"Applicant Information"}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
              >
                <CustomDataTable
                  columns={applicantColumns}
                  data={applicantData}
                  className={styles.dataTable}
                />
              </Accordion>
            </div>

            {/* 2. Loan Details */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[1] = el)}
            >
              <Accordion
                isOpen={openSections[1]}
                onToggle={() => toggleAccordion(1)}
                icon={<Banknote size={16} strokeWidth={1.8} />}
                title={"Loan Details"}
                style={{ width: "100%" }}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
              >
                <div className={styles.loanDetailsGrid}>
                  {LOAN_DETAILS_SECTIONS.map((section, sIdx) => (
                    <div key={sIdx}>
                      {section.sectionTitle && (
                        <div className={styles.sectionHeading}>
                          {section.sectionTitle}
                        </div>
                      )}
                      <div className={styles.detailRow}>
                        {section.fields.map((field) => (
                          <div className={styles.detailItem} key={field.key}>
                            <span className={styles.detailLabel}>
                              {field.label}
                            </span>
                            {renderFieldValue(field, loanData[field.key])}
                          </div>
                        ))}
                        {Array.from({
                          length: 4 - section.fields.length,
                        }).map((_, i) => (
                          <div
                            className={styles.detailItem}
                            key={`empty-${i}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>

            {/* 3. Disbursements Information */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[2] = el)}
            >
              <Accordion
                isOpen={openSections[2]}
                onToggle={() => toggleAccordion(2)}
                icon={<Receipt size={16} strokeWidth={1.8} />}
                title={"Disbursements Information"}
                style={{ width: "100%" }}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
              >
                <CustomDataTable
                  columns={disbursementColumns || applicantColumns}
                  data={disbursementData || applicantData}
                  className={styles.dataTable}
                />
              </Accordion>
            </div>

            {/* 4. Commission */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[3] = el)}
            >
              <Accordion
                isOpen={openSections[3]}
                onToggle={() => toggleAccordion(3)}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
                icon={<Percent size={16} strokeWidth={1.8} />}
                title={
                  <div className={styles.accordionHeaderWithBadge}>
                    <span>Commission</span>
                    <span className={styles.greenHeaderBadge}>
                      Total Commission : ₹28,640.00
                    </span>
                  </div>
                }
                style={{ width: "100%" }}
              >
                <CustomDataTable
                  columns={commissionColumns || applicantColumns}
                  data={commissionData || applicantData}
                  className={styles.dataTable}
                />
              </Accordion>
            </div>

            {/* 5. Broker Information */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[4] = el)}
            >
              <Accordion
                isOpen={openSections[4]}
                onToggle={() => toggleAccordion(4)}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
                icon={<UserCheck2 size={16} strokeWidth={1.8} />}
                title={
                  <div className={styles.accordionHeaderWithBadge}>
                    <span>Broker Information</span>
                    <span className={styles.pinkHeaderBadge}>
                      Total Referral Fee: ₹8,640
                    </span>
                  </div>
                }
                style={{ width: "100%" }}
              >
                <CustomDataTable
                  columns={brokerColumns || applicantColumns}
                  data={brokerData || applicantData}
                  className={styles.dataTable}
                />
              </Accordion>
            </div>

            {/* 6. Notes / Additional Information */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[5] = el)}
            >
              <Accordion
                isOpen={openSections[5]}
                onToggle={() => toggleAccordion(5)}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
                icon={<FileText size={16} strokeWidth={1.8} />}
                title={"Notes / Additional Information"}
                style={{ width: "100%" }}
              >
                <div className={styles.notesContainer}>
                  <p>{defaultNotes}</p>
                </div>
              </Accordion>
            </div>

            {/* 7. Documents */}
            <div
              className={styles.section}
              ref={(el) => (sectionRefs.current[6] = el)}
            >
              <Accordion
                isOpen={openSections[6]}
                onToggle={() => toggleAccordion(6)}
                titleStyle={{
                  width: "100%",
                  fontFamily: "'Inter Variable', system-ui, sans-serif",
                  fontWeight: 550,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  letterSpacing: "0.2px",
                  color: "rgb(108, 107, 107)",
                }}
                icon={<FileCheck2 size={16} strokeWidth={1.8} />}
                title={"Documents"}
                style={{ width: "100%" }}
              >
                <div className={styles.documentsGrid}>
                  {documentsData.map((doc, idx) => (
                    <div className={styles.documentCard} key={idx}>
                      <div className={styles.pdfIconWrapper}>
                        <FileCode2 className={styles.pdfIcon} size={20} />
                        <span className={styles.pdfLabel}>PDF</span>
                      </div>
                      <div className={styles.documentMeta}>
                        <p className={styles.documentName}>{doc.name}</p>
                        <span className={styles.documentSize}>{doc.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Slide-in Sidebar for Activity Logs */}
      <SidebarWrapper
        isOpen={isActivityOpen}
        onClose={() => setIsActivityOpen(false)}
        title="Activity Log"
      >
        <div className={styles.activityLogList}>
          {activityLogsData.map((log) => (
            <div key={log.id} className={styles.activityLogItem}>
              <div className={styles.activityHeader}>
                <div className={styles.userInfo}>
                  <img
                    src={log.avatar}
                    alt={log.user}
                    className={styles.avatar}
                  />
                  <div className={styles.titleGroup}>
                    <h4 className={styles.logTitle}>{log.title}</h4>
                    <p className={styles.logUser}>{log.user}</p>
                  </div>
                </div>
                <span className={styles.logTimestamp}>{log.timestamp}</span>
              </div>

              {log.type === "status" && (
                <div className={styles.changeBox}>
                  <div className={styles.changeColumn}>
                    <span className={styles.changeLabel}>From</span>
                    <span className={styles.statusBadgeBlue}>{log.from}</span>
                  </div>
                  <div className={styles.changeColumn}>
                    <span className={styles.changeLabel}>To</span>
                    <span className={styles.statusBadgeYellow}>{log.to}</span>
                  </div>
                </div>
              )}

              {log.type === "amount" && (
                <>
                  {log.field && (
                    <p className={styles.fieldLabel}>{log.field}</p>
                  )}
                  <div className={styles.changeBox}>
                    <div className={styles.changeColumn}>
                      <span className={styles.changeLabel}>From</span>
                      <span className={styles.changeValue}>{log.from}</span>
                    </div>
                    <div className={styles.changeColumn}>
                      <span className={styles.changeLabel}>To</span>
                      <span className={styles.changeValue}>{log.to}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </SidebarWrapper>
    </>
  );
}