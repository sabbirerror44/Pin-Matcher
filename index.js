      //Handling Input taken from user to match
      function insert(num){
        document.getElementById("input-field").value += num;
        }
      function clean(){
        document.getElementById("input-field").value = "";
        }
      function backspace(){
        document.getElementById("input-field").value = document.getElementById("input-field").value.slice(0,-1);
        }

      //Random Pin generator
      const PinGenerator = document.getElementById("generate-pin");
      PinGenerator.addEventListener("click",function(){
      const randomPin= document.getElementById("random-pin");
      const randomValue = randomPin.value = Math.floor(1000+Math.random()*9000);

      //clearing the notification after new generate number
      let NotMatched = document.getElementById("NotMatched");
      NotMatched.style.display ="none";
      let Matched = document.getElementById("Matched");
      Matched.style.display = "none";

      const submitBtn = document.getElementById("submitBtn");
      submitBtn.addEventListener("click",function(){
      const inputField = document.getElementById("input-field").value;

      //Checking whether randomValue and Pin are equal or not 
      if(randomValue == inputField){
      let Matched = document.getElementById("Matched");
        Matched.style.display = "block";
        let NotMatched = document.getElementById("NotMatched");
        NotMatched.style.display ="none";
      }

      if(randomValue != inputField){
      let NotMatched = document.getElementById("NotMatched");
      NotMatched.style.display ="block";
      let Matched = document.getElementById("Matched");
      Matched.style.display = "none";
      }

      })  
      }) 