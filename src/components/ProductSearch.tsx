'use client';
import { useState, useEffect, ChangeEvent, JSX } from 'react';
import styles from './ProductSearch.module.css';
import type { Product } from '@/data/products';   // ← import the real type

interface ProductSearchProps {
  products: Product[];
  onSearchResults?: (results: Product[]) => void; // optional callback
}

const ProductSearch = ({ products, onSearchResults }: ProductSearchProps): JSX.Element => {
  const [searchTerm, setSearchTerm]   = useState('');
  const [filtered, setFiltered]       = useState<Product[]>(products);

  // Filter whenever the term or original list changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const result = term
      ? products.filter(p =>
          p.name.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
        )
      : products;

    setFiltered(result);
    onSearchResults?.(result);              // lift state up if parent cares
  }, [searchTerm, products, onSearchResults]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = (): void => setSearchTerm('');

  return (
  <div className={styles.searchContainer}>
    <div className={styles.searchWrapper}>
      {/* Category Dropdown */}
      <select className={styles.categoryDropdown}>
        <option value="all">All</option>
        <option value="mens">Men's Fashion</option>
        <option value="womens">Women's Fashion</option>
        <option value="kids">Kids' Fashion</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Search for Products"
      />

      {/* Search Button */}
      <button className={styles.searchButton} type="submit">
        <svg className={styles.searchIcon} viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </button>

      {/* Clear button (if needed) */}
      {searchTerm && (
        <button onClick={clearSearch} className={styles.clearBtn}>×</button>
      )}
    </div>

    {/* Suggestions Dropdown */}
    {searchTerm && (
      <div className={styles.suggestionsDropdown}>
        {filtered.slice(0, 5).map(p => (
          <div key={p.id} className={styles.suggestionItem}>
            <svg className={styles.suggestionIcon} viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <span className={styles.suggestionText}>{p.name}</span>
            <span className={styles.price}>${p.price}</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className={styles.suggestionItem}>
            <span className={styles.suggestionText}>No results found</span>
          </div>
        )}
      </div>
    )}
  </div>
  )
}
export default ProductSearch;

