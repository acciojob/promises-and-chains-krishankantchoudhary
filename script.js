//your JS code here. If required.
const form=document.querySelector("form");

form.addEventListener("submit", function(event){
	event.preventDefault();

	const age=document.getElementById("age").value.trim();
	const name=document.getElementById("name").value.trim();

	if(age==="" || name===""){
		alert("Please enter valid details");
	}

	let agecheck=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Number(age)>18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	});

	agecheck
		.then((message)=>{
		alert(message);
	})
	.catch((errormessage)=>{
		alert(errormessage);
	})

})