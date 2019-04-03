window.cipher = {
  encode: (offset, texto) => {
    let result=""; //variable con string vacío para guardar mi resultado
    
    for(let i=0; i<texto.length; i++){ //for sirve para recorrer las letras del texto que ingresa el usuario
      let asciiNumber = texto.charCodeAt(i); //variable toma la letra y la pasa a cod ascii

      if(asciiNumber >=65 && asciiNumber <=90){//if para condicion de mayusculas en ascii
       cipheroffset=(asciiNumber - 65 + parseInt(offset)) % 26 + 65;//formula con el offset como parametro para que se corran las letras
      }

      else if(asciiNumber >=97 && asciiNumber <=122){
       cipheroffset=(asciiNumber - 97 + parseInt(offset)) % 26 + 97;//parseint: toma una cadena de texto(string) y retorna su valor numerico

      }
      
      result += String.fromCharCode(cipheroffset);//tomo cod ascii del texto cifrado y lo paso a string, asi el resultado lo entrega en string

      } 

    return result;
  }
  
  /*decode: (offset,texto) => {
    let result="";
    for(let i=0; i<texto.length; i++){

      if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <=90);


    
} */
  }

