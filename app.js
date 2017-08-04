$(window ).on("load", function() {
	$("#exampleModal").fadeIn();
	$("#exampleModal").fadeIn("slow");
	$("#exampleModal").fadeIn(5000);
});
$('#bouton').click(function(){
	$('#exampleModal').hide(1000);
})



$("#sc").click(function(){
	window.location="index.html";
})








// -------------- image piano ----------- //

//"<img class='image img-responsive' width='150' height='100' src='image1.jpg'/>"

//--------------image croix occitane -------------//


//"<img class='image img-responsive' width='150' height='100' src='image2.png'/>"

//------------id des cases----------------------//

// id :

// case1
// case2
// case3
// case4
// case5
// case6
// case7
// case8
// case9


//-------------------------------id écoute input des pseudo/nom -----------//

// input 1 : $('#player1')
// input 2 : $('#player2')

//-------------------------------------------------------------------------//

//-------------------------------bouton pour validez les pseudo/noms-------//

// bouton 1 : $('#validerPlayer1')
// bouton 2 : $('#validerPlayer2')

//------- texte qui affiche le nom des joueurs -----------------------------//

//  texte 1 : $('#textePlayer1')
//  texte 2 : $('#textePlayer2')

//---------------------- enregistrer les joueurs ------------------------//

var objet = {};

//--- player1 ----//

$('#validerPlayer1').click(function(){
	var joueur1 = $('#player1').val();
	objet.joueur1 = joueur1;
	
	$('#textePlayer1').html("Bienvenue " + objet.joueur1);
	
});

$('#player1').change(function(){
	objet.joueur1 = $('#player1').val();


	$('#textePlayer1').html("Bienvenue " + objet.joueur1);
console.log(objet);
});

//---- player2---//



$('#validerPlayer2').click(function(){
	var joueur2 = $('#player2').val();
	objet.joueur2 = joueur2;

	$('#textePlayer2').html("bievenue "+objet.joueur2);
});

$('#player2').change(function(){
	objet.joueur2 = $('#player2').val();

	$('#textePlayer2').html("Bienvenu "+ objet.joueur2);
console.log(objet)
});


// --------------------------------- deplacer une image --------//



var piano = '<img class=" image img-responsive" src="image1.jpg">';
var occitane = '<img class="image img-responsive" src="image2.png">';



//--------- position des image + verif pour positionner une image ----- //

var joueur = 1;

$(".case").on("click",function(){
	if(joueur === 1){

		if($(this).html()==""){
			$(this).html(piano);
			joueur=2;

		}else{
			alert("pose ta putin d'image ailleurs :@ ");
		}


	} else if (joueur ===2){

		if($(this).html()==""){

			$(this).html(occitane);
			joueur=1;

		}else{
			alert("POSE TON IMAGE AILLEURS COMPRIS OU PAS ?!!! :@");
		}
	}

});

//---------------- verification -------------//



//--------------fonction de verification et message du winner wallah ta vu sartek -----//

function verif(a, b, c){
	if (a==b && a==c){

		if (a==piano){

			alert(objet.joueur1 + " défonce la gueule a " + objet.joueur2);

		}else if(a==occitane){

			alert(objet.joueur2 + " deboite la gueule a " + objet.joueur1);

		}
	}

};

//---------------------- fonction de verif des position et conditions de win !! -----------//

$(".case").on("click", function()
{ 
	return verif($("#case1").html(), $("#case2").html(), $("#case3").html())
	|| verif($("#case4").html(), $("#case5").html(), $("#case6").html())
	|| verif($("#case7").html(), $("#case8").html(), $("#case9").html())
	|| verif($("#case1").html(), $("#case4").html(), $("#case7").html())
	|| verif($("#case2").html(), $("#case5").html(), $("#case8").html())
	|| verif($("#case3").html(), $("#case6").html(), $("#case9").html())
	|| verif($("#case1").html(), $("#case5").html(), $("#case9").html())
	|| verif($("#case3").html(), $("#case5").html(), $("#case7").html());



});


$('.reset').click(function(){
	$('.case').empty();
	joueur = 1;
});




























































// var count = 0;
// var data = [];
// var position = "";

// // player1 = prompt("entrez votre nom joueur 1 !");
// // player2 = prompt("joueur 2 entrez votre nom !");

// // $("#player1").html(player1);
// // $("#player2").html(player2);


// $(".case").click(function(){

// 	if ($(this).html() === ""){
// 		if(count%2 === 0){
// 		position = ($(this).data('position'));
// 		data.push(position);

// 			($(this).html("<img class='image img-responsive' width='150' height='100' src='image1.jpg'/>"));

// 	} else  {
// 			position = ($(this).data('position'));
// 			data.push(position);

// 			($(this).html("<img class='image img-responsive' width='150' height='100' src='image2.png'/>"));

// 		}
// 		count++;

// 	}
// });

// $('.reset').click(function(){
// 	$('.case').empty();
// 	count = 0;
// })






















// var clic = "";
// var count = 0;
// $('.case').click(function(event){
// 	// console.log(event.target.id);
// 	 clic =  $(this);
