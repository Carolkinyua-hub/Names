
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
	
		let gender=	document.getElementById("female").checked
		
		console.log(gender)
		
		let genderX=document.getElementById("male").checked
		
		console.log(genderX)
		
			};
	let akanName=function akan(gender, exactDay, akanFemale, akanMale){

			akanFemale["Akosua","Adwoa","AbenaaAkua", "Yaa","Afua", "Ama"]
			akanMale["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
	};
	if (exactDay=0 && gender==="female")
    	console.log(akanFemale[0])

	
	/*else if 
		(exactDay=1 && gender==="female")
	console.log(akanFemale[1])
	
	
	else if 
	(exactDay=2 && gender==="female")
console.log(akanFemale[2])*/
