import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';
import './newEvent.scss';

export default function NewEvent() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await api.get('/category');
        const locationsResponse = await api.get('/location');

        setCategories(categoriesResponse.data);
        setLocations(locationsResponse.data);
      } catch (error) {
        console.error('Erro ao obter categorias e localizações:', error);
      }
    };
    fetchData();
  }, []);

  const createEvent = async (e) => {
    e.preventDefault();

    try {
      const categoryId = categories.find((c) => c.name === category)?.id;
      const locationId = locations.find((l) => l.name === location)?.id;

      const event = { name, date, description, categoryId, locationId };

      await api.post('/event', event);

      navigate('/');
    } catch (error) {
      console.error('Erro ao criar evento:', error);
    }
  };

  return (
    <div className="new-event-container">
      <div className="title">
        <h1>Criar evento</h1>
      </div>

      <form className="form-container" onSubmit={createEvent}>
        <input
          type="text"
          name="name"
          placeholder="Nome do evento"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="select-input">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione a categoria</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Selecione a localização</option>
            {locations.map((l) => (
              <option key={l.id} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="date"
          name="date"
          className="date-input"
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          name="description"
          placeholder="Digite seu comentário aqui..."
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Criar evento" className="btn" />
      </form>
    </div>
  );
}
