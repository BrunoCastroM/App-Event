import { useState, useEffect } from 'react';
import api from '../service/api';
import './home.scss';
import EventCard from '../components/eventCard/EventCard';

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
      <div className="events-container">
        {events.length === 0 ? (
          <div>
            <p colSpan="5">Carregando...</p>
          </div>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}
