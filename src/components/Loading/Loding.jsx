import styles from "./Result.module.css";

export default function Loading({ active }) {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
      <span>〜結果発表〜</span>
    </div>
  );
}
