import { useEffect } from 'react';
import styles from './SidebarWrapper.module.css';

export default function SidebarWrapper({ 
  isOpen, 
  onClose, 
  title = 'Menu', 
  children 
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      <aside 
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        aria-expanded={isOpen}
        role="dialog"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button 
            onClick={onClose} 
            className={styles.closeButton}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </aside>
    </>
  );
}