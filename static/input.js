$(document).ready(function() {
	var counter=0;
	$('#add').click(function(e) {
		e.preventDefault();
		
		var uploadImage = document.createElement("input");
		uploadImage.type="file";
		uploadImage.name="image_"+counter;
		$(uploadImage).attr("id","image");
		document.getElementById('recipe').appendChild(uploadImage);
		
		
		var newInput = document.createElement("input");
		newInput.type="text";
		newInput.name="text_"+counter;
		console.log(newInput.name);
		$(newInput).attr("id","field");
		document.getElementById('recipe').appendChild(newInput);
		
		counter++;
	});

})