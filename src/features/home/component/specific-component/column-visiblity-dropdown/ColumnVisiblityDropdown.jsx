import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import styles from "./ColumnVisiblityDropdown.module.css";

const ColumnVisiblityDropdown = ({
  columns = [],
  onSave,
  onCancel,
  searchPlaceholder = "Search for Loans",
}) => {
  const [search, setSearch] = useState("");
  const [localColumns, setLocalColumns] = useState(columns);
const dropdownRef = useRef(null);
  useEffect(() => {
    setLocalColumns(columns);
  }, [columns]);

  const filteredColumns = useMemo(() => {
    return localColumns.filter((column) =>
      column?.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [localColumns, search]);

  const handleToggle = (key) => {
    setLocalColumns((prev) =>
      prev.map((column) =>
        column.key === key
          ? {
              ...column,
              visible: !column.visible,
            }
          : column
      )
    );
  };

  const handleSave = () => {
    onSave?.(localColumns);
  };

  const handleCancel = () => {
    setLocalColumns(columns);
    onCancel?.();
  };



  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      handleCancel();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, [columns]);

  return (
<div
  ref={dropdownRef}
  className={styles.dropdown}
>      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />

          <input
            className={styles.searchInput}
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.list}>
        {filteredColumns.map((column) => (
          <label
            key={column.key}
            className={styles.option}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={column.visible !== false}
              onChange={() => handleToggle(column.key)}
            />

            <span className={styles.label}>
              {column.title}
            </span>
          </label>
        ))}
      </div>

      <div className={styles.footer}>
        <button
          className={styles.saveBtn}
          onClick={handleSave}
        >
          Save View
        </button>

        <button
          className={styles.cancelBtn}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ColumnVisiblityDropdown;