import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../services/api';
import { ArrowLeft, PlusCircle, Save } from 'lucide-react';

const AddProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
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
    API.get('/categories')
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setFormData((prev) => ({ ...prev, category: res.data[0].name }));
        }
      })
      .catch((err) => console.error('Error fetching categories', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, description, price, image, category, stock } = formData;

    if (!name || !description || price === '' || !image || !category || stock === '') {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);
      await API.post('/products', {
        ...formData,
        price: parseFloat(price),
        stock: parseInt(stock),
        rating: parseFloat(formData.rating || 4.5),
      });

      navigate('/admin/products');
    } catch (err) {
      setError(err.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-form-page page-container">
      <Link to="/admin/products" className="back-link">
        <ArrowLeft size={18} /> Back to Products Management
      </Link>

      <div className="admin-form-card">
        <div className="card-header">
          <h2>
            <PlusCircle size={22} /> Add New Product
          </h2>
          <p>Fill in product details to list it in the store catalog</p>
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
              placeholder="e.g. Wireless Headphones"
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
                <option value="">Select Category</option>
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
                placeholder="49.99"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="stock">Initial Stock Quantity *</label>
              <input
                type="number"
                min="0"
                id="stock"
                name="stock"
                className="form-control"
                placeholder="25"
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
            <label htmlFor="image">Image Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              className="form-control"
              placeholder="https://images.unsplash.com/photo-..."
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
              placeholder="Describe features, material, and specifications..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary btn-lg">
            <Save size={18} /> {loading ? 'Creating Product...' : 'Save Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
