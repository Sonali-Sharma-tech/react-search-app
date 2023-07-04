
import React, { useState, useCallback, useMemo } from 'react';
import { useDebounce } from '../utils/debounce';

export const SearchComponent = ({ names }) => {

      const [searchTerm, setSearchTerm] = useState('');
      const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce delay

      const handleInputChange = useCallback((event) => {
        setSearchTerm(event.target.value);
      }, []);

      const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
      }, []);
    
      const filteredNames = useMemo(() => {
        return names
          .map((name, index) => ({ name, index })) // Map names to objects to track original index
          .filter(({ name }) => name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
          .sort((a, b) => {
            const indexA = a.name.toLowerCase().indexOf(debouncedSearchTerm.toLowerCase());
            const indexB = b.name.toLowerCase().indexOf(debouncedSearchTerm.toLowerCase());
    
            if (indexA === indexB) {
              return a.index - b.index; // If first occurrence is at the same index, maintain original order
            } else {
              return indexA - indexB; // Otherwise, sort by the first occurrence
            }
          })
          .map(({ name }) => name); // Map back to just names
      }, [names, debouncedSearchTerm]);
    
  
    return (
      <div style={{margin: 10}}>
       <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      </div>
    );
}