const argv = require('./config/yargs').argv;
var colors = require('colors');
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];