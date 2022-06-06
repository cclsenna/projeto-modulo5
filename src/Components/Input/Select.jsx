import styles from "./Input.module.css";
export default function Select(props) {
  return (
    <div className={styles.input_group}>
        <span className={styles.span}>{props.select}</span>
      <select 
      name={props.name}
      className={styles.input}
      >

        {props.context.map((el, index) => (
          <option key={index} value={index+1} className={styles.option} >
            {el}
          </option>
        ))}
      </select>
      
    </div>
  );
}
