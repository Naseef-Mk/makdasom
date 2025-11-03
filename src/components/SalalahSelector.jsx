import './SalalahSelector.css'
import logoEn from '../assets/logo.jpg'
import logoAr from '../assets/logo-ar.jpg'
import daharizPhoto from '../assets/dahariz.jpg'
import sllPhoto from '../assets/sll.jpg'

const SalalahSelector = ({ onSelectLocation, language, translations }) => {
  const salalahLocations = [
    {
      name: 'New Salalah',
      photo: sllPhoto,
      nameKey: 'newSalalah',
      areaKey: 'newSalalahArea'
    },
    {
      name: 'Dahariz',
      photo: daharizPhoto,
      nameKey: 'dahariz',
      areaKey: 'daharizArea'
    }
  ]


  const currentLogo = language === 'ar' ? logoAr : logoEn

  return (
    <div className="salalah-selector">
      <div className="salalah-container">
        <div className="logo-header">
          <img src={currentLogo} alt={translations.companyName} className="company-logo" />
        </div>
        <div className="salalah-grid">
          {salalahLocations.map((location) => (
            <div
              key={location.name}
              className="location-card"
              onClick={() => onSelectLocation(location.name)}
            >
              <img src={location.photo} alt={translations[location.nameKey]} className="card-photo" />
              <div className="card-content">
                <h3 className="card-title">{translations[location.nameKey]}</h3>
                <p className="card-area">{translations[location.areaKey]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SalalahSelector
