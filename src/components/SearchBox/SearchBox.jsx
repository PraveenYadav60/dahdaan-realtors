import React, { useState } from 'react';
import './SearchBox.css';

const CITIES = ['Gurugram', 'Delhi', 'Noida', 'Faridabad', 'Ghaziabad', 'Mumbai'];
const BHK_OPTIONS = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const BUDGET_OPTIONS = [
  'Under ₹30L', '₹30L - ₹50L', '₹50L - ₹80L', '₹80L - ₹1Cr',
  '₹1Cr - ₹2Cr', '₹2Cr - ₹5Cr', 'Above ₹5Cr'
];
const STATUS_OPTIONS = ['Ready to Move', 'Under Construction', 'New Launch'];

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [propertyType, setPropertyType] = useState('Residential');
  const [selectedCity, setSelectedCity] = useState('Gurugram');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedBHK, setSelectedBHK] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showBHKDropdown, setShowBHKDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const tabs = ['Buy', 'Rent', 'New Launch'];

  const handleSearch = () => {
    console.log({
      tab: activeTab,
      city: selectedCity,
      query: searchQuery,
      propertyType,
      budget: selectedBudget,
      bhk: selectedBHK,
      status: selectedStatus,
    });
    alert(`Searching for ${propertyType} properties in ${selectedCity}...`);
  };

  const closeAllDropdowns = () => {
    setShowCityDropdown(false);
    setShowBudgetDropdown(false);
    setShowBHKDropdown(false);
    setShowStatusDropdown(false);
  };

  return (
    <div className="searchbox">
      {/* Tabs */}
      <div className="searchbox__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`searchbox__tab ${activeTab === tab ? 'searchbox__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Row */}
      <div className="searchbox__search-row">
        {/* City Selector */}
        <div className="searchbox__city-wrapper">
          <button
            className="searchbox__city-btn"
            onClick={() => {
              setShowCityDropdown(!showCityDropdown);
              setShowBudgetDropdown(false);
              setShowBHKDropdown(false);
              setShowStatusDropdown(false);
            }}
          >
            <svg className="searchbox__pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{selectedCity}</span>
            <svg className="searchbox__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showCityDropdown && (
            <div className="searchbox__dropdown searchbox__dropdown--city">
              {CITIES.map((city) => (
                <div
                  key={city}
                  className={`searchbox__dropdown-item ${selectedCity === city ? 'searchbox__dropdown-item--selected' : ''}`}
                  onClick={() => {
                    setSelectedCity(city);
                    setShowCityDropdown(false);
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="searchbox__divider" />

        {/* Text Search */}
        <input
          type="text"
          className="searchbox__input"
          placeholder="Search localities, societies and landmarks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={closeAllDropdowns}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />

        {/* Search Button */}
        <button className="searchbox__search-btn" onClick={handleSearch}>
          <svg className="searchbox__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search</span>
        </button>
      </div>

      {/* Filters Row */}
      <div className="searchbox__filters-row">
        {/* Property Type Radio */}
        <div className="searchbox__radio-group">
          {['Residential', 'Commercial'].map((type) => (
            <label key={type} className="searchbox__radio-label">
              <input
                type="radio"
                className="searchbox__radio-input"
                name="propertyType"
                value={type}
                checked={propertyType === type}
                onChange={() => setPropertyType(type)}
              />
              <span className={`searchbox__radio-custom ${propertyType === type ? 'searchbox__radio-custom--checked' : ''}`} />
              <span className="searchbox__radio-text">{type}</span>
            </label>
          ))}
        </div>

        {/* Budget Dropdown */}
        <div className="searchbox__filter-wrapper">
          <button
            className="searchbox__filter-btn"
            onClick={() => {
              setShowBudgetDropdown(!showBudgetDropdown);
              setShowBHKDropdown(false);
              setShowStatusDropdown(false);
              setShowCityDropdown(false);
            }}
          >
            <span>{selectedBudget || 'Budget'}</span>
            <svg className="searchbox__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showBudgetDropdown && (
            <div className="searchbox__dropdown">
              {BUDGET_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  className={`searchbox__dropdown-item ${selectedBudget === opt ? 'searchbox__dropdown-item--selected' : ''}`}
                  onClick={() => {
                    setSelectedBudget(opt);
                    setShowBudgetDropdown(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BHK Dropdown */}
        <div className="searchbox__filter-wrapper">
          <button
            className="searchbox__filter-btn"
            onClick={() => {
              setShowBHKDropdown(!showBHKDropdown);
              setShowBudgetDropdown(false);
              setShowStatusDropdown(false);
              setShowCityDropdown(false);
            }}
          >
            <span>{selectedBHK || 'BHK Types'}</span>
            <svg className="searchbox__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showBHKDropdown && (
            <div className="searchbox__dropdown">
              {BHK_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  className={`searchbox__dropdown-item ${selectedBHK === opt ? 'searchbox__dropdown-item--selected' : ''}`}
                  onClick={() => {
                    setSelectedBHK(opt);
                    setShowBHKDropdown(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status Dropdown */}
        <div className="searchbox__filter-wrapper">
          <button
            className="searchbox__filter-btn"
            onClick={() => {
              setShowStatusDropdown(!showStatusDropdown);
              setShowBudgetDropdown(false);
              setShowBHKDropdown(false);
              setShowCityDropdown(false);
            }}
          >
            <span>{selectedStatus || 'Property Status'}</span>
            <svg className="searchbox__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showStatusDropdown && (
            <div className="searchbox__dropdown">
              {STATUS_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  className={`searchbox__dropdown-item ${selectedStatus === opt ? 'searchbox__dropdown-item--selected' : ''}`}
                  onClick={() => {
                    setSelectedStatus(opt);
                    setShowStatusDropdown(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
