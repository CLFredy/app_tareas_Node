const { resolve } = require('path');

require('colors');

const mostrarMenu = ()  => {
    return new Promise (resolve => { 
        console.clear();
        const banda='=========================='.green.bold;
        console.log(banda);
        console.log('   Selecione una opción'.yellow.bold);
        console.log(banda,'\n');
        console.log(`${'1.-'.green.bold} Crear tarea`);
        console.log(`${'2.-'.green.bold} Listar tareas`);
        console.log(`${'3.-'.green.bold} Listar tareas completadas`);
        console.log(`${'4.-'.green.bold} Listar tareas pendientes`);
        console.log(`${'5.-'.green.bold} Completar tareas`);
        console.log(`${'0.-'.green.bold} Salir \n`);

        const readline = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        }) ;

        readline.question( 'Seleccione una opción: '.yellow.bold,(opt) => {
            //console.log({opt});
            readline.close();
            resolve(opt);
        })
    })
}

const pausa =() => {
    return new Promise (resolve => {
        const readline = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        });
    
        readline.question(`\n Presione ${'ENTER'.red} para continuar.. \n`,(opt) => {
            readline.close();
            resolve();
        } );
    })

}

module.exports={
    mostrarMenu,
    pausa
}