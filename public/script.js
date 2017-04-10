/*    Individual Project
      Author:Charleen Fischer
      Date:2/22/17
      Purpose:
*/ 

/* Added script.js file to calculcate subtotals for the page4.html "Travel Necessities"*/

function calcTotal() {
  var itemTotal=0
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  (item1.checked) ? (itemTotal += 250) : (itemTotal += 0);  /*Changed all the prices to equal those of the products on the travel necessities page. */
  (item2.checked) ? (itemTotal += 55) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 25) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 200) : (itemTotal += 0);
  var salesTaxRate = 0.07;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert("Your order total is $" + orderTotal);
} 
document.getElementById("sButton").addEventListener("click", calcTotal, false);