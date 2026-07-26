import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./CustomDropDown.module.css";

const CustomDropDown = ({
  viewList = [],
  selected = null,
  onSelect,
  config,
  btnStyle = { width: '232px' },
  menuStyle = { width: '100%' }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Track alignment settings dynamically
  const [placement, setPlacement] = useState({
    topDown: "down", // "down" or "top"
    align: "left"     // "left" or "right"
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Calculate placement whenever the menu is toggled open
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Estimated menu dimensions (Adjust these fallback heights if your menus are massive)
      const estimatedMenuHeight = 250; 
      const estimatedMenuWidth = parseInt(menuStyle?.width) || rect.width;

      const fitsRight = rect.left + estimatedMenuWidth < viewportWidth;
      const fitsBottom = rect.bottom + estimatedMenuHeight < viewportHeight;

      setPlacement({
        topDown: fitsBottom ? "down" : "top",
        align: fitsRight ? "left" : "right"
      });
    }
  }, [isOpen, menuStyle?.width]);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  // Construct dynamic positioning classNames
  const menuClassName = `
    ${styles.menu} 
    ${placement.topDown === "top" ? styles.openTop : styles.openDown} 
    ${placement.align === "right" ? styles.alignRight : styles.alignLeft}
  `.trim();

  return (
    <div className={styles.dropdown} ref={dropdownRef} style={btnStyle}>
      <button
        className={styles.trigger}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? config.renderSelected(selected) : config?.placeholder}

        <ChevronDown
          className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
          size={18}
        />
      </button>

      {isOpen && (
        <div className={menuClassName} style={menuStyle}>
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