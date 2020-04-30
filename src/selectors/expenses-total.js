export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

// function getAmount(item) {
//     var amount = [item.amount];
//     return amount;
//   }

//   console.log(expenses.map(getAmount).length);
//   let roots = expenses.map((expense) => {
//     return expense.amount;
//   });

//   let addLength = (sum, expense) => {
//     return sum + expense;
//   };

//   const total = roots.reduce(addLength, 0);
//   console.log(total);
