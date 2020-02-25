module.exports.constructionOptions = (params) => {
   //params siempre debe ser un Array
   const options = {
      valida:false,
      stats: false
    }

    if(params.indexOf('--validate') > -1) {

      console.log('Existe el validate');
      options.validate = true;
    }

    if (params.indexOf('--stats') > -1) {

      console.log('Existe el stats');
      option.stats = true;
    }

//Esta funcion siempre debe de retornar un OBJETO
return options //options: es un objeto
} 