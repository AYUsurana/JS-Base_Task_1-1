"use strict";

function solveEquation(a, b, c) {

    let arr = [];
    let D;
    let root1, root2;
    
    D = (Math.pow(b, 2) - 4*a*c);

    if (D > 0) { 
        root1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
        root2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
        arr = [root1, root2];
    } else if (D === 0) {
        root1 = Math.round(-b / (2*a));
        arr = [root1];
    } else if (D < 0) {
        arr = [];
    } else {
        console.log('Ошибка чтения переменных. Невозможно рассчитать');
        return;
    }
    return arr; // array
};

function solve() {

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let roots = solveEquation(a, b, c);
    if (roots.length === 0) {
        document.getElementById('result').value = 'Нет корней';
    } else {
        document.getElementById('result').value = roots;
    }
}