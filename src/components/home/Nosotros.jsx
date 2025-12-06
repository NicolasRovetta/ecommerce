import { useState } from 'react'
import './Nosotros.css'

function Nosotros() {

  const [showValues, setShowValues] = useState(false)
  const [showMission, setShowMission] = useState(false)
  const [showVision, setShowVision] = useState(false)

  return (
    <section className='nosotros app'>
      <div className="animated-bg-nosotros">
        <div className="moving-circles-bg-nosotros">
          <div className="circle-nosotros circle-nosotros1"></div>
          <div className="circle-nosotros circle-nosotros2"></div>
          <div className="circle-nosotros circle-nosotros3"></div>
        </div>
      </div>
      <div className="contentContainer modern-nosotros">
        <h2 className="title">¿Por qué elegirnos para tu e-commerce personalizado?</h2>
        <p className="intro">
          <strong>En iStore, no solo vendemos tecnología: <span className="highlight">creamos experiencias digitales únicas</span> para emprendedores y empresas que buscan destacar en el mundo online.</strong>
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span role="img" aria-label="asesoramiento" className="icon">💡</span>
            <h3>Asesoramiento a medida</h3>
            <p>Te guiamos en cada paso para que tu tienda online refleje tu identidad y objetivos de negocio.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="originales" className="icon">🛒</span>
            <h3>Soluciones escalables</h3>
            <p>Desde catálogos simples hasta integraciones avanzadas: tu e-commerce crece con vos.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="experiencia" className="icon">🎨</span>
            <h3>Diseño personalizado</h3>
            <p>Interfaces modernas, intuitivas y adaptadas a tu marca. ¡Olvidate de los sitios genéricos!</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="soporte" className="icon">🤝</span>
            <h3>Acompañamiento post-lanzamiento</h3>
            <p>Soporte técnico, mejoras continuas y capacitación para que tu tienda siempre esté al día.</p>
          </div>
        </div>
        <div className="interactive-section">
          <button className="interactive-btn" onClick={() => setShowMission(!showMission)}>
            {showMission ? 'Ocultar Misión' : 'Ver nuestra Misión'}
          </button>
          {showMission && (
            <div className="interactive-content">
              <h4>Misión</h4>
              <p>Ser el socio estratégico de quienes buscan vender online, brindando soluciones innovadoras, seguras y personalizadas que potencien su crecimiento.</p>
            </div>
          )}
          <button className="interactive-btn" onClick={() => setShowVision(!showVision)}>
            {showVision ? 'Ocultar Visión' : 'Ver nuestra Visión'}
          </button>
          {showVision && (
            <div className="interactive-content">
              <h4>Visión</h4>
              <p>Construir una comunidad de marcas digitales exitosas, conectadas y en constante evolución.</p>
            </div>
          )}
          <button className="interactive-btn" onClick={() => setShowValues(!showValues)}>
            {showValues ? 'Ocultar Valores' : 'Ver nuestros Valores'}
          </button>
          {showValues && (
            <div className="interactive-content">
              <h4>Valores</h4>
              <ul>
                <li>🚀 Innovación constante</li>
                <li>🤝 Cercanía y compromiso</li>
                <li>🎯 Orientación a resultados</li>
                <li>🔒 Transparencia y confianza</li>
                <li>💡 Creatividad y pasión</li>
              </ul>
            </div>
          )}
        </div>
        <div className="cta-section">
          <h3>¿Listo para potenciar tu e-commerce?</h3>
          <p>Contactanos y descubrí cómo podemos ayudarte a crear una tienda online única, profesional y alineada a tu visión.</p>
          <a href="mailto:nico.rovetta@gmail.com?subject=Quiero%20mi%20tienda%20personalizada&body=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20tienda%20personalizada%20para%20mi%20negocio." className="cta-btn">
            Quiero mi tienda personalizada
          </a>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
