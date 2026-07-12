import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "./CreateViewPopup.module.css";

const CreateViewModal = ({ isOpen, onClose, onCreate }) => {
  const [viewName, setViewName] = useState("Default Review");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (viewName.trim()) {
        setViewName('Default Review')
      onCreate(viewName);
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      {/* Modal Container */}
      <div className={styles.modalCard}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Creaye Custom View</h2>
          <button 
            onClick={onClose}
            className={styles.closeBtn}
            type="button"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Enter View Name <span className={styles.asterisk}>*</span>
            </label>
            <input
              type="text"
              value={viewName}
              onChange={(e) => setViewName(e.target.value)}
              className={styles.input}
              autoFocus
            />
          </div>

          {/* Divider Line */}
          <div className={styles.divider}></div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.createBtn}
            >
              Create View
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateViewModal;