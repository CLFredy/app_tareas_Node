const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/Tareas');

require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
          // opt= await mostrarMenu();
      

 console.clear();



 const main = async() => {
     let opt = '';
     const tareas = new Tareas();


     do{
         // imprime el menu y retorna la opcion seleccionada
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerImput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
        
            case '2':
                // Listar tareas
                console.log (tareas._listado);
                break;
            case '3':
                
                break;
        }
      
       if(opt != '0') await pausa();
     }while(opt != '0');

    
 }

 main();
