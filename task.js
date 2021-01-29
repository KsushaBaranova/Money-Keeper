'use strict'

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
        answerTwo = prompt("Во сколько обойдется?");

    if ((typeof (answerOne)) === 'string' && (typeof (answerOne)) != null
        && (typeof (answerTwo)) != null && answerOne != '' && answerTwo != ''
        && answerTwo.length < 50) {
        console.log("done!");
        appData.expenses[answerOne] = answerTwo;
    }else{
        i--;
    }
};

/* let index=0;
while(index<2){
    let answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
        answerTwo = prompt("Во сколько обойдется?");

    if ((typeof (answerOne)) === 'string' && (typeof (answerOne)) != null
        && (typeof (answerTwo)) != null && answerOne != '' && answerTwo != ''
        && answerTwo.length < 50) {
        console.log("done!");
        appData.expenses[answerOne] = answerTwo;
    }else{
        index--;
    }
    index++;
}; */


/* let index = 0;
do {
    let answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
        answerTwo = prompt("Во сколько обойдется?");

    if ((typeof (answerOne)) === 'string' && (typeof (answerOne)) != null
        && (typeof (answerTwo)) != null && answerOne != '' && answerTwo != ''
        && answerTwo.length < 50) {
        console.log("done!");
        appData.expenses[answerOne] = answerTwo;
    } else {
        index--;
    }
    index++;
} while (index < 2); */


appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день составляет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}