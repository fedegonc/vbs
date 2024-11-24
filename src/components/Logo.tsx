import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <img
        src="https://via.placeholder.com/50"
        alt="Logo"
        className="logo-image"
      />
      <span className="logo-text">MiAplicación</span>
    </div>
  );
};

export default Logo;
