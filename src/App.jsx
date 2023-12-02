import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import './styles/global.scss';

export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}
