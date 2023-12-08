import PropTypes from 'prop-types';
import './dateString.scss';

export default function DateString({ dataString }) {
  const formatarData = () => {
    const data = new Date(dataString);

    const day = data.getDate();
    const month = data.getMonth();

    const monthNames = [
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ];

    const monthName = monthNames[month];
    return { day, monthName };
  };

  const { day, monthName } = formatarData(dataString);

  return (
    <div className="date-string">
      <p className="day">{day}</p>
      <p className="month">{monthName}</p>
    </div>
  );
}

DateString.propTypes = {
  dataString: PropTypes.string.isRequired,
};
