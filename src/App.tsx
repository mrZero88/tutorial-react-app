import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFIlter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1400, category: "Home" },
    { id: 2, description: "Groceries", amount: 300, category: "Food" },
    { id: 3, description: "Gas", amount: 40, category: "Transportation" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          categories={["Home", "Food", "Transportation"]}
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}
export default App;
