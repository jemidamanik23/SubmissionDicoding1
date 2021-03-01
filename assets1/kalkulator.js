const puzzle = {
   displayAlfabet: '0',
   firstAlfabet: null,
};
 
function updateDisplay() {
  document.querySelector("#displayAlfabet").innerText = puzzle.displayAlfabet;
  }
 
function clearpuzzle(){
  puzzle.displayAlfabet = '0';
  }

function newpuzzle() {
  clearpuzzle();
  }
 
function inputDigit(digit) {
   if (puzzle.waitingForSecondAlfabet && puzzle.firstAlfabet === puzzle.displayAlfabet) {
       puzzle.displayAlfabet = digit;
   } else {
       if (puzzle.displayAlfabet === '0') {
           puzzle.displayAlfabet = digit;
       } else {
           puzzle.displayAlfabet += digit;
       }
   }
}

function performCalculation() 
{
       if (puzzle.displayAlfabet === null ) {
           alert("Anda belum menentukan 'kata'");
           return;}
     
  let result = 0;
  let poin=null;
  let jumlah=null;
  if (puzzle.displayAlfabet === "MARGIN") {
           result = "TRUE";
           poin=+1;
          jumlah=puzzle.displayAlfabet.length;
           
       }
       else if (puzzle.displayAlfabet === "COLOR") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       }
       else if (puzzle.displayAlfabet === "BACKGROUND") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       } 
       else if (puzzle.displayAlfabet === "BOLD") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       } 
       else if (puzzle.displayAlfabet === "BORDER") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       } 
       else if (puzzle.displayAlfabet === "PADDING") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       }
       else if (puzzle.displayAlfabet === "FONT") {
           result = "TRUE";
           poin=+1;
           jumlah=puzzle.displayAlfabet.length;
       }    
        else {
           result = "FALSE";
           poin=+0;
           jumlah=puzzle.displayAlfabet.length;
       }

 const history = {
     firstAlfabet: puzzle.displayAlfabet,
  
      poin: poin,
      result: result,
      jumlah:jumlah
 }
 putHistory(history);
 puzzle.displayAlfabet = result;
 renderHistory();
}
     
     
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearpuzzle();
           updateDisplay();
           return;
       }
       if (target.classList.contains('new')) {
           newpuzzle();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }
       inputDigit(target.innerText);
       updateDisplay()
   });
}

