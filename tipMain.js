// grab elements from form
const total = document.querySelector('#total-bill');
const people = document.querySelector('#num-people');
const tip = document.querySelector('#tip-percentage');
const calculateBtn = document.querySelector('#calculate-btn');
// grab elements from modal
const breakdown = document.querySelector('#breakdown');


// event listeners
// total.addEventListener('keyup', () => {
    //   console.log(total.value);
    // });
    // people.addEventListener('keyup', () => {
        //   console.log(people.value);
        // });
        // tip.addEventListener('keyup', () => {
            //   console.log(tip.value);
            // });
            calculateBtn.addEventListener('click', () => calculateTip());
            //functions
            function calculateTip() {
                let bill = total.value
                let guests = people.value
                let service = tip.value
                // the wanted....
                let tipAmount = Math.round((bill / guests) * (service / 100) * 100) / 100;
                let dinerBill = Math.round(((bill / guests) + tipAmount) *100)/100
                let totalTip = Math.round((tipAmount * guests)*100)/100
                // let totalBill = Math.round(((tipAmount * guests) + bill)*100)/100
               
                
                console.log(tipAmount);
                reveal(bill, guests, tipAmount, dinerBill, totalTip);
            }



// add content from the calculation to the modal
function reveal(bill, guests, tipAmount, dinerBill, totalTip) {
    
    breakdown.innerHTML = `
  <li>The total bill was: £${bill}</li>
  <li>The number of diners to split between was: ${guests}</li>
  <li><em>The individual tip amount will therefore be: £${tipAmount}</em></li>
  <li>The total tip on this bill is: £${totalTip}</li>
  <li><em>Each diner's bill plus tip is: £${dinerBill}</em></li>

 

  `
}
