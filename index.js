    //Handling Input taken from user to match
    function insert(num){
        document.getElementById("inputPin").value += num;
        }
    function clean(){
        document.getElementById("inputPin").value = "";
        }
    function backspace(){
        document.getElementById("inputPin").value = document.getElementById("inputPin").value.slice(0,-1);
        }

     //Random Pin generator
      const PinGenerator = document.getElementById("pin-generator");
      PinGenerator.addEventListener("click",function(){
      const inputScreen = document.getElementById("randomNum");
      const randomValue = inputScreen.value = Math.floor(1000+Math.random()*9000);
    
    //clearing the notification after new generate number
      let NotMatched = document.getElementById("NotMatched");
      NotMatched.style.display ="none";
      let Matched = document.getElementById("Matched");
      Matched.style.display = "none";

      const submitBtn = document.getElementById("submitBtn");
      submitBtn.addEventListener("click",function(){
      const inputPin = document.getElementById("inputPin").value;
  
    //Checking whether randomValue and Pin are equal or not 
      if(randomValue == inputPin){
       let Matched = document.getElementById("Matched");
        Matched.style.display = "block";
        let NotMatched = document.getElementById("NotMatched");
        NotMatched.style.display ="none";
      }

      if(randomValue != inputPin){
       let NotMatched = document.getElementById("NotMatched");
       NotMatched.style.display ="block";
       let Matched = document.getElementById("Matched");
       Matched.style.display = "none";
   }

  })  
}) 