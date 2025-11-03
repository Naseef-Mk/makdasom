import './LocationDetails.css'
import logoEn from '../assets/logo.jpg'
import logoAr from '../assets/logo-ar.jpg'
import salalahPhoto from '../assets/sll.jpg'
import daharizPhoto from '../assets/dahariz.jpg'

const LocationDetails = ({ location, onBack, language, translations }) => {
  const locationData = {
    'New Salalah': {
      photo: salalahPhoto
    },
    'Dahariz': {
      photo: daharizPhoto
    }
  } 

  const currentLogo = language === 'ar' ? logoAr : logoEn
  const data = locationData[location]
  const locationInfo = translations.locations[location]
  const locationName = location === 'New Salalah' ? translations.newSalalah : translations.dahariz

  return (
    <div className="location-details">
      <button className="back-btn" onClick={onBack}>
        {translations.back}
      </button>
      
      <div className="details-container">
        <div className="logo-section">
          <img src={currentLogo} alt={translations.companyName} className="logo-img" />
          <p className="location-tag">{locationName} {translations.branch}</p>
        </div>

        <div className="content-wrapper">
          <div className="info-section">
            <h2>{translations.contactInfo}</h2>
            <ul className="info-list">
              <li>
                <span className="icon">📍</span>
                <div>
                  <strong>{translations.address}</strong>
                  <p><a href={locationInfo.mapLink} target="_blank" rel="noopener noreferrer">{locationInfo.address}</a></p>
                </div>
              </li>
              <li>
                <span className="icon">📞</span>
                <div>
                  <strong>{translations.phone}</strong>
                  <p><a href={`https://wa.me/${locationInfo.phone.replace(/\s+/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer">{locationInfo.phone}</a></p>
                </div>
              </li>
              <li>
                <span className="icon">🕒</span>
                <div>
                  <strong>{translations.hours}</strong>
                  <p>{locationInfo.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="photo-section">
            <img src={data.photo} alt={`${locationName} ${translations.branch}`} className="location-photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationDetails
