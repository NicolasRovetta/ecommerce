import Item from "./Item";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import "./ItemList.css";

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = selectedCategory
    ? items.filter((item) => item.categoria === selectedCategory)
    : items;
  const handleClearFilter = () => {
    setSelectedCategory("");
  };
  return (
    <div className="product-list-wrapper">
      <div className="filter-container">
        {!showFilters && (
          <button className="filterIconButton" onClick={() => setShowFilters(true)} aria-label="Mostrar filtros">
            <FaFilter className="filterIcon" />
          </button>
        )}
      </div>

      {showFilters && (
        <div className="sideFilterOverlay" onClick={() => setShowFilters(false)}>
          <div className="sideFilterPanel" onClick={e => e.stopPropagation()}>
            <button
              className="closeFilterButton"
              onClick={() => setShowFilters(false)}
              aria-label="Cerrar panel de filtros"
            >
              &#10005;
            </button>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Categorías</h3>
            <button
              className="buttonFilter"
              onClick={() => { setSelectedCategory("MacBook"); setShowFilters(false); }}
            >
              MacBook
            </button>
            <button
              className="buttonFilter"
              onClick={() => { setSelectedCategory("iPhone"); setShowFilters(false); }}
            >
              iPhone
            </button>
            <button
              className="buttonFilter"
              onClick={() => { setSelectedCategory("Accesorio"); setShowFilters(false); }}
            >
              Accesorio
            </button>
            <button className="buttonFilter clear-filter-button" onClick={() => { handleClearFilter(); setShowFilters(false); }}>
              Quitar filtros
            </button>
          </div>
        </div>
      )}

      <div className="item-list-container">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            categoria={item.categoria}
            modelo={item.modelo}
            precio={item.precio}
            descripcion={item.descripcion}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
