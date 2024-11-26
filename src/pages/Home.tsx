import { FC } from 'react';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <section className="text-center my-5">
        <h1>Bienvenido a Tallados Únicos</h1>
        <p>
          Descubre tallados personalizados y únicos hechos con pasión y
          dedicación. Explora nuestras colecciones y contacta con nosotros para
          más información.
        </p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/gallery')}
        >
          Ver Galería
        </button>
      </section>

      <section className="features my-5">
        <h2 className="text-center">¿Qué Ofrecemos?</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Tallados Personalizados</h5>
              <p className="card-text">
                Diseños únicos hechos a medida según tus necesidades.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Madera de Alta Calidad</h5>
              <p className="card-text">
                Utilizamos materiales seleccionados para garantizar
                durabilidad.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Atención al Cliente</h5>
              <p className="card-text">
                Estamos aquí para ayudarte y asegurarnos de que tu experiencia
                sea la mejor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
