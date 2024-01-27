function generarTabla(base) {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject('La entrada no es válida.');
        } else {
            let contenido = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tabla del ${base}</title>
                <link rel="stylesheet" href="./public/stylesheets/style.css">
            </head>
            <body>
                <h1>Tabla del ${base}</h1>
                <table>
                    <tr>
                        <th>Base</th>
                        <th>X</th>
                        <th>Resultado</th>
                    </tr>
            `;

            for (let i = 1; i <= 10; i++) {
                const resultado = base * i;
                const backgroundColor = i % 2 === 0 ? '#5b7e7e' : '#87CEEB';
                contenido += `
                    <tr style="background-color: ${backgroundColor};">
                        <td>${base}</td>
                        <td>${i}</td>
                        <td>${resultado}</td>
                    </tr>`;
            }

            contenido += `
                </table>
            </body>
            </html>`;
            resolve(contenido);
        }
    });
}

async function multiplicar(base) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(base)) {
            reject(new Error('Introduce un número entero!!'));
            return;
        }
        const tablaHTML = generarTabla(base);
        resolve(tablaHTML);
    });
};

module.exports = multiplicar;
