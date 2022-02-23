

const  multerDbx  =  require ( 'multer-dropbox' ) ; 
const  { Dropbox }  =  require ( 'dropbox' ) ; 
const  fetch  =  require ( 'isomorphic-fetch' ) ;

const  dbx  =  new  Dropbox ( { 
  accessToken : sl.BCj_RA9qbsQdYaib-PlhCnoPnpHEhfmNgxFs15XOM4nJp6OiXBsuQzupblhP3vN6C9XDAmmpsmM4mX5bwGgkTRrtJbEgsesWm0EUTLyZfKaiQ99onIdT23B_9ceMMwyPdyxylZI ,
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