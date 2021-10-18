
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

  let exactDay=parseInt(newDate.getDay())
	console.log(exactDay);
	let gender = document.querySelector('input[name = gender]:checked').value;
		
    console.log(gender);

    let female=document.getElementById(id="female").checked;
    console.log(female);

    let male=document.getElementById(id="male").checked;
    console.log(male);

    let akanFemale=["Akosua","Adwoa","Abenaa","Akua", "Yaa","Afua", "Ama"]
    let akanMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

    if (exactDay===0){
      if (female===true)
      console.log(akanFemale[0]);
      if (male===true)
      console.log(akanMale[0]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is"; 
    }
    if (exactDay===1){
      if (female===true)
      console.log(akanFemale[1]);
      if (male===true)
      console.log(akanMale[1]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }
    
    if (exactDay===2){
      if (female===true)
      console.log(akanFemale[2]);
      if (male===true)
      console.log(akanMale[2]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }
    if (exactDay===3){
      if (female===true)
      console.log(akanFemale[3]);
      if (male===true)
      console.log(akanMale[3]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }
    if (exactDay===4){
      if (female===true)
      console.log(akanFemale[4]);
      if (male===true)
      console.log(akanMale[4]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }
    if (exactDay===5){
      if (female===true)
      console.log(akanFemale[5]);
      if (male===true)
      console.log(akanMale[5]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }
    if (exactDay===6){
      if (female===true)
      console.log(akanFemale[6]);
      if (male===true)
      console.log(akanMale[6]); 
      document.getElementById("demo").innerHTML = "Your Akan Name is";
    }

    

};



















