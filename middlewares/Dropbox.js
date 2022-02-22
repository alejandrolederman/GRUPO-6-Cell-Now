
var dbx = new Dropbox({ accessToken: sl.BChdBp2MF6YuL1gYo7-MSxb0cBARwOEAHeL-Rq1qiETuJGl9qZLYfFxwcHFy50M92GIzfeopXRW1RxTJr0X1Jxa9_mniSDxNupF_UeI9YiA2n_1559nQLxhFYwcHe0oVGW90AWoAIzfn });

const  multerDbx  =  require ( 'multer-dropbox' ) ; 
const  { Dropbox }  =  require ( 'dropbox' ) ; 
const  fetch  =  require ( 'isomorphic-fetch' ) ;

const  dbx  =  new  Dropbox ( { 
  accessToken : process . env . ACCESS_TOKEN ,
//   ha podido recuperar
});

const  almacenamiento  =  multerDbx ( 
  // instancia 
  dbx , 
  { 
	  ruta : function (  req ,  file ,  cb  )  { 
	  	cb (  null ,  '/multer-uploads/'  +  file . originalname  ) ; 
	  } , 
  } ) ;