var votos_img_1 =0;
var votos_img_2 =0;

function votar(img){
    switch(img){
case 1:
      votos_img_1++;
break;
case 2:
      votos_img_2++;
 break;
 default:
      alert('Error: Dato invalido. ')
     break

    }

    document.getElementById("label_1").innerHTML=votos_img_1
    document.getElementById("label_2").innerHTML=votos_img_2

    alert('Gracias por Votar');

}

