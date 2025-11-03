import { useState } from 'react'
import SalalahSelector from './components/SalalahSelector'
import LocationDetails from './components/LocationDetails'
import LanguageToggle from './components/LanguageToggle'
import { translations } from './translations'
import './App.css'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [language, setLanguage] = useState('en')

  const t = translations[language]

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      
      {!selectedLocation && (
        <SalalahSelector 
          onSelectLocation={setSelectedLocation}
          language={language}
          translations={t}
        />
      )}
      
      {selectedLocation && (
        <LocationDetails 
          location={selectedLocation} 
          onBack={() => setSelectedLocation(null)}
          language={language}
          translations={t}
        />
      )}
    </div>
  )
}

export default App
