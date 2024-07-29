import { useState } from "react";
const CategoryButton = () => {
    const [category, setCategory] = useState('income');

    const handleClick = () => {
        setCategory(category === 'income' ? 'expense' : 'income');
    };

    return (
        <button
            onClick={handleClick}
            className={`button ${category === 'income' ? 'button-income' : 'button-expense'}`}
        >
            {category === 'income' ? 'Income' : 'Expense'}
        </button>
    );
};

export default CategoryButton;
