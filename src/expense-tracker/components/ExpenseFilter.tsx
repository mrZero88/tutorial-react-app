import React from "react";

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
