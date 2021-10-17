
function myFunction(){
	let yy=(document.getElementById("bday").value)
	console.log(yy);

   let newDate=new Date(yy)
   console.log (newDate);

  let year=newDate.getFullYear();
  console.log(year);

  let month=newDate.getMonth();
  console.log(month);

  let day=newDate.getDate();
  console.log(day);

  let exactDay=newDate.getDay()
	console.log(exactDay);
};

	function myGenderFunction(){

		let gender = document.querySelector('input[name = gender]:checked').value;
		
		console.log(gender);
			};
	
			
	
