
const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar.js');

const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		console.log('listar');
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo}`))
			.catch(e=>console.log(e));
		console.log('crear');
	break;
}
//console.log(argv.base);


/*let parametro = argv[2];
let base = parametro.split('=')[1];*/


/**/