document.getElementById("convertFahrenheitToCelsius").addEventListener("click", ()=>
    {
        var F, C;

        F = parseFloat(document.getElementById("fahrenheit").value);
        C = (F - 32) * 5 / 9;

        if (isNaN(F)) {
            alert("Please enter a value.");
            return;
        }        

        document.getElementById("FtoCresult").value = `${C.toFixed(2)}\u00B0C`;
    });

    document.getElementById("clearvalues").addEventListener("click", ()=>
    {
        document.getElementById("fahrenheit").value='';
        document.getElementById("FtoCresult").value='';
    });

    document.getElementById("convertCelsiusToFahrenheit").addEventListener("click", ()=>
    {
        var C, F;

        C = parseFloat(document.getElementById("celsius").value);
        F = (C * 9 / 5) + 32;

        if (isNaN(C)) {
            alert("Please enter a value.");
            return;
        }        

        document.getElementById("CtoFresult").value = `${F.toFixed(2)}\u00B0F`;
    });

    document.getElementById("ftcclearvalues").addEventListener("click", ()=>
    {
        document.getElementById("celsius").value='';
        document.getElementById("CtoFresult").value='';
    });

    document.getElementById("convertMetersToFeet").addEventListener("click", ()=>
    {
        var m, ft;

        m = parseFloat(document.getElementById("meters").value);
        ft = m * 3.28084;

        if (isNaN(m)) {
            alert("Please enter a value.");
            return;
        }        

        document.getElementById("MtoFTresult").value = `${ft.toFixed(2)} feet`;
    });

    document.getElementById("mtfclearvalues").addEventListener("click", ()=>
    {
        document.getElementById("meters").value='';
        document.getElementById("MtoFTresult").value='';
    });

    document.getElementById("convertFeetToMeters").addEventListener("click", ()=>
    {
        var ft, m;

        ft = parseFloat(document.getElementById("feet").value);
        m = ft / 3.28084;

        if (isNaN(ft)) {
            alert("Please enter a value.");
            return;
        }        

        document.getElementById("FTtoMresult").value = `${m.toFixed(2)} meters`;
    });

    document.getElementById("ftmclearvalues").addEventListener("click", ()=>
    {
        document.getElementById("feet").value='';
        document.getElementById("FTtoMresult").value='';
    });
