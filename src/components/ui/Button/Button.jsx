import styles from "./Button.module.css";

export const Button = ({ title, disabled, className, ...otherProps }) => {
  return (
    <button
      className={`${className} ${styles.button} ${disabled && styles.disabled}`}
      disabled={disabled}
      {...otherProps}
    >
      {title}
    </button>
  );
};
