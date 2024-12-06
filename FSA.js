document.getElementById("calculate").addEventListener("click", ()=>
    {
        // Get the input value
        const n = parseInt(document.getElementById("numberInput").value);

        if (isNaN(n) || n < 1) {
            alert("Please enter a valid integer greater than or equal to 1.");
            return;
        }

        // Calculate factorial using a while loop
        let factorial = 1;
        let i = n;
        while (i > 0) {
            factorial *= i;
            i--;
        }

        // Calculate sum using a do-while loop
        let sum = 0;
        let j = 1;
        do {
            sum += j;
            j++;
        } while (j <= n);

        // Calculate average using a for loop
        let average = 0;
        for (let k = 1; k <= n; k++) {
            average += k;
        }
        average = average / n;

        document.getElementById("factorialResult").textContent = `The factorial of ${n} is: ${factorial}`;
        document.getElementById("sumResult").textContent = `The sum of the first ${n} numbers is: ${sum}`;
        document.getElementById("averageResult").textContent = `The average of the first ${n} numbers is: ${average.toFixed(2)}`;
    });

    document.getElementById("clearvalues").addEventListener("click", ()=>
    {
        document.getElementById("factorialResult").textContent = 'The factorial is: ';
        document.getElementById("sumResult").textContent = 'The sum is: ';
        document.getElementById("averageResult").textContent = 'The average is: ';
        document.getElementById("numberInput").value = '';
    });
