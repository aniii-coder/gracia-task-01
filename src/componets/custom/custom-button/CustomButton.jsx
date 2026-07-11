import styles from "./CustomButton.module.css";

const CustomButton = ({
  config,
  onClick,
  loading = false,
  disabled = false,
}) => {
  const { render, design = {} } = config;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.button} ${design.className || ""}`}
      style={design.style}
      {...design.props}
    >
      {loading ? (
        <span className={styles.loader} />
      ) : (
        render()
      )}
    </button>
  );
};

export default CustomButton;