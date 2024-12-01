"use strict";

game(1, 100);

function getNumber(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

function getBinarySearchNumber(low, hight) {
  return Math.trunc((low + hight) / 2);
}

function game(a, b) {
  const hiddenNumber = getNumber(a, b);
  console.log(`Комьютер 1 загадал число: ${hiddenNumber}.`);

  let low = a,
    hight = b;

  let notGuess = true;
  let message;
  while (notGuess) {
    console.log("");

    const number = getBinarySearchNumber(low, hight);
    console.log(`Компьютер 2: Пробую число ${number}.`);

    if (number < hiddenNumber) {
      message = "Больше.";
      low = number + 1;
    } else if (number > hiddenNumber) {
      message = "Меньше.";
      hight = number - 1;
    } else {
      message = "Угадал!";
      notGuess = !notGuess;
    }

    console.log(`Компьютер 1: ${message}`);
  }
}
