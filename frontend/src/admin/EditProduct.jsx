import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { ArrowLeft, Edit3, Save } from 'lucide-react';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    stock: '',
    rating: '4.5',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const [catRes, prodRes] = await Promise.all([
          API.get('/categories'),
          API.get(`/products/${id}`),
        ]);

        setCategories(catRes.data);
        const prod = prodRes.data;
        setFormData({
          name: prod.name || '',
          description: prod.description || '',
          price: prod.price !== undefined ? prod.price : '',
          image: prod.image || '',
          category: prod.category || '',
          stock: prod.stock !== undefined ? prod.stock : '',
          rating: prod.rating || '4.5',
        });
      } catch (err) {
        setError(err.message || 'Failed to fetch product data');
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await API.put(`/products/${id}`, {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        rating: parseFloat(formData.rating),
      });

      navigate('/admin/products');
    } catch (err) {
      setError(err.message || 'Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <Loading message="Loading product information..." />;

  return (
    <div className="admin-form-page page-container">
      <Link to="/admin/products" className="back-link">
        <ArrowLeft size={18} /> Back to Products Management
      </Link>

      <div className="admin-form-card">
        <div className="card-header">
          <h2>
            <Edit3 size={22} /> Edit Product
          </h2>
          <p>Update product information for listing ID #{id.substring(id.length - 6)}</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Title *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((c) => (
                  <option key={c._id || c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                step="0.01"
                min="0"
                id="price"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="stock">Stock Quantity *</label>
              <input
                type="number"
                min="0"
                id="stock"
                name="stock"
                className="form-control"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1 to 5)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                id="rating"
                name="rating"
                className="form-control"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              className="form-control"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          {formData.image && (
            <div className="image-preview-wrapper mb-3">
              <label>Image Preview:</label>
              <img src={formData.image} alt="Preview" className="img-preview" />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="description">Detailed Description *</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary btn-lg">
            <Save size={18} /> {loading ? 'Updating Product...' : 'Update Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
