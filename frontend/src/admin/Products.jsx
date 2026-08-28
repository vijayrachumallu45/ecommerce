import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { PlusCircle, Edit3, Trash2, Search } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await API.get('/products?limit=100');
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete product "${name}"?`)) return;

    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete product');
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase()) ||
    p.category.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="admin-products-page page-container">
      <div className="admin-header">
        <div>
          <h1>Product Management</h1>
          <p>Create, update, or remove products from the ShopEase store</p>
        </div>
        <Link to="/admin/products/add" className="btn btn-primary">
          <PlusCircle size={18} /> Add New Product
        </Link>
      </div>

      {/* Admin Nav Subbar */}
      <div className="admin-subnav">
        <Link to="/admin" className="admin-subnav-btn">Dashboard</Link>
        <Link to="/admin/products" className="admin-subnav-btn active">Products</Link>
        <Link to="/admin/orders" className="admin-subnav-btn">Orders</Link>
        <Link to="/admin/users" className="admin-subnav-btn">Users</Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="admin-table-card">
        <div className="admin-search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search products by title or category..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {loading ? (
          <Loading message="Loading product database..." />
        ) : filteredProducts.length === 0 ? (
          <p className="p-4 text-center text-muted">No products found matching criteria.</p>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((prod) => (
                  <tr key={prod._id}>
                    <td>
                      <img src={prod.image} alt={prod.name} className="table-thumb" />
                    </td>
                    <td>
                      <strong>{prod.name}</strong>
                    </td>
                    <td>
                      <span className="badge-chip">{prod.category}</span>
                    </td>
                    <td>${prod.price.toFixed(2)}</td>
                    <td>
                      <span className={`stock-indicator ${prod.stock > 0 ? 'text-success' : 'text-danger'}`}>
                        {prod.stock} units
                      </span>
                    </td>
                    <td>⭐ {prod.rating ? prod.rating.toFixed(1) : '4.5'}</td>
                    <td className="text-right">
                      <div className="action-btn-group">
                        <Link
                          to={`/admin/products/edit/${prod._id}`}
                          className="btn-icon btn-outline"
                          title="Edit Product"
                        >
                          <Edit3 size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(prod._id, prod.name)}
                          className="btn-icon btn-outline-danger"
                          title="Delete Product"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
