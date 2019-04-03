window.cipher = {
  encode: (offset, texto) => {
    let result="";
    for(let i=0; i<texto.length; i++){

      if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i) <=90);
      let formula=(texto.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      result += String.fromCharCode(formula);

      } 

    return result;
  }
  
  /*decode: (offset,texto) => {
    let result="";
    for(let i=0; i<texto.length; i++){

      if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <=90);


    
} */
  }

