document.getElementById("calculateTax").addEventListener("click", ()=>
    {
        
        const taxableIncome = parseFloat(document.getElementById("taxableIncome").value);
        let tax = 0;

        if (taxableIncome <= 250000) {
            tax = 0;
        } else if (taxableIncome <= 400000) {
            tax = (taxableIncome - 250000) * 0.20;
        } else if (taxableIncome <= 800000) {
            tax = 30000 + (taxableIncome - 400000) * 0.25;
        } else if (taxableIncome <= 2000000) {
            tax = 130000 + (taxableIncome - 800000) * 0.30;
        } else if (taxableIncome <= 8000000) {
            tax = 490000 + (taxableIncome - 2000000) * 0.32;
        } else {
            tax = 2410000 + (taxableIncome - 8000000) * 0.35;
        }

        if (isNaN(tax)) {
            alert("Please enter amount.");
            return;
        }
        document.getElementById("result").value = 
            `₱${tax.toFixed(2)}`;
    });

    document.getElementById("clearvalues").addEventListener("click", ()=>
    {
        document.getElementById("taxableIncome").value='';
        document.getElementById("result").value='';
    });
