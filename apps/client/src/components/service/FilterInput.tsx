import React from 'react';

interface FilterInputProps {
  filter: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ filter, onFilterChange }) => (
  <div className="mb-5 flex justify-center items-center gap-5">
    <input
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search by Student ID"
      className="p-2 border rounded"
    />
  </div>
);

export default FilterInput;
