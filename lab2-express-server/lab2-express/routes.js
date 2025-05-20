// Routes for Lab 2 – CPAN 212
// Created by: Charanjeet Kaur (N01676380)

const express = require('express');
const router = express.Router();


router.get('/name', (req, res) => {
  res.send(`
    <h1 style="color: darkblue; font-family: Arial;">Name</h1>
    <p style="font-size: 20px;">Charanjeet Kaur</p>
  `);
});


router.get('/greeting', (req, res) => {
  res.send(`
    <h1 style="color: green; font-family: Arial;">Greeting</h1>
    <p style="font-size: 18px;">Name: <strong>Charanjeet Kaur</strong></p>
    <p style="font-size: 18px;">Student Number: <strong>N01676380</strong></p>
  `);
});


router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    return res.send('<p style="color:red; font-family: Arial;">Please provide valid numbers for x and y.</p>');
  }

  const result = x + y;
  res.send(`
    <h1 style="color: purple; font-family: Arial;">Addition Result</h1>
    <p style="font-size: 18px;">${x} + ${y} = <strong>${result}</strong></p>
  `);
});


router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.operation;

  if (isNaN(a) || isNaN(b)) {
    return res.send('<p style="color:red; font-family: Arial;">Please provide valid numbers for a and b.</p>');
  }

  let result;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Division by zero error'; break;
    case '**': result = a ** b; break;
    default: result = 'Invalid operation. Use +, -, *, /, or **';
  }

  res.send(`
    <h1 style="color: darkorange; font-family: Arial;">Calculation Result</h1>
    <p style="font-size: 18px;">${a} ${op} ${b} = <strong>${result}</strong></p>
  `);
});

module.exports = router;
