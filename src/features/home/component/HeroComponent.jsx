import React, { useEffect, useMemo, useState } from "react";
import BreadCrumbBar from "../../../componets/breadcrumb-bar/BreadCrumbBar";
import styles from "./HeroComponent.module.css";
import CustomButton from "../../../componets/custom/custom-button/CustomButton";
import { buttonConfig, exportData, heroButtonConfig, mockViews } from "./utils";
import {
  ChevronDown,
  ChevronRight,
  ColumnsIcon,
  Filter,
  Search,
} from "lucide-react";
import CustomDataTable, {
  // disbursementData,
} from "../../../componets/custom/custom-data-table/CustomDataTable";
import TablePagination from "../../../componets/custom/custom-data-table/component/table-pagination/TablePagination";
import { getColumnsConfig } from "../../../componets/custom/custom-data-table/utils/column";
import ColumnVisiblityDropdown from "./specific-component/column-visiblity-dropdown/ColumnVisiblityDropdown";
import CustomDropDown from "../../../componets/custom/custom-dropdown/CustomDropDown";
import {
  dropdownConfig,
  moduleList,
} from "../../../componets/breadcrumb-bar/utils/Utils";
import ViewDropDown from "./specific-component/view-dropdown/ViewDropDown";
import CreateViewModal from "../../../componets/custom/custom-data-table/component/popup/create-view-popup/CreateViewModal";
import Accordion from "../../../componets/accordian/Accordian";
import { useLocation, useParams } from "react-router-dom";
import useRouteInfo from "../../../helpers";

const HeroComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);







const {
  pathname,
  slugs,
  query,
  route,
  basePath,
  dynamicSlug,
} = useRouteInfo();



const { module, page } = useParams();


  console.log('module, page :>> ', module, page);


  const columnsConfig = useMemo(() => getColumnsConfig(pathname), [pathname]);
  const [columns, setColumns] = useState(columnsConfig);
  useEffect(() => {
    setColumns(columnsConfig);
  }, [columnsConfig]);
  const [views, setViews] = useState([
    {
      id: 1,
      name: "Default View",
      isDefault: true,
      columns: columnsConfig,
    },
  ]);

  const [selectedView, setSelectedView] = useState(views[0]);
  const [disbursmentDataList, setDisbursementDataList] = useState([])
  const [showDropdown, setShowDropdown] = useState(false);

  const [pendingColumns, setPendingColumns] = useState(null);

  const [showCreateViewModal, setShowCreateViewModal] = useState(false);

  const handleSaveColumns = (updatedColumns) => {
    setPendingColumns(updatedColumns);

    setShowDropdown(false);

    setShowCreateViewModal(true);
  };



     const getDisbursements = async () => {
    try {
      const response = await fetch("https://mock-api-ubn9.onrender.com/disbursements");
      console.log('response :>> ', response);
  
      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}: ${response.statusText}`
        );
      }
      const data = await response.json();  
      setDisbursementDataList(data)
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Something went wrong",
        data: [],
      };
    }
  };
  



  

  const handleCreateView = (viewName) => {
    const newView = {
      id: Date.now(),
      name: viewName,
      isDefault: false,
      columns: pendingColumns,
    };

    setViews((prev) => [...prev, newView]);

    // Don't apply it automatically
    setShowCreateViewModal(false);

    setPendingColumns(null);
  };

  const handleCancel = () => {
    setShowDropdown(false);
  };

  const title = "Disbursment";
  const routes = useParams();
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

  const totalPages = Math.ceil(disbursmentDataList?.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;

  const paginatedData = disbursmentDataList.slice(
    startIndex,
    startIndex + rowsPerPage,
  );




useEffect(() => {
  getDisbursements()
},[])




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
              {/* <button className={styles.actionButton}>
                Saved View
                <ChevronDown size={16} />
              </button> */}
              {/* <CustomDropDown 
                v
              /> */}
              <ViewDropDown
                viewList={views}
                selected={selectedView}
                onApply={(view) => {
                  setSelectedView(view);

                  setColumns(view.columns);
                }}
              />

              <button className={styles.actionButton} onClick={() => getDisbursements()}>
                Export All
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
          {/* {console.log("columnConfig >> ", columnsConfig, disbursementData)} */}
          <CustomDataTable
            columns={columns}
            data={paginatedData}
            // centerHeader={<span>Disbursement</span>}
            rightHeader={
              <div className={styles.columnWrapper}>
                <button
                  className={styles.columnButton}
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  <ColumnsIcon size={16} />
                </button>

                {showDropdown && (
                  <div className={styles.dropdownWrapper}>
                    <ColumnVisiblityDropdown
                      columns={columns}
                      onSave={handleSaveColumns}
                      onCancel={handleCancel}
                    />
                  </div>
                )}
              </div>
            }
          />
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onRowsPerPageChange={(value) => {
              setRowsPerPage(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
      <CreateViewModal
        isOpen={showCreateViewModal}
        onClose={() => setShowCreateViewModal(false)}
        onCreate={handleCreateView}
      />
    </>
  );
};

export default HeroComponent;
