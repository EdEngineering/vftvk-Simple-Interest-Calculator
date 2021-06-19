const compute = document.getElementById("compute");

compute.addEventListener('click',function() {
    console.log('Computing...');
    var amount = document.getElementById("amount");
    var result = document.getElementById("result");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    if (amount.value == "") {
        alert('Please fill the amount data');
        amount.focus();
    }
    else{
        result.innerHTML = "If you deposit <mark>"+amount.value+"</mark>";
        result.innerHTML +="<br>at an interest rate of <mark>"+rate.value+"% </mark>";
        result.innerHTML += "<br>You will receive an amount of <mark>"+(parseInt((amount.value)*(rate.value/100)*(years.value)))+"</mark>";
        result.innerHTML +="<br>in the year <mark>"+(2021+parseInt(years.value))+"</mark>";
    }
});

        