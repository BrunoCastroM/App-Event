import { useState, useEffect } from 'react';
import api from '../service/api';
import formatDate from '../assets/formatDate';
import './home.scss';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await api.get('/event');

        const { data } = response;
        
        setEvents(data);
      } catch (error) {
        console.error('Erro ao obter categorias e localizações:', error);
      }
    };

    getEvents();
  }, []);

  return (
    <div className="home-container">
      <h1>Eventos recentes</h1>

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
              <td colSpan="5">Carregando...</td>
            </tr>
          ) : (
            events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.location.name}</td>
                <td>{formatDate(event.date)}</td>
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
