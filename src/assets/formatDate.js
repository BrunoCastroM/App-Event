const formatDate = (dateString) => {
  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('pt-BR', optionsDate);
  const formattedTime = date.toLocaleTimeString('pt-BR', optionsTime);

  return `${formattedDate} às ${formattedTime}`;
};

export default formatDate;
