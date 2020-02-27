const fs = require('fs') //Proporciona una API para interactuar con el sistema 
const path = require ('path') //Proporciona utilidades para trabajar con rutas archivos y directorios
const directionPath = process.argv[2];// Accede a los argumentos de la linea de comandos. accede a el archivo que analizará
let markdownLinkExtractor = require('markdown-link-extractor');


let extension = path.extname (directionPath)
console.log(extension)
 if (extension === '.md' ) {
      let markdown = fs.readFileSync(directionPath,'utf8');
      let links = markdownLinkExtractor(markdown);
     console.log(links)
   }
   else{
   console.log('Tu archivo no es .md')
   }



