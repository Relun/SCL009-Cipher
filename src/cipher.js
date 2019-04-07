window.cipher = {
  encode: (offset, texto) => {
    let result=""; //variable con string vacío para guardar mi resultado
    let cipheroffset="";

    for(let i=0; i<texto.length; i++){ //for sirve para recorrer las letras del texto que ingresa el usuario
      let asciiNumber = texto.charCodeAt(i); //variable toma la letra y la pasa a cod ascii

      if(asciiNumber >=65 && asciiNumber <=90){//if para condicion de mayusculas en ascii A-Z
       cipheroffset=(asciiNumber - 65 + parseInt(offset)) % 26 + 65;//formula con el offset como parametro para que se corran las letras
      }

      else if(asciiNumber >=97 && asciiNumber <=122){// if para minusculas a-z
       cipheroffset=(asciiNumber - 97 + parseInt(offset)) % 26 + 97;//parseint: toma una cadena de texto(string) y retorna su valor en numero entero
      }

      else if(asciiNumber === 32){//if para espacios
        //cipheroffset=" ";
       cipheroffset=(asciiNumber - 32 + parseInt(offset)) % 1 + 32; 
      }

      else if(asciiNumber >=48 && asciiNumber <=57){// if para numeros 0-9
       cipheroffset=(asciiNumber - 48 + parseInt(offset)) % 10 + 48;
      }

      else if(asciiNumber >=33 && asciiNumber <=47){// algunos signos !"#$%&'()*+,-./
        cipheroffset=(asciiNumber - 33 + parseInt(offset)) % 15 + 33;
      }

      else if(asciiNumber >=58 && asciiNumber <=64){// otros signos :;<=>?@
        cipheroffset=(asciiNumber - 58 + parseInt(offset)) % 7 + 58;
      }

       result += String.fromCharCode(cipheroffset);//tomo cod ascii del texto cifrado y lo paso a string, asi el resultado lo entrega en string

      }
      return result;

    },

  decode: (offset,texto) => {
    let result="";
    let cipheroffset="";

    for(let i=0; i<texto.length; i++){
      let asciiNumber = texto.charCodeAt(i);

      if(asciiNumber >=65 && asciiNumber <=90){//mayusculas
      cipheroffset=((asciiNumber-90-parseInt(offset)) % 26 + 90);  
    } 
    else if(asciiNumber >=97 && asciiNumber <=122){//minusculas
      cipheroffset=((asciiNumber-122-parseInt(offset))%26+122);
    }

    else if(asciiNumber === 32){//if para espacios
      cipheroffset=((asciiNumber - 32 - parseInt(offset)) % 1 + 32); 
    }

    else if(asciiNumber >=48 && asciiNumber <=57){// if para numeros
      cipheroffset=((asciiNumber - 57 - parseInt(offset)) % 10 + 57);
     }

    else if(asciiNumber >=33 && asciiNumber <=47){// signos
      cipheroffset=((asciiNumber - 47 - parseInt(offset)) % 15 + 47);
     } 

    else if(asciiNumber >=58 && asciiNumber <=64){// otros signos
      cipheroffset=((asciiNumber - 64 - parseInt(offset)) % 7 + 64);
     } 

result += String.fromCharCode(cipheroffset);
}
return result;    
} 
  
};