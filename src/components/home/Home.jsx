import { useState } from 'react'
import './Home.css'

function Home() {

  const [showMore, setShowMore] = useState(false)

  return (
    <section className='home app'>
      <div className="animated-bg">
        <div className="moving-circles-bg">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </div>
      <div className="contentContainerHome modern-home">
        <h2 className="titleHome">iStore: Tu experiencia Apple personalizada</h2>
        <p className="introHome">
          <strong>Descubrí el futuro de la tecnología con una tienda online pensada para vos.</strong>
        </p>
        <div className="features-grid-home">
          <div className="feature-card-home">
            <span role="img" aria-label="experiencia" className="iconHome">🌟</span>
            <h3>Experiencia inmersiva</h3>
            <p>Probá nuestros dispositivos y descubrí todo su potencial en acción, tanto en tienda física como online.</p>
          </div>
          <div className="feature-card-home">
            <span role="img" aria-label="asesoramiento" className="iconHome">🎯</span>
            <h3>Asesoramiento experto</h3>
            <p>Especialistas que te guían en cada elección para que tu compra sea perfecta.</p>
          </div>
          <div className="feature-card-home">
            <span role="img" aria-label="originales" className="iconHome">✅</span>
            <h3>Productos 100% originales</h3>
            <p>Garantía oficial y calidad certificada en cada compra, sin sorpresas.</p>
          </div>
        </div>
        <div className="cta-section-home">
          <h3>¿Querés tu tienda Apple personalizada?</h3>
          <p>Contactanos y descubrí cómo podemos ayudarte a crear una experiencia única para tus clientes.</p>
          <a href="mailto:nico.rovetta@gmail.com?subject=Quiero%20mi%20ecommerce%20Apple%20personalizado&body=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20tienda%20Apple%20personalizada." className="cta-btn-home">
            Quiero mi tienda Apple personalizada
          </a>
        </div>
        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Ver menos' : 'Ver más ventajas'}
        </button>
        {showMore && (
          <div className="more-features-grid-home">
            <div className="feature-card-home">
              <span role="img" aria-label="soporte" className="iconHome">🔧</span>
              <h3>Soporte postventa premium</h3>
              <p>Te acompañamos en cada paso para que saques el máximo provecho de tu inversión.</p>
            </div>
            <div className="feature-card-home">
              <span role="img" aria-label="comunidad" className="iconHome">🤝</span>
              <h3>Comunidad Apple</h3>
              <p>Sumate a eventos exclusivos y talleres donde la innovación cobra vida.</p>
            </div>
            <div className="feature-card-home">
              <span role="img" aria-label="envío" className="iconHome">🚚</span>
              <h3>Envíos rápidos y seguros</h3>
              <p>Recibí tus productos en tiempo récord y con seguimiento en todo momento.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
