//your JS code here. If required.
document.getelementById('userform').addEventListener('submit',function(e){
	e.preventDefault();//prevent default form submission behaviour
	//get the input values
	const name=document.getElementById('name').value;
	const age=document.getElementById('age').value;
	//validate both fields are empty
	if(name=""|| age===""){
		alert('Please fill in both fields.');
		return;
	}
	//create a new promise for the form submission
	new promise(function(resolve,reject){
		setTimeout(()=>{
			if(age>=18{
				resolve();
			}
			else{
				reject();
			}
		},4000);//resolve or reject after 4000 seconds
			})
	.then(function(){
		alert(`Welcome, ${name}. You can vote.`)
	});
	.catch(function(){
		alert(`Oh sorry ${name}. You aren't old enough.`)
	});
}
