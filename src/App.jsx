import { useState } from 'react'
import { PRAYERS, CATEGORIES } from './data/prayers'
import PrayerCard from './components/PrayerCard'
import './App.css'

export default function App() {
  const [activeCat, setActiveCat] = useState('all')

  const filtered = activeCat === 'all'
    ? PRAYERS
    : PRAYERS.filter(p => p.cats.includes(activeCat))

  return (
    <div className="app">
      <header className="header">
        <span className="star">✡</span>
        <h1>סידור תפילה</h1>
        <p className="subtitle">Siddur — Молитвенник</p>
      </header>

      <main>
        <div className="tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`tab ${activeCat === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="prayer-list">
          {filtered.map(prayer => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>

        <div className="ornament">✦ &nbsp; ✡ &nbsp; ✦</div>
      </main>
    </div>
  )
}
