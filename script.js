document.getElementById('userform').addEventListener('submit', function(e){
	e.preventDefault();
	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;

	if(name === "" || age === ""){
		alert('Please fill in both fields.');
		return;
	}

	new Promise(function(resolve, reject){
		setTimeout(() => {
			if(age >= 18){
				resolve();
			}
			else{
				reject();
			}
		}, 4000);
	})
	.then(() => {
		alert(`Welcome, ${name}. You can vote.`)
	})
	.catch(() => {
		alert(`Oh sorry ${name}. You aren't old enough.`)
	});
});