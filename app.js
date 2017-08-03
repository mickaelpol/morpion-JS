var count = 0;
var player1 = "";
var player2 = "";

player1 = prompt("entrez votre nom joueur 1 !");
player2 = prompt("joueur 2 entrez votre nom !");

$("#player1").html(player1);
$("#player2").html(player2);


$(".case").click(function(){
	count++;

	if(count%1 == 0){
		($(this).html("<img class='image img-responsive' width='150' height='100' src='image1.jpg'/>"));
	}if(count%2 == 0) {
		($(this).html("<img class='image img-responsive' width='150' height='100' src='image2.png'/>"));
	}	
});


