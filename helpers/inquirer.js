
const inquirer= require('inquirer');
require('colors');

const continuar = [
    {
        type : 'input',
        name : 'entrada',
        message : `Presione ${'ENTER'.green} para continuar...`
    }
]
const preguntas = [
    {
        type : 'list',
        name : 'opcion',
        message : '¿Que desea hacer?',
        choices : [
                    {
                        value : '1',
                        name : '1.- Crear Tarea'        
                    },
                    {
                        value : '2',
                        name : '2.- Listar tareas'
                    },
                    {
                        value : '3',
                        name : '3.- Listar tareas completadas'
                    },
                    {
                        value : '4',
                        name : '4.- Listar tareas pendientes'
                    },
                    {
                        value : '5',
                        name : '5.- Completar tarea'
                    },
                    {
                        value : '6',
                        name : '6.- Borrar tarea'
                    },
                    {
                        value : '0',
                        name : '0.- Salir'
                    }

                  ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    const banda='=========================='.green.bold;
    console.log(banda);
    console.log('   Selecione una opción'.yellow.bold);
    console.log(banda,'\n');
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() => {
    console.log('\n')
    const entrada = await inquirer.prompt(continuar);
    return entrada;
}

const leerImput = async(message) => {
    const question =[
        {
            type : 'input',
            name : 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Por favor ingrese un valor..';
                }
                return true;
            }
        }
    ]
//Regresa un objeto por lo que se usa la desestructuracion y solo se recupera la descripción
    const { desc } = await inquirer.prompt(question);
    return desc;
}
module.exports ={
    inquirerMenu,
    pausa,
    leerImput
}