document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form')
    const expenseTable = document.getElementById('expense-table')
    const expenseTableBody = expenseTable.querySelector('tbody')
    const totalExpenseCell = document.getElementById('total-expenses')
    const nameInput = document.getElementById('expense-name')
    const amountInput = document.getElementById('expense-amount')
    let total = 0

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const name = nameInput.value.trim()
        const amount = parseFloat(amountInput.value)

        if (name && amount > 0) {
            expenseTable.style.display = 'table'

            let row = document.createElement('tr')
            let nameCell = document.createElement('td')
            let amountCell = document.createElement('td')

            nameCell.textContent = `${name}`
            amountCell.textContent = `$${amount.toFixed(2)}`

            row.appendChild(nameCell)
            row.appendChild(amountCell)
            expenseTableBody.appendChild(row)

            total += amount
            totalExpenseCell.textContent = `$${total.toFixed(2)}`

            nameInput.value = ''
            amountInput.value = ''
        }
    })
})