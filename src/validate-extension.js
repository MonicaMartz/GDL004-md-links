const path = require ('path');

module.exports.validateExtension = (directionPath) => {
    const extension = path.extname(directionPath);
    if(extension === '.md' ) {
       console.log('Es un archivo md');
      return true 
    }
    // }else{ --Ya no es necesario anotar el else
        console.log('Tu archivo no es .md')
        return false
    }
