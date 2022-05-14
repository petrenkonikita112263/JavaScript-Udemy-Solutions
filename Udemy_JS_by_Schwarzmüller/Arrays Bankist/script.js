"use strict"

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-05-27T17:01:17.194Z",
        "2020-07-11T23:36:17.929Z",
        "2020-07-12T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
}

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
}

const accounts = [account1, account2]

// Elements
const labelWelcome = document.querySelector(".welcome")
const labelDate = document.querySelector(".date")
const labelBalance = document.querySelector(".balance__value")
const labelSumIn = document.querySelector(".summary__value--in")
const labelSumOut = document.querySelector(".summary__value--out")
const labelSumInterest = document.querySelector(".summary__value--interest")
const labelTimer = document.querySelector(".timer")

const containerApp = document.querySelector(".app")
const containerMovements = document.querySelector(".movements")

const btnLogin = document.querySelector(".login__btn")
const btnTransfer = document.querySelector(".form__btn--transfer")
const btnLoan = document.querySelector(".form__btn--loan")
const btnClose = document.querySelector(".form__btn--close")
const btnSort = document.querySelector(".btn--sort")

const inputLoginUsername = document.querySelector(".login__input--user")
const inputLoginPin = document.querySelector(".login__input--pin")
const inputTransferTo = document.querySelector(".form__input--to")
const inputTransferAmount = document.querySelector(".form__input--amount")
const inputLoanAmount = document.querySelector(".form__input--loan-amount")
const inputCloseUsername = document.querySelector(".form__input--user")
const inputClosePin = document.querySelector(".form__input--pin")

const formatMovementDate = function (date, locale) {
    const calcDayPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
    const daysPassed = calcDayPassed(new Date(), date)
    console.log(daysPassed)
    if (daysPassed === 0) {
        return "Today"
    }
    if (daysPassed === 1) {
        return "Yesterday"
    }
    if (daysPassed <= 7) {
        return `${daysPassed} days ago `
    } else {
        // const day = `${date.getDate()}`.padStart(2, 0)
        // const month = `${date.getMonth() + 1}`.padStart(2, 0)
        // const year = date.getFullYear()
        // return `${day}/${month}/${year}`
        return new Intl.DateTimeFormat(locale).format(date)
    }
}

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = ""
    const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal"
        const date = new Date(acc.movementsDates[i])
        const displayDate = formatMovementDate(date, acc.locale)
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
      `
        containerMovements.insertAdjacentHTML("afterbegin", html)
    })
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes}€`

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1
        })
        .reduce((acc, int) => acc + int, 0)
    labelSumInterest.textContent = `${interest.toFixed(2)}€`
}

function createUsername(accts) {
    accts.forEach(function (acct) {
        acct.username = acct.owner
            .toLowerCase()
            .split(" ")
            .map((word) => word[0])
            .join("")
    })
}

createUsername(accounts)

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`
    console.log(labelBalance.textContent)
}

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc)

    // Display balance
    calcDisplayBalance(acc)

    // Display summary
    calcDisplaySummary(acc)
}

// Event handlers

let selectedAccount

// fake
selectedAccount = account1
updateUI(selectedAccount)
containerApp.style.opacity = 100

const now = new Date()
const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
}

btnLogin.addEventListener("click", function (e) {
    e.preventDefault()
    selectedAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    )
    console.log(selectedAccount)
    if (selectedAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome back, ${
            selectedAccount.owner.split(" ")[0]
        }`
        containerApp.style.opacity = 100
        labelDate.textContent = new Intl.DateTimeFormat(
            selectedAccount.locale,
            options
        ).format(now)
        // const day = `${now.getDate()}`.padStart(2, 0)
        // const month = `${now.getMonth() + 1}`.padStart(2, 0)
        // const year = now.getFullYear()
        // const hour = now.getHours()
        // const min = now.getMinutes()
        // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`
        inputLoginUsername.value = inputLoginPin.value = ""
        inputLoginPin.blur()
        updateUI(selectedAccount)
    }
})

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault()
    const moneyAmount = +inputTransferAmount.value
    const receiverAccount = accounts.find(
        (acc) => acc.username === inputTransferTo.value
    )
    console.log(moneyAmount, receiverAccount)
    if (
        moneyAmount > 0 &&
        moneyAmount <= selectedAccount.balance &&
        receiverAccount &&
        receiverAccount?.username !== selectedAccount.username
    ) {
        console.log("Transfer is valid")
        selectedAccount.movements.push(-moneyAmount)
        receiverAccount.movements.push(moneyAmount)
        selectedAccount.movementsDates.push(new Date().toISOString)
        receiverAccount.movementsDates.push(new Date().toISOString)
        updateUI(selectedAccount)
    }
    inputTransferAmount.value = inputTransferTo.value = ""
})

btnClose.addEventListener("click", function (e) {
    e.preventDefault()
    if (
        inputCloseUsername.value === selectedAccount.username &&
        +inputClosePin.value === selectedAccount.pin
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === selectedAccount.username
        )
        accounts.splice(index, 1)
        inputCloseUsername.value = inputClosePin.value = ""
        containerApp.style.opacity = 0
    }
})

btnLoan.addEventListener("click", function (e) {
    e.preventDefault()
    const loanAmount = Math.floor(inputLoanAmount.value)
    if (
        loanAmount > 0 &&
        selectedAccount.movements.some((mov) => mov >= loanAmount * 0.1)
    ) {
        selectedAccount.movements.push(loanAmount)
        selectedAccount.movementsDates.push(new Date().toISOString)
        updateUI(selectedAccount)
    }
    inputLoanAmount.value = ""
})

let sortedState = false
btnSort.addEventListener("click", function (e) {
    e.preventDefault()
    displayMovements(selectedAccount.movements, !sortedState)
    sortedState = !sortedState
})
