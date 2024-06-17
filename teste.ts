copyPassword(password: string): void {
    navigator.
    na
clipboard.writeText(password).then(() => {
      
  
Swal.fire(
        'Copiado!',
        
    
'La contraseña ha sido copiada al portapapeles.',
        'success'
      );
    }).
      );
catch((error) => {
      
      cons
console.error('Error al copiar la contraseña:', error);
      Swal.fire(
        'Error!',
        
       
'Hubo un problema al copiar la contraseña.',
        
        
'error'
      );
    });
  }

  
 