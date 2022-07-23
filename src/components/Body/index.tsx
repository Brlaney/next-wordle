import styles from '@/styles/components/Body.module.scss';

export default function Body() {
  return (
    <div className={styles['main-container']}>
      <div className={styles.grid}>
        {Array(30).fill(null).map((_, i) => (
          <div key={i} className={styles.box}></div>
        ))}
      </div>
    </div>
  )
}
