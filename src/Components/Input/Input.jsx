import styles from "./Input.module.css";
export default function Input(props) {
  console.log(props.type);
  return (
    <div className={styles.input_group}>
      <input
        required={props.req}
        type={props.type}
        disabled={props.disabled}
        className={styles.input}
      />
      <label className={styles.user_label}>{props.labelname}</label>
    </div>
  );
}
