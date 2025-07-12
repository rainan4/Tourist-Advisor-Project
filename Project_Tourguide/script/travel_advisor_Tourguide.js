// Slick slider initialization on document ready
$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false
    });
});

function convert(){
    const from = document.getElementById("cur").value;
    const to = document.getElementById("curID").value;
    const price = document.getElementsByClassName("price");
    
    // Fetch the latest exchange rates from the API
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`).then(
        response => {return response.json();}
    ).then(data => {
        for(let i=0;i<price.length;i++){
            var amt = price[i].innerHTML;
            const currencyNumber = Number(amt.replace(/[^0-9.-]+/g,"")); // Extract the currency amount as number
            var total = currencyNumber * data.rates[to]; // Calculate the converted currency amount
            price[i].innerHTML = "Starting from " + new Intl.NumberFormat('en-CA', {style:'currency', currency:to, maximumFractionDigits: 0}).format(total); // Update the currency value with converted amount
        }

        document.getElementById("cur").value = to; // Update the 'from' currency value to 'to' currency value
    })

}


  
  