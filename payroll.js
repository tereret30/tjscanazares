let payrollList = [];

        function updateTable() {
            const tableBody = document.querySelector("#payrollTable tbody");
            tableBody.innerHTML = ""; // Clear table

            payrollList.forEach((employee, index) => 
            {
                const grossPay = employee.daysWorked * employee.dailyRate;
                const netPay = grossPay - employee.deduction;

                const row = document.createElement("tr");
                row.innerHTML = 
                      "<td>" + (index + 1) + "</td>" 
                    + "<td>" + employee.name + "</td>" 
                    + "<td>" + employee.daysWorked + "</td>" 
                    + "<td>" + employee.dailyRate.toFixed(2) + "</td>" 
                    + "<td>" + grossPay.toFixed(2) + "</td>" 
                    + "<td>" + employee.deduction.toFixed(2) + "</td>" 
                    + "<td>" + netPay.toFixed(2) + "</td>";
                tableBody.appendChild(row);
            });
        }

        document.getElementById("addEmployee").addEventListener("click", () => 
        {
            const name = document.getElementById("employeeName").value.trim();
            const daysWorked = parseInt(document.getElementById("daysWorked").value);
            const dailyRate = parseFloat(document.getElementById("dailyRate").value);
            const deduction = parseFloat(document.getElementById("deduction").value);

            if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
                alert("Please fill out all fields with valid values.");
                return;
            }

            payrollList.push({ name, daysWorked, dailyRate, deduction });
            updateTable();

            document.getElementById("employeeName").value = "";
            document.getElementById("daysWorked").value = "";
            document.getElementById("dailyRate").value = "";
            document.getElementById("deduction").value = "";
        });

        document.getElementById("deleteEmployee").addEventListener("click", () => 
        {
            const lineNumber = parseInt(document.getElementById("lineNumber").value);

            if (isNaN(lineNumber) || lineNumber < 1 || lineNumber > payrollList.length) {
                alert("Please enter a valid line number.");
                return;
            }

            const confirmation = confirm("Are you sure you want to delete line number " + lineNumber + "?");
            if (!confirmation) {
                return;
            }

            payrollList.splice(lineNumber - 1, 1);
            updateTable();

            document.getElementById("lineNumber").value = "";
        });

        document.getElementById("clearList").addEventListener("click", () => 
        {
            const confirmation = confirm("Are you sure you want to clear the entire payroll list?");
            if (confirmation) {
                payrollList = []; 
                updateTable(); 
            }
        });

        updateTable();
