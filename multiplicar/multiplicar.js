/*Requireds*/
const fs = require('fs');
const colors = require('colors');

listarTabla = (base,limite) =>{
	//let data = '';
	console.log('================'.blue);
	for( let i = 1; i <= limite; i++ ){
			console.log(`${base} * ${i} = ${base*i}`);
		}		
}

crearArchivo = (base, limite)=>{
	return new Promise((resolve, reject)=>{		
		let data = '';
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es un número`);
			return;
		}

		for( let i = 1; i <= limite; i++ ){
			data += (`${i} * ${base} = ${i*base}\n`);
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
		  if (err) 
		  	reject(err)
		  else
		  	resolve(`tabla-${base}.txt`)
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}