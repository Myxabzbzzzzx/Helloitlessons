console.log("ПОДКЛЮЧЕНО")

function send(){
let	name = document.getElementById("name").value;
	let	surname = document.getElementById("surname").value;
		let	age = document.getElementById("age").value;

console.log(name)
console.log(surname)
console.log(age)
	
	let API = "UR CUL API URL";

		$.ajax({	
			url:  	 API,
			data: 		{
				name: name,
				surname: surname,
				age: age
			},
			// dataType: 	'json',

			/* ochen vajno*/
			contentType: 'application/json'

		})
		.done(function(data){
			console.log(data)
		});
}