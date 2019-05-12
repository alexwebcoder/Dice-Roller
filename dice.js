(function(){

   function rollDice(){

      let die1 = document.querySelector(".die1");
      let die2 = document.querySelector(".die2");
      let status = document.querySelector(".status")
      let doubles = document.querySelector(".doubles");
      let no1 = Math.floor(Math.random() * 6) + 1;
      let no2 = Math.floor(Math.random() * 6) + 1;
      let diceTotal = no1 + no2;

      status.textContent = "You rolled a " + diceTotal;
      die1.textContent = no1;
      die2.textContent = no2;
      
      if (diceTotal === 8){
         status.textContent = "You rolled an " + diceTotal;
      }

      if (no1 == no2){
         doubles.textContent = "DOUBLES BABY!! You get a free turn!";
      }

      else{
         doubles.textContent = " ";
      }

   }

   let button = document.querySelector("button");
   button.addEventListener("click", rollDice);


}());

