"use strict"
//@ts-check

function setup() {

    //let divSnake = document.querySelector("#snake");
    //let divBlokk = document.querySelector("#blokk");
    //let divPoeng = document.querySelector("#poeng");

    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;
    let cw = 10;     //bredden av en celle(cw = cell width)
    let d;
    let food;
    let score;

    
    let snake = [];   
    // Bruker en tom Array til å pushe inn celler på slangen etterhvert som den
    // spiser mat

    function init()   // lånte denne funksjonen fra et snake-eksempel på nettet
	{
		d = "right"; //default direction
		lagsnake();
		lagfood(); //Now we can see the food particle
		//finally lets display the score
		score = 0;
		
        
        // if-setning som bruker timer som vil "trigge" funksjonen paint
        // timer satt til 60ms
        // game_loop brukes for å få bevegelse i spillet, i dette tilfellet for å bevege slangen.
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
    } 
    init();  
    


    function lagsnake () {     // Lager slangen
        let length = 5; //lengden av slangen ved start
        for(let i = length-1; i>=0; i--) {
            snake.push({x: i, y:0});
        }
    }

    function lagfood () {      // Lager mat
        let xpos = Math.round(Math.random()*(w-cw)/cw);
        let ypos = Math.round(Math.random()*(h-cw)/cw);

        // "450/10=45" bredden/høyden av canvasen delt på bredden/høyden av food-cella
        // Dvs at food har 45 mulige posisjoner i x- og y-retning 
        // Vil derfor lage en celle med x/y mellom 0-44
    }

    function paint () {       // Fargelegger slangen

    }
  

    // Funksjonene for å styre slangen
    // Tar utgangspunkt i de som ble brukt til tank-spillet
    function registrerKey(keyEvent) {
        event.preventDefault();
        keys[keyEvent.keyCode] = 1; // marker at denne key er aktiv
      }
    
      function cancelKey(keyEvent) {
        event.preventDefault();
        keys[keyEvent.keyCode] = 0; // bruker slapp opp denne key-en
      }

      function styrSpillet() {

        if (keys[38] === 1) {
          power = tank.throttle(-0.02);
        }
        if (keys[36] === 1) {
          power = tank.throttle(0.5);
        }
        if (keys[39] === 1) {
          tank.roter(3);
        }
        if (keys[37] === 1) {
          tank.roter(-3);
        }
      }
   
}
   
