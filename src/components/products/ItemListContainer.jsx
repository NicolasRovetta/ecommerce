import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './ItemListContainer.css'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Puedes ajustar la cantidad por página

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true)
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(productosList);
      setLoading(false)
    };

    fetchProductos();
  }, []) // Corregido: array de dependencias vacío

  // Calcular los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      {loading
        ? <div className="loading-text">Cargando productos...</div>
        : <>
          <ItemList items={currentItems} />
          <div className="pagination-controls">
            <button className="pagination-btn" onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
            <span className="pagination-info">Página {currentPage} de {totalPages}</span>
            <button className="pagination-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
          </div>
        </>
      }
    </div>
  )
}

export default ItemListContainer