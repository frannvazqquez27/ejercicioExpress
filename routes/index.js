const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multiplicar = require('../helpers/multiplicar.js');
const { generarQuiniela } = require('../helpers/generarQuiniela');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tabla de multiplicar' });
});

router.post('/multiplicar', async function (req, res, next) {
  const base = parseInt(req.body.base);
  try {
      const tablaHTML = await multiplicar(base);
      res.send(tablaHTML);
  } catch (error) {
      res.status(400).send(error.message);
  }
});

router.get('/generarQuiniela', function(req, res, next) {
  const quiniela = generarQuiniela();
  res.render('generarQuiniela', { title: 'Quiniela', quiniela });
});

router.post('/generarNuevaQuiniela', function(req, res, next) {
  const nuevaQuiniela = generarQuiniela();
  res.json({ quiniela: nuevaQuiniela });
});

module.exports = router;