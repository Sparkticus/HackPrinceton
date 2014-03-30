$(document).ready(function() {
	$('#add').click(function(e) {
		e.preventDefault();
		
		var newInput = document.createElement("input");
		newInput.type="text";
		newInput.name="text";
		$(newInput).attr("id","field");
		document.getElementById('recipe').appendChild(newInput);

		var uploadImage = document.createElement("input");
		uploadImage.type="file";
		uploadImage.name="image";
		$(uploadImage).attr("id","image");
		document.getElementById('recipe').appendChild(uploadImage);

	});

});
