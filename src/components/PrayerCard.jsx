import { useState } from 'react'
import styles from './PrayerCard.module.css'

const VIEWS = [
  { id: 'heb',   label: 'עברית' },
  { id: 'trans', label: 'Транскр.' },
  { id: 'ru',    label: 'Перевод' },
]

export default function PrayerCard({ prayer }) {
  const [open, setOpen]     = useState(false)
  const [view, setView]     = useState('heb')

  return (
    <div className={`${styles.card} ${open ? styles.open : ''}`}>
      <div className={styles.header} onClick={() => setOpen(o => !o)}>
        <div className={styles.titles}>
          <div className={styles.titleHe}>{prayer.titleHe}</div>
          <div className={styles.titleRu}>{prayer.titleRu}</div>
        </div>
        <span className={styles.time}>{prayer.time}</span>
        <span className={styles.chevron}>›</span>
      </div>

      {open && (
        <div className={styles.content}>
          <div className={styles.viewSwitch}>
            {VIEWS.map(v => (
              <button
                key={v.id}
                className={`${styles.viewBtn} ${view === v.id ? styles.active : ''}`}
                onClick={() => setView(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div
            className={styles.textBlock}
            dangerouslySetInnerHTML={{ __html: prayer[view] }}
          />

          <div className={styles.note}>
            <strong>Когда:</strong> {prayer.note}
          </div>
        </div>
      )}
    </div>
  )
}
