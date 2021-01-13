const fs = require('fs');
var colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        console.log('======================================================'.green);
        console.log(`==================tabla de ${base}=====================`.green);
        console.log('======================================================'.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i}=${base*i}`);

        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}