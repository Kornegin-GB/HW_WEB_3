"use strict";

const temperature = Number.parseInt(prompt("Введите температуру в градусах цельсия"));

const temperatureFahrenheit = Number((9 / 5) * temperature + 32).toFixed(1);

alert(`Цельсий: ${temperature}, Фаренгейт: ${temperatureFahrenheit}`);