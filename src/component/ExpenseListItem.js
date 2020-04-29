import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
        {amount} - {createdAt}
      </p>

      {/* {`Expense: ${props.description} costing:${props.amount} created:${props.createdAt}`} */}
    </div>
  );
};

export default ExpenseListItem;
