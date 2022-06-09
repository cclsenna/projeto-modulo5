import styles from "./Input.module.css";
export default function Input(props) {

  return (
    <div  className={styles.input_group}>
      <input
        required={props.req}
        name={props.name}
        value={props.value}
       defaultValue={props.defaultValue}
        onBlur={props.onBlur}
        onChange={props.onChange}
        list={props.list}
        type={props.type}
        disabled={props.disabled}
        className={styles.input}
        data-matricula={props['data-matricula']}
      />
      <label className={styles.user_label}>{props.labelname}</label>
     </div>
  );
}
