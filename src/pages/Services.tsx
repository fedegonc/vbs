import { FC } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Web a Medida',
    description: 'Creamos sitios web personalizados, adaptados a tus necesidades y objetivos, asegurando una experiencia de usuario de calidad.',
    price: 'Desde $1,000',
  },
  {
    id: 2,
    title: 'Consultoría Técnica',
    description: 'Ofrecemos asesoramiento técnico para proyectos de desarrollo, ayudándote a elegir la mejor arquitectura y herramientas para tu proyecto.',
    price: 'Desde $500 por sesión',
  },
  {
    id: 3,
    title: 'Mantenimiento y Soporte',
    description: 'Nos encargamos del mantenimiento continuo de tus sistemas, asegurando que todo funcione sin problemas y que se apliquen mejoras periódicas.',
    price: 'Planes desde $200 mensuales',
  },
  {
    id: 4,
    title: 'Optimización SEO',
    description: 'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más visitas y potenciales clientes.',
    price: 'Paquetes desde $300',
  },
];

const Services: FC = () => {
  return (
    <main>
      <h1>Servicios</h1>
      <section className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            {service.price && <p className="service-price">{service.price}</p>}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
