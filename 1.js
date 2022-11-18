"use strict";

const temperature = +prompt("Введите температуру в градусах цельсия");

const temperatureFahrenheit = (9 / 5) * temperature + 32;

alert(`Цельсий: ${temperature}, Фаренгейт: ${temperatureFahrenheit.toFixed(1)}`);