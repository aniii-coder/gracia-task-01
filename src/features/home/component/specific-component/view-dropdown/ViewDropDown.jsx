import { useState, useEffect } from "react";
import styles from "./ViewDropdown.module.css";
import CustomDropDown from "../../../../../componets/custom/custom-dropdown/CustomDropDown";

const ViewDropDown = ({ viewList = [], selected = null, onApply }) => {
  const [confirmedSelected, setConfirmedSelected] = useState(selected);
  const [tempSelected, setTempSelected] = useState(selected);
  const [dropdownKey, setDropdownKey] = useState(0);

  useEffect(() => {
    setConfirmedSelected(selected);
    setTempSelected(selected);
  }, [selected]);

  const dropdownConfig = {
    placeholder: "Default view",
    
    renderSelected: (selectedItem) => (
      <span className={styles.triggerText}>
        {selectedItem ? selectedItem.name : "Default View"}
      </span>
    ),

    renderItem: (item) => {
      console.log('tempSelected, item :>> ', tempSelected, item);
      const isChecked = tempSelected?.id === item.id;
      const isLastItem = viewList[viewList.length - 1]?.id === item.id;

      return (
        <div className={styles.itemContainer}>
          {/* Main Option Row */}
          <div
            className={styles.rowItem}
            onClick={(e) => {
              e.stopPropagation(); 
              setTempSelected(item);
            }}
          >
            <div className={`${styles.radioCustom} ${isChecked ? styles.radioActive : ""}`} />
            <span className={styles.label}>{item.name}</span>
            {item.isDefault && <span className={styles.badge}>Default View</span>}
          </div>

          {/* Action Footer Button Bar */}
          {isLastItem && (
            <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.applyBtn}
                onClick={() => {
                  setConfirmedSelected(tempSelected);
                  if (onApply) onApply(tempSelected);
                  document.dispatchEvent(new MouseEvent("mousedown"));
                }}
              >
                Apply
              </button>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => {
                  setTempSelected(confirmedSelected);
                  document.dispatchEvent(new MouseEvent("mousedown"));
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      );
    },
  };

  return (
    <CustomDropDown
      key={dropdownKey}
      viewList={viewList}
      selected={confirmedSelected}
      onSelect={() => {}} 
      config={dropdownConfig}
      btnStyle={{width:'170px'}}
      menuStyle={{width: '300px'}}
    />
  );
};

export default ViewDropDown;