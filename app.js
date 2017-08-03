var count = 0;
var data = [];
var position = "";

// player1 = prompt("entrez votre nom joueur 1 !");
// player2 = prompt("joueur 2 entrez votre nom !");

// $("#player1").html(player1);
// $("#player2").html(player2);


$(".case").click(function(){
	
	if ($(this).html() === ""){
		if(count%2 === 0){
		position = ($(this).data('position'));
		data.push(position);

			($(this).html("<img class='image img-responsive' width='150' height='100' src='image1.jpg'/>"));	
	
	} else  {
			position = ($(this).data('position'));
			data.push(position);

			($(this).html("<img class='image img-responsive' width='150' height='100' src='image2.png'/>"));
		
		}
		count++;

	}
});

$('.reset').click(function(){
	$('.case').empty();
	count = 0;
})






















// var clic = "";
// var count = 0;
// $('.case').click(function(event){
// 	// console.log(event.target.id);
// 	 clic =  $(this);
