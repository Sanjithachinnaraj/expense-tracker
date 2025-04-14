const form = document.getElementById("expense-form");
const table = document.getElementById("expense-table");
const totalDisplay = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  table.innerHTML = "";
  let total = 0;
  expenses.forEach((expense, index) => {
    total += Number(expense.amount);
    const row = `<tr>
      <td>${expense.name}</td>
      <td>₹${expense.amount}</td>
      <td>${expense.category}</td>
      <td>${expense.date}</td>
      <td><button onclick="deleteExpense(${index})">Delete</button></td>
    </tr>`;
    table.innerHTML += row;
  });
  totalDisplay.textContent = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  expenses.push({ name, amount, category, date });
  local