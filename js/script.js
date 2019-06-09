'use strict'

let money = prompt('Ваш бюджет в месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD');

const daysInMonth = 30;

let appDate = {
    
    budget: money,
    timeData: time,

    expenses: {

    },

    optionalExpenses: {

    },

    income: [],

    saving: false,
    
};

for(let i = 0; i < 1; i++) {
    let question = prompt('Введите обязательную статью расходов в этом месяце');
    let answer = prompt('во сколько обойдется?');

    appDate.expenses.question = answer;
}

let oneDayBudget = money / daysInMonth;

alert(oneDayBudget);