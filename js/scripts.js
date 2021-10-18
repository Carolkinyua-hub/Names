
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

  let akanFemale=["Akosua","Adwoa","Abenaa","Akua", "Yaa","Afua", "Ama"];
  let akanMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

  if(exactDay===0 && male===true){
      console.log(akanMale[0]);
      document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[0]);
      
    }
      else if(exactDay===0 && male===false){
        console.log(akanFemale[0]);
        document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[0]);   

      }

  if(exactDay===1 && male===true){
        console.log(akanMale[1]);
        document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[1]);
        
      }
        else if(exactDay===1 && male===false){
          console.log(akanFemale[1]);
          document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[1]);   
  
        }
  if(exactDay===2 && male===true){
          console.log(akanMale[2]);
          document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[2]);
          
        }
          else if(exactDay===2 && male===false){
            console.log(akanFemale[2]);
            document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[2]);   
    
          } 
    if(exactDay===3 && male===true){
            console.log(akanMale[3]);
            document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[3]);
            
          }
            else if(exactDay===3 && male===false){
              console.log(akanFemale[3]);
              document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[3]);   
      
            }

     if(exactDay===4 && male===true){
        console.log(akanMale[4]);
        document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[4]);
        
      }
        else if(exactDay===4 && male===false){
          console.log(akanFemale[4]);
          document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[4]);   
  
        }
    if(exactDay===5 && male===true){
          console.log(akanMale[5]);
          document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[5]);
          
        }
          else if(exactDay===5 && male===false){
            console.log(akanFemale[5]);
            document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[5]);   
    
          }
    if(exactDay===6 && male===true){
            console.log(akanMale[6]);
            document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanMale[6]);
            
          }
            else if(exactDay===6 && male===false){
              console.log(akanFemale[6]);
              document.getElementById("demo").innerHTML ="Your Akan Name is" +" "+ (akanFemale[6]);   
      
            }
          
  };
