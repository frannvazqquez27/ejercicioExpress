function generarQuiniela() {
  const opciones = ['1', 'X', '2'];
  const quiniela = [];

  for (let i = 0; i < 15; i++) {
      const opcion = opciones[Math.floor(Math.random() * opciones.length)];
      quiniela.push(opcion);
  }

  return quiniela;
}

module.exports = { generarQuiniela };