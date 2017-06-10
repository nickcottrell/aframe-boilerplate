function linkylink(itemName, newLocation) {
	var x = document.getElementsByClassName(itemName);
	x.addEventListener('click', function () {

	for (var i = 0; i < x.length; i++) {
		window.location.href=newLocation;
	}

	})
}

linkylink("btn", "http://google.com");



let item_count = document.getElementsByClassName('rad');

let centerpoint_x = 0; 
let centerpoint_y = 0;
let radius = 5;

let x_value = []; //declared programmatically
let y_value = []; //declared programmatically
let z_value = 0; //to create a circle on a single plane
let xyz_values = []; //empty array

for (var i = 0; i < item_count.length; i++) {
    x_value[i] = centerpoint_x + radius * Math.cos(2 * Math.PI * i / item_count.length);
    y_value[i] = centerpoint_y + radius * Math.sin(2 * Math.PI * i / item_count.length);   
    y_value[i] = y_value[i].toString();
    y_value[i] = y_value[i].toString();
    z_value = z_value.toString();
    xyz_values[i] = x_value[i] + " " + y_value[i] + " " + z_value;
    item_count[i].setAttribute("position", xyz_values[i]);
}
