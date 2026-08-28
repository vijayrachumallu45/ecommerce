import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Search, filter, sort & pagination states from URL
  const currentKeyword = searchParams.get('keyword') || '';
  const currentCategory = searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'newest';
  const currentPage = Number(searchParams.get('page')) || 1;

  const [totalPages, setTotalPages] = useState(1);

  // Fetch categories once
  useEffect(() => {
    API.get('/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Failed to load categories', err));
  }, []);

  // Fetch products whenever params change
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const params = new URLSearchParams();
        if (currentKeyword) params.append('keyword', currentKeyword);
        if (currentCategory && currentCategory !== 'All') params.append('category', currentCategory);
        if (currentSort) params.append('sort', currentSort);
        params.append('page', currentPage);
        params.append('limit', 8);

        const response = await API.get(`/products?${params.toString()}`);
        setProducts(response.data.products);
        setTotalPages(response.data.pages || 1);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentKeyword, currentCategory, currentSort, currentPage]);

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'All') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    // Reset page to 1 on filter/search change
    if (key !== 'page') {
      newParams.delete('page');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="products-page page-container">
      <div className="products-header-banner">
        <h1>Explore Products</h1>
        <p>Find the best items tailored just for you</p>
      </div>

      <div className="products-controls">
        <SearchBar
          initialValue={currentKeyword}
          onSearch={(keyword) => updateParam('keyword', keyword)}
        />

        <div className="sort-wrapper">
          <label htmlFor="sort-select" className="sort-label">
            <SlidersHorizontal size={16} /> Sort By:
          </label>
          <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="products-layout">
        {/* Sidebar Categories Filter */}
        <aside className="category-sidebar">
          <h3>
            <Filter size={18} /> Categories
          </h3>
          <ul className="category-filter-list">
            <li>
              <button
                className={`category-btn ${currentCategory === 'All' ? 'active' : ''}`}
                onClick={() => updateParam('category', 'All')}
              >
                All Categories
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat._id || cat.name}>
                <button
                  className={`category-btn ${currentCategory === cat.name ? 'active' : ''}`}
                  onClick={() => updateParam('category', cat.name)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid Area */}
        <main className="products-main-content">
          {loading ? (
            <Loading message="Fetching products catalog..." />
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : products.length === 0 ? (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try adjusting your search criteria or category filter.</p>
              <button
                className="btn btn-outline"
                onClick={() => setSearchParams({})}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => updateParam('page', currentPage - 1)}
                  >
                    &laquo; Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      className={`pagination-btn ${p === currentPage ? 'active' : ''}`}
                      onClick={() => updateParam('page', p)}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    className="pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => updateParam('page', currentPage + 1)}
                  >
                    Next &raquo;
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
