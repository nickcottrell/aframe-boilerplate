//THINGS TO MODIFY
//break out functionality into separate file
//update function names to be more verby




//define a new parameter that will determine visibility inside of ASVR
AFRAME.registerComponent('avr-visible',
{
	schema: {default: true},
	init: function () {
		this.el.addEventListener('model-loaded', this.setVisibility.bind(this));
	},
	setVisibility: function(){
		this.el.object3D.traverse(function(o){
			o.visible = this.data;
		}.bind(this));
	},
	update: function () {
		this.setVisibility();
	}
});

//get the data ...and stuff
function loadJSON(path, success, error)
{
	//do what W3schools page said
	//basically handle business...
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		//ready?
		if (xhr.readyState === XMLHttpRequest.DONE) {
			//is it there?
			if (xhr.status === 200) {
				if (success)
				//parse the JSON
				success(JSON.parse(xhr.responseText));
			} else {
				//no bueno
				if (error)
				error(xhr);
			}
		}
	};
	//get that money
	xhr.open("GET", path, true);
	//spread the joy
	xhr.send();
}

//...nifty little hover state -- texture is hard coded
function hover(idName) {
	var button = document.getElementById(idName);
	var originalTexture = button.getAttribute('material');

	var hoverTexture = function() {
		var attribute = this.setAttribute('material', 'src:url(img/hover.jpg);');
	};

	var resetHover = function() {
		var attribute = this.setAttribute('material', originalTexture);
	};

	button.addEventListener('mouseenter', hoverTexture, true);
	button.addEventListener('mouseleave', resetHover, true);
}

//adds this content to the html to provide info for this attribute
function texture(idName, imageName) {
	var category = document.getElementById(idName);
	var image = 'src:url(img/'+imageName+');'
	category.setAttribute('material', image);
}

//same as ^
function model(idName, modelName) {
	var object = document.getElementById(idName);
	var model = 'obj:url(obj/'+modelName+');'
	object.setAttribute('obj-model', model);
}

//get this specific JSON, do things if its valid, do errory things
loadJSON('config.json', function(data) {
	var attributes = data.eat_this_sample.attributes;
	var categoryIds = Object.keys(attributes);

	for (var i = 0; i < categoryIds.length; i++) {
		var categoryId = categoryIds[i]
		var sectionAttributes = attributes[categoryId];
		model(categoryId, sectionAttributes.model);
		texture(categoryId, sectionAttributes.texture);
		hover(categoryId);
	}
},

//show the errors
function(xhr) { console.error(xhr); },

);
