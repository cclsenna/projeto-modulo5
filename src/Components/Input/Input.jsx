import styles from "./Input.module.css"
export default function Input(props) {
  return (
    <div className={styles.input_group}>
      <input
        required=""
        type="text"
        name="text"
        autocomplete="off"
        className={styles.input}
        
      />
      <label className={styles.user_label} >First Name</label>
    </div>
  );
}
