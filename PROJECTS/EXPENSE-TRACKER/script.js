document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    // load saved expenses or start with empty array
    let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    renderExpenses();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount,
            };

            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();

            // clear input *values* (not the variables)
            expenseAmountInput.value = "";
            expenseNameInput.value = "";
        }
    });

    function calculateTotal() {
        // sum the amount of each expense
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement("li");
            li.textContent = `${expense.name} : ₹${expense.amount}`;

            const button = document.createElement("button");
            button.textContent = "Delete";
            button.addEventListener("click", () => {
                expenses = expenses.filter(e => e.id !== expense.id);
                saveExpensesToLocal();
                renderExpenses();
            });

            li.appendChild(button);
            expenseList.appendChild(li);
        });

        totalAmountDisplay.textContent = "₹" + calculateTotal();
    }
});
