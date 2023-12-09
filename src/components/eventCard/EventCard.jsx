import { useState } from 'react';
import PropTypes from 'prop-types';
import DateString from '../date/DateString';
import formatDate from '../../assets/formatDate';
import './eventCard.scss';

export default function EventCard({ event }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card" key={event.id}>
      <div className="card-header">
        <span>
          <DateString dataString={event.date} />
        </span>
        <div>
          <p className="title">{event.name}</p>
          <div className="containerDetails">
            <p>{event.location.name}</p>
            <p>{formatDate(event.date)}</p>
            <p>{event.category.name}</p>
          </div>
        </div>
        <button type="button" onClick={toggleDetails}>
          Detalhes
        </button>
      </div>
      <div className="card-body">
        {showDetails && (
          <div>
            <p>{event.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
