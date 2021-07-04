/*      
    Single Thread
        Process:
            El módulo process es el objeto global que nos acceder a cualquier lado, y es un método que pertenece a 'EventEmitter'
*/

'use strict'

function singleThread(){

    process.argv[2] = 'Node JS';
    process.argv[3] = 15;
    process.argv[4] = null;
    process.argv[5] = true;

    console.log('---------------------------------------------')
    console.log('Id del proceso...........' + process.pid)
    console.log('Título...................' + process.title)
    console.log('Directorio de Node.......' + process.execPath)
    console.log('Directorio Actual........' + process.cwd())
    console.log('Versión de Node..........' + process.version)
    console.log('Versiones Dependencias...' + process.versions)
    console.log('Plataforma (S.O.)........' + process.platform)
    console.log('Arquitectura (S.O).......' + process.arch)
    console.log('Tiempo activo de Node....' + process.uptime())
    console.log('Argumentos del proceso...' + process.argv)
    console.log('---------------------------------------------')


    
    // console.log(process.argv[3]);
    for(let indice in process.argv){
        console.log(process.argv[indice]);
    }

}

singleThread();