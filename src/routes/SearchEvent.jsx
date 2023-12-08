import { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '../service/api';
import './searchEvent.scss';

export default function SearchEvent() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');
  const [placeholder, setPlaceholder] = useState('Buscar por...');

  const handleSearch = async () => {
    try {
      const response = await api.get(`/events/${searchType}/${searchTerm}`);
      const { data } = response;
      setEvents(data);
    } catch (error) {
      console.error('Erro ao obter eventos:', error);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setEvents([]);
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
    setEvents([]);
    setSearchTerm('');
    if (e.target.value === 'event') {
      setPlaceholder('Buscar por nome');
    } else if (e.target.value === 'category') {
      setPlaceholder('');
    } else if (e.target.value === 'date') {
      setPlaceholder('');
    }
  };

  return (
    <div className="home-container">
      <h1>Buscar Eventos</h1>

      <div className="search-bar">
        {searchType === 'event' && (
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        {searchType === 'category' && (
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        {searchType === 'date' && (
          <input
            type="date"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <select value={searchType} onChange={handleSelectChange}>
          <option value="event">Nome</option>
          <option value="category">Categoria</option>
          <option value="date">Data</option>
        </select>
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
        <button type="button" onClick={handleClear}>
          Limpar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Local</th>
            <th>Data</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhum evento encontrado.</td>
            </tr>
          ) : (
            events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.location.name}</td>
                <td>
                  {format(new Date(event.date), 'dd-MM-yyyy', {
                    locale: ptBR,
                  })}
                </td>
                <td>{event.category.name}</td>
                <td>{event.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
