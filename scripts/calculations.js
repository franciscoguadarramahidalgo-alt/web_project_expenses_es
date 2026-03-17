let budgetValue = 0; // Importe de presupuesto inicial (Presupuesto)
let totalExpensesValue = 0; // Valor de la suma total de gastos (Gastos totales)

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
]; // Array para almacenar los gastos ingresados

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1]; //Suma del valor de cada gasto para formar el total
  console.log("Valor total de los gastos: " + totalExpensesValue);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green"; // Color para el balance (verde por defecto)

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

let categoriesList = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];

let categoriesData = []; //Array para almacenar los datos de cada categoria y su balance más alto

function updateCategoriesData() {
  categoriesData = [];

  for (let i = 0; i < categoriesList.length; i++) {
    let category = categoriesList[i];
    let total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }
}

updateCategoriesData();

function calculateLargestCategory() {
  let largestCategory = "";
  let largestAmount = 0;
  for (let i = 0; i < categoriesData.length; i++) {
    let categoryExpense = categoriesData[i][1];
    if (categoryExpense > largestAmount) {
      largestAmount = categoryExpense;
      largestCategory = categoriesData[i][0];
    }
  }
  return largestCategory;
}

function addExpenseEntry(expenseEntry) {
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
  updateCategoriesData();
}

let newExpenseEntry = ["groceries", 40];
addExpenseEntry(newExpenseEntry);
