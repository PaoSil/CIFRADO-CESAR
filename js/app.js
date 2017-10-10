var phrase = prompt('Ingrese frase');

function cipher(x,shf){
abc="abcdefghijklmnopqrstuvwxyz";
ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

r1="";
r2="";
shf=eval(shf);

  for(i=0;i<x.length;i++){
        let=x.charAt(i);
          pos=ABC.indexOf(let);
            if(pos>=0){
                r1+=ABC.charAt(  (pos+shf)%26  )
              }else{
                r1+=let};
      };

      for(i=0;i<r1.length;i++){
        let=r1.charAt(i);
          pos=abc.indexOf(let);
            if(pos>=0){
                r2+=abc.charAt(  (pos+shf)%26  )
              }else{
                r2+=let};
      };

      return r2;
};

function decipher(x,shf){

      return decipher(x,26-shf);
};

document.write(cipher('Hola Paola',33));
