import styles from "./Button.module.css"

export const Button = ({ title, disabled, ...otherProps}) => {
  return (
    <button className={[ disabled ? styles.disabled : styles.button]} {...otherProps}>{title}</button>
  )
}