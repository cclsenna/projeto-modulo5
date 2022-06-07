import styles from "./Loading.module.css";
export default function Loading() {
  const pags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.loading__container}>
      <div className={styles.book}>
        <div className={styles.inner}>
          <div className={styles.left}></div>
          <div className={styles.middle}></div>
          <div className={styles.right}></div>
        </div>
        <ul>
          {pags.map(() => (
            <li></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
