import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { projects } from '../../data/projects';
import './SearchBar.css';

const SearchBar = () => {
  const { searchOpen, toggleSearch } = useSite();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => { document.body.style.overflow = ''; };
  }, [searchOpen]);

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (q.length > 1) {
      const filtered = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (id) => {
    navigate(`/projects/${id}`);
    toggleSearch();
  };

  if (!searchOpen) return null;

  return (
    <div className="search-overlay" onClick={toggleSearch} role="dialog" aria-modal="true">
      <div className="search-bar" onClick={(e) => e.stopPropagation()}>
        <button className="search-bar__close" onClick={toggleSearch} aria-label="Close search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="search-bar__input-wrap">
          <svg className="search-bar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-bar__input"
            placeholder="Search projects, services, insights..."
            value={query}
            onChange={handleSearch}
            aria-label="Search"
          />
        </div>
        {results.length > 0 && (
          <div className="search-bar__results">
            {results.map((project) => (
              <button key={project.id} className="search-bar__result" onClick={() => handleSelect(project.id)}>
                <img src={project.image} alt={project.title} className="search-bar__result-img" />
                <div>
                  <span className="search-bar__result-title">{project.title}</span>
                  <span className="search-bar__result-category">{project.category}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
