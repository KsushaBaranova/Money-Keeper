'use strict'

let money, time;
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsValueSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearValueSavings = document.getElementsByClassName('yearsavings-value')[0];

let expensesItems = document.getElementsByClassName('expenses-item'),
    btnExpensesItem = document.getElementsByTagName('button')[0],
    btnOptional = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2],
    optionalItems = document.querySelectorAll('.optionalexpenses-item');

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

btnExpensesItem.disabled = true;
btnOptional.disabled = true;
btnCountBudget.disabled = true;


btnStart.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    btnExpensesItem.disabled = false;
    btnOptional.disabled = false
    btnCountBudget.disabled = false;
});



btnExpensesItem.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let answerOne = expensesItems[i].value,
            answerTwo = expensesItems[++i].value;

        if ((typeof (answerOne)) === 'string' && (typeof (answerOne)) != null
            && (typeof (answerTwo)) != null && answerOne != '' && answerTwo != ''
            && answerTwo.length < 50) {
            appData.expenses[answerOne] = answerTwo;
            sum += +answerTwo;
        } else {
            i--;
        }
    };
   // appData.sumExpenses = sum;
    expensesValue.textContent = sum;
});

btnOptional.addEventListener('click', function () {
    for (let i = 0; i < optionalItems.length; i++) {
        let questionOptExp = optionalItems[i].value;
        appData.optionalExpenses[i] = questionOptExp;
        optionalValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCountBudget.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget  - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка! Начните расчёт!";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsValueSavings.textContent = appData.monthIncome.toFixed(1);
        yearValueSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsValueSavings.textContent = appData.monthIncome.toFixed(1);
        yearValueSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};