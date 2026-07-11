import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./CustomDropDown.module.css";

const CustomDropDown = ({
  viewList = [],
  selected = null,
  onSelect,
  config,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
  }, []);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.trigger}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected
          ? config.renderSelected(selected)
          : config.placeholder}

        <ChevronDown
          className={`${styles.arrow} ${
            isOpen ? styles.rotate : ""
          }`}
          size={18}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {viewList.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              onClick={() => handleSelect(item)}
            >
              {config.renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;