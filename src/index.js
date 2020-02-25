const fs = require('fs') //Proporciona una API parainteractuar con el sistema 
const path = require ('path') //Proporciona utilidades para trabajar con rutas archivos y directorios

const { validateExtension } = require('./validateExtension.js');//Destructuring de objetos
const { constructionOptions } = require('./constructionOptions.js')
let directionPath = process.argv[2];// Accede a los argumentos de la linea de comandos. accede a el archivo que analizará
//let optionOne = process.argv [3];//Accede a la opcion 1a  que ingrese el usuario
extension = path.extname(directionPath)//extension del archivo)
//let optionTwo = process.argv [4];//Acede a la 2a opcion que el usuario ingrese



const params = process.argv;

const options = constructionOptions(params);
console.log('Viene de mi modulo ', options);
//
/*const accessFiles = (directionPath) => {
    let extension = path.extname(directionPath);
    if (extension === '.md' ) {
    //console.log('Archivo md');
    readFile(directionPath);    
    }else{
    console.log('Tu archivo no es .md')
    }
    }


const readFile = (directionPath) => {
 fs.readFile(directionPath,'utf8',(err,data){
     ;
}

//const readFile = (directionPath) => {
//    fs.readFileSync(directionPath,'utf8');





//funcion funcional 
/*let extension = path.extname (directionPath)
console.log(extension)
if (extension === '.md' ) {
           
    let content = fs.readFileSync(directionPath,'utf8');
    
   //let contentTotal = content.toString();
    
    console.log(content)

}
else{
console.log('Tu archivo no es .md')
}*/
