'use strict'
let money, time;

let start = function () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
};
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
                answerTwo = prompt("Во сколько обойдется?");

            if ((typeof (answerOne)) === 'string' && (typeof (answerOne)) != null
                && (typeof (answerTwo)) != null && answerOne != '' && answerTwo != ''
                && answerTwo.length < 50) {
                console.log("done!");
                appData.expenses[answerOne] = answerTwo;
            } else {
                i--;
            }
        };
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на один день составляет: " + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },

    checkSavinds: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExp = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExp;
        }
    },

    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
            let dopItem = prompt("Может что-то ещё?", "");
            if ((typeof (items)) === 'string' && (typeof (items)) != null && items != ''
                && (typeof (dopItem)) === 'string' && (typeof (dopItem)) != null && dopItem != '') {
                appData.income = items.split(", ");
                appData.income.push(dopItem);
                appData.income.sort;
            } else {
                console.log("Вы ввели некорректные данные");
                i--;
            }
        };

        appData.income.forEach(function (itemarr, i) {
            alert("Способы дополнительного заработка: " + (i + 1) + " " + itemarr);
        });
    },

};

for (const key in appData) {
    console.log("Наша программа влючает в себя данные: " + key + "-" + appData[key]);
}


/* appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavinds(); */