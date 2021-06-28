var i =0;
var txt ='Thanks For Your Like';
var speed =50;

function like(){
    if(i < txt.length){
        document.getElementById("like").innerHTML+= txt.charAt(i);
        i++;
        setTimeout(like,speed);
    }
}