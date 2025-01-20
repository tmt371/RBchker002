function xQuo() {
    // Create a floating window
    const floatingWindow = window.open('', 'xQuoWindow', 'width=1000,height=1600');
    // Define the HTML content directly in the JavaScript
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EZ Blinds & Shutters Quotation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.2;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .section {
            width: 20cm;
            margin: 0 auto;
        }

        .header {
            background-color: #E6F3FF;
            padding: 13.5px;
            padding-bottom: 5px;
            display: flex;
            justify-content: space-between;
            height: 250px;
        }

        .header h1 {
            color: #E97132;
            margin: 0;
        }

        .header-content {
            line-height: 1.1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .header-title {
            margin-bottom: auto;
        }

        .header-details {
            margin-top: auto;
        }

        .company-info {
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .company-name {
            margin-bottom: auto;
        }

        .company-details {
            margin-top: auto;
        }

        .middle-container {
            width: 20cm;
            min-height: 25cm;
            height: auto;
            border: 1px solid black;
            margin: 20px auto;
        }

        .middle-container2 {
            width: 20cm;
            display: flex;
            border: 1px solid black;
            margin: 10px auto 10px auto;
        }

        .bottom-section-container {
            width: 20cm;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .payment-method {
            width: 8cm;
            height: 8cm;
            border: 1px solid black;
            margin-bottom: 0;
        }

        .payment-method table {
            /*width: 100%;*/
            height: 100%;
            border-collapse: collapse;
        }

        .payment-method th {
            background-color: #FFFACD;
            font-weight: bold;
            text-align: center;
            height: 1cm;
        }

        .payment-method td {
            border: 1px solid black;
            padding: 5px;
        }

        .payment-method .method-number {
            /*width: 1cm;*/
            background-color: #f0f0f0;
            font-weight: bold;
            text-align: left;
        }

        .payment-method .method-details {
            width: 6cm;
            text-align: left;
        }

        .payment-method .method-1 {
            height: 2.5cm;
        }

        .payment-method .method-2 {
            height: 1cm;
        }

        .payment-method .footer {
            color: blue;
            font-weight: bold;
            text-align: left;
        }

        .total-summary {
            width: 8cm;
            align-self: flex-start;
        }

        .total-summary table {
            display: table;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 0;
            border-collapse: collapse;
            border: 2px solid black;
        }

        .total-summary tr {
            display: flex;
        }

        .total-summary td:first-child {
            flex-grow: 1;
            border: 1px solid black;
            padding: 5px;
        }

        .total-summary table td:nth-child(2) {
            width: 3cm;
            border: 1px solid black;
            padding: 5px;
        }

        .date-input {
            border: none;
            border-bottom: 1px solid #333;
            padding: 5px 0;
            width: 100px;
            margin-right: 15px;
        }
    </style>
</head>

<body>
    <div class="section header">
        <div class="header-content">
            <h1 class="header-title">Quotation</h1>
            <div class="header-details">
                <p>Ref: <span contenteditable="true" id="ref"></span></p>
                <p>Customer: <span contenteditable="true" id="customer"></span></p>
                <p>Address: <span contenteditable="true" id="address"></span></p>
                <p>Phone: <span contenteditable="true" id="phone"></span></p>
                <p>Email: <span contenteditable="true" id="email"></span></p>
                <p><strong>Issue Date:</strong> <span contenteditable="true" class="date-input" id="issueDate"></span>
                    <strong>Due Date:</strong> <span contenteditable="true" class="date-input"
                        id="dueDateDisplay"></span>
                </p>
            </div>
        </div>
        <div class="company-info header-content">
            <h2 class="company-name">EZ Blinds & Shutters</h2>
            <div class="company-details">
                <p>ABN: 52 62 74 20 777</p>
                <p>Address: U11/ 271 Wells Rd, Chelsea Heights</p>
                <p>Phone: 0466 965 168</p>
                <p>email:ezblinds ＠ezbns．com．au</p>
                <p>Web: www.ezbns.com.au</p>
                <p>NO: <span id="quoNo"></span></p>
            </div>
        </div>
    </div>

    <div class="section middle-container">
        <!-- Content for the middle section can be added here -->
    </div>

    <div class="section middle-container2">
        <!-- Content for the middle section can be added here -->
    </div>

    <div class="section bottom-section-container">
        <div class="payment-method">
            <table>
                <tr>
                    <th colspan="2">Payment Method</th>
                </tr>
                <tr>
                    <td class="method-number method-1">1</td>
                    <td class="method-details method-1">
                        Bank: CBA<br>
                        BSB: 062 692<br>
                        Account: 4570 8877<br>
                        Acc Name: Alphalead Pty Ltd
                    </td>
                </tr>
                <tr>
                    <td class="method-number method-2">2</td>
                    <td class="method-details method-2">PayID: 0466 965 168</td>
                </tr>
                <tr>
                    <td colspan="2" class="footer">Please leave your Ph. number as Ref. in the transaction.</td>
                </tr>
            </table>
        </div>
        <div class="total-summary">
            <table>
                <tr>
                    <td>Delivery:</td>
                    <td contenteditable="true"></td>
                </tr>
                <tr>
                    <td>Installation:</td>
                    <td contenteditable="true"></td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td contenteditable="true"></td>
                </tr>
                <tr>
                    <td>GST inclusive:</td>
                    <td contenteditable="true"></td>
                </tr>
                <tr>
                    <td>Deposit:</td>
                    <td contenteditable="true"></td>
                </tr>
                <tr>
                    <td>Balance:</td>
                    <td contenteditable="true"></td>
                </tr>
            </table>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            function formatDate(date) {
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return \`\${day < 10 ? '0' + day : day}/\${month < 10 ? '0' + month : month}/\${year}\`;
            }

            var issueDateSpan = document.getElementById("issueDate");
            var dueDateSpan = document.getElementById("dueDateDisplay");

            var currentDate = new Date();
            issueDateSpan.textContent = formatDate(currentDate);

            var dueDate = new Date(currentDate);
            dueDate.setDate(dueDate.getDate() + 14);
            dueDateSpan.textContent = formatDate(dueDate);

            issueDateSpan.addEventListener("input", function () {
                var parts = issueDateSpan.textContent.split('/');
                if (parts.length === 3) {
                    var day = parseInt(parts[0], 10);
                    var month = parseInt(parts[1], 10) - 1;
                    var year = parseInt(parts[2], 10);
                    var newIssueDate = new Date(year, month, day);
                    if (!isNaN(newIssueDate)) {
                        var newDueDate = new Date(newIssueDate);
                        newDueDate.setDate(newDueDate.getDate() + 14);
                        dueDateSpan.textContent = formatDate(newDueDate);
                    }
                }
            });

            const fields = ['ref', 'customer', 'address', 'phone', 'email'];
            fields.forEach((field, index) => {
                const element = document.getElementById(field);
                element.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (index < fields.length - 1) {
                            document.getElementById(fields[index + 1]).focus();
                        }
                    }
                });
            });

            function generateQuoNo() {
                var now = new Date();
                var year = now.getFullYear();
                var month = String(now.getMonth() + 1).padStart(2, '0');
                var day = String(now.getDate()).padStart(2, '0');
                var hours = String(now.getHours()).padStart(2, '0');
                return year + month + day + hours;
            }

            window.QuoNo = generateQuoNo();

            document.getElementById('quoNo').textContent = window.QuoNo;
        });
    </script>
</body>

</html>
 `;
    // Set the HTML content of the floating window
    floatingWindow.document.open();
    floatingWindow.document.write(htmlContent);
    floatingWindow.document.close();

    // Function to copy the datatable and its styles, and perform additional tasks
    function processDataTable() {
        // Get the middle-container element from the floating window (xquowindow)

        const floatingMiddleContainer = floatingWindow.document.querySelector('.section.middle-container');

        // Get the table-container element from the original page (index.html)
        const originalTableContainer = document.querySelector('.table-container');

        if (floatingMiddleContainer && originalTableContainer) {
            // Clone the datatable element from the original page
            const clonedDatatable = originalTableContainer.querySelector('#dataTable').cloneNode(true);

            // Get all styles from the original page
            const styles = Array.from(document.styleSheets)
                .filter(styleSheet => {
                    try {
                        return styleSheet.cssRules && styleSheet.cssRules.length > 0;
                    } catch (e) {
                        console.log('Cannot access styleSheet', e);
                        return false;
                    }
                })
                .map(styleSheet => {
                    return Array.from(styleSheet.cssRules)
                        .map(rule => rule.cssText)
                        .join('\n');
                })
                .join('\n');

            // Create a style element and add it to the floating window
            const styleElement = floatingWindow.document.createElement('style');
            styleElement.textContent = styles;
            floatingWindow.document.head.appendChild(styleElement);

            // Add specific styles for the table
            const tableStyles = `
                #dataTable {
                    border-collapse: collapse;
                    width: 100%;
                    
                }
                #dataTable th, #dataTable td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                }
                #dataTable th {
                    background-color: #f2f2f2;
                }
              `;
            const tableStyleElement = floatingWindow.document.createElement('style');
            tableStyleElement.textContent = tableStyles;
            floatingWindow.document.head.appendChild(tableStyleElement);

            // Clear existing content
            floatingMiddleContainer.innerHTML = '';
            // Append the cloned datatable to the floating window's middle-container
            floatingMiddleContainer.appendChild(clonedDatatable);

            // Get the table in the floating window
            const table = floatingWindow.document.querySelector('#dataTable');

            // Call AskpricingRate() function
            AskpricingRate(table);

            // 1. Change column names
            table.rows[0].cells[1].textContent = 'Name';
            table.rows[0].cells[2].textContent = 'Color';

            // 2. Process BO, BO2, and SN columns
            processColumn(table, 3, 'BO');
            processColumn(table, 4, 'BO2');
            processColumn(table, 5, 'SN');

            // 3. Modify table structure
            table.rows[0].cells[3].textContent = 'Location';
            table.rows[0].cells[3].style.width = '15px';
            for (let i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[3].textContent = '';
            }

            // Remove columns: BO2, SN, NA, Discnt
            const columnsToRemove = [14, 13, 5, 4]; // Indices adjusted as we remove columns
            columnsToRemove.forEach(colIndex => {
                for (let i = 0; i < table.rows.length; i++) {
                    table.rows[i].deleteCell(colIndex);
                }
            });


            // 在此調用 addRBsum 函數
            addRBsum(table);
            // Call slimTable function
            slimTable(table);

            console.log('Datatable processed successfully');

        } else {
            console.error('Required elements not found. Retrying...');
            setTimeout(processDataTable, 500); // Retry after 100ms
        }
        setTimeout(() => {
            console.log('Calling createInfoTable...');
            createInfoTable(floatingWindow);
        }, 1000); // 延遲 1 秒，確保 processDataTable 已經完成
        console.log(floatingWindow.document.querySelector('.payment-method table'));

    }

    function AskpricingRate(table) {
        let PricingRate;

        while (true) {
            const input = floatingWindow.prompt("Price multiplier rate: 1.5 ~ 1.8");

            if (input === null) {
                // User pressed cancel, stop the entire xquo.js process
                throw new Error("Process cancelled by user");
            }

            PricingRate = parseFloat(input);

            if (!isNaN(PricingRate) && PricingRate > 0 && PricingRate >= 1.5 && PricingRate <= 1.8) {
                break;
            } else {
                floatingWindow.alert("Please enter a valid number between 1.5 and 1.8");
            }
        }

        // Process the table
        for (let i = 1; i < table.rows.length; i++) {
            const cell14 = table.rows[i].cells[14];
            const cell15 = table.rows[i].cells[15];

            if (cell14 && cell15) {
                const value = parseFloat(cell14.textContent);
                if (!isNaN(value)) {
                    cell15.textContent = (value * PricingRate).toFixed(2);
                }
            }
        }
    }

    function createInfoTable(floatingWindow) {
        console.log('Executing createInfoTable');
        // 1. 從浮動視窗中取出 datatable 並計算 Sellprice（最後一列的最後一行單元格的值）
        const datatable = floatingWindow.document.querySelector(".section.middle-container table");
        if (!datatable) {
            console.error('Datatable not found');
            return;
        }

        // 2. 創建 infotable（3 列 8 行）
        const infotable = floatingWindow.document.createElement("table");
        infotable.style.borderCollapse = "collapse";
        infotable.style.width = "100%";
        infotable.classList.add('infotable'); // Add class for easier selection

        for (let i = 0; i < 3; i++) {
            const row = infotable.insertRow();
            for (let j = 0; j < 8; j++) {
                const cell = row.insertCell();
                cell.style.fontSize = "80%";
                cell.style.color = "black";
                cell.style.textAlign = "center";
                cell.style.border = "1px solid black";
            }
        }

        // 3. 設置 infotable 表頭名稱
        const headers = ["item", "D'bracket", "H-winder", "Motor", "Remote", "Charger", "Extra", "R'Blinds"];
        for (let j = 0; j < headers.length; j++) {
            infotable.rows[0].cells[j].innerText = headers[j];
        }
        infotable.rows[2].cells[0].innerText = "Total";

        // 4. 設定函數以更新 infotable 的值動態變動
        const updateSellPrice = () => {
            const lastRowIndex = datatable.rows.length - 1;
            const lastCellIndex = datatable.rows[0].cells.length - 1;

            // 更新 infotable.rows[1].cells[7]
            let sellprice = 0;
            if (lastRowIndex > 0) {
                sellprice = parseFloat(datatable.rows[lastRowIndex].cells[lastCellIndex].innerText.trim()) || 0;
            }
            infotable.rows[1].cells[7].innerText = sellprice;

            // 更新 infotable.rows[2].cells[7]
            let total = 0;
            for (let j = 1; j < 8; j++) {
                total += parseFloat(infotable.rows[1].cells[j].innerText) || 0;
            }
            infotable.rows[2].cells[7].innerText = total;
        };

        // 初次執行更新
        updateSellPrice();

        // 5. 監聽 datatable 的變動
        const observer = new MutationObserver(updateSellPrice);
        observer.observe(datatable, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        // 6. 統計第一列非空白單元格數，並計算 HDWinder、DboKet、Emotor
        let HDWinder = 0, DboKet = 0, Emotor = 0;
        let nonEmptyCountColumn0 = 0;

        for (let i = 1; i < datatable.rows.length; i++) {
            if (datatable.rows[i].cells[0].innerText.trim() !== "") {
                nonEmptyCountColumn0++;
            }
        }

        for (let i = 1; i <= nonEmptyCountColumn0; i++) {
            if (datatable.rows[i].cells[8].innerText.trim() !== "") HDWinder++;
            if (datatable.rows[i].cells[9].innerText.trim() !== "") DboKet++;
            if (datatable.rows[i].cells[10].innerText.trim() !== "") Emotor++;
        }

        HDWinder *= 30;
        DboKet *= 20;
        Emotor *= 250;

        // 填入計算結果
        infotable.rows[1].cells[1].innerText = DboKet;
        infotable.rows[1].cells[2].innerText = HDWinder;
        infotable.rows[1].cells[3].innerText = Emotor;

        // 檢查 Emotor 是否為零
        if (Emotor > 0) {
            // 7. 跳出對話框詢問 Remote 數量並計算
            let remoteCount;
            do {
                remoteCount = parseInt(floatingWindow.prompt("How many remote needed?"), 10);
            } while (isNaN(remoteCount) || remoteCount <= 0);
            infotable.rows[1].cells[4].innerText = remoteCount * 100;

            // 8. 填入 50 到 Charger 列
            infotable.rows[1].cells[5].innerText = 50;
        }

        // 9. 原跳出對話框詢問 Extra item 的價格 改成 直接讓用戶自己輸入
        infotable.rows[1].cells[6].innerText = '0'; // Set initial value to 0

        // Make the Extra item cell editable
        const extraItemCell = infotable.rows[1].cells[6];
        extraItemCell.contentEditable = true;
        extraItemCell.style.backgroundColor = '#f9f9f9'; // Optional: add a background color to indicate it's editable

        // Add event listeners
        extraItemCell.addEventListener('input', function () {
            // Allow only numbers and decimal point
            this.textContent = this.textContent.replace(/[^0-9.]/g, '');
            updateSellPrice(); // Update the total when the value changes
        });

        extraItemCell.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent default Enter behavior
                this.blur(); // Remove focus from the cell
            }
        });


        // 確保總和更新
        updateSellPrice();

        // 10. 將 infotable 添加到浮動視窗的 middle-container2
        floatingWindow.document.querySelector(".section.middle-container2").appendChild(infotable);

        // Add this after appending infotable to middle-container2
        const bottomSectionContainer = floatingWindow.document.querySelector('.bottom-section-container');
        if (!bottomSectionContainer) {
            console.error('Bottom section container not found, creating it');
            const newBottomSectionContainer = floatingWindow.document.createElement('div');
            newBottomSectionContainer.classList.add('bottom-section-container');
            floatingWindow.document.body.appendChild(newBottomSectionContainer);
        }

        const totalSummary = bottomSectionContainer.querySelector('.total-summary');
        if (!totalSummary) {
            console.error('Total summary not found, creating it');
            const newTotalSummary = floatingWindow.document.createElement('div');
            newTotalSummary.classList.add('total-summary');
            const totalSummaryTable = floatingWindow.document.createElement('table');
            for (let i = 0; i < 6; i++) {
                const row = totalSummaryTable.insertRow();
                row.insertCell();
                row.insertCell();
            }
            newTotalSummary.appendChild(totalSummaryTable);
            bottomSectionContainer.appendChild(newTotalSummary);
        }

        console.log('Executing createInfoTable');

        // Add TotalSum functionality
        TotalSum(floatingWindow);


    }


    // Function to process a specific column
    function processColumn(table, colIndex, columnName) {
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[colIndex].querySelector('.round-button.active')) {
                const name = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Name');
                const color = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Color');

                if (name && color) {
                    for (let j = 1; j < table.rows.length; j++) {
                        if (table.rows[j].cells[colIndex].querySelector('.round-button.active')) {
                            table.rows[j].cells[1].textContent = name;
                            table.rows[j].cells[2].textContent = color;
                        }
                    }
                }
                break; // Exit after processing the first occurrence
            }
        }
    }

    // Function to prompt for input
    function promptForInput(message, field) {
        let input;
        do {
            input = floatingWindow.prompt(`${message}\n${field}:`);
        } while (input === '');
        return input;
    }

    // Start the process after a short delay
    setTimeout(processDataTable, 500);

    function TotalSum(floatingWindow) {
        const bottomSectionContainer = floatingWindow.document.querySelector('.bottom-section-container');
        if (!bottomSectionContainer) {
            console.error('Bottom section container not found');
            return;
        }

        const totalSummaryTable = bottomSectionContainer.querySelector('.total-summary table');
        if (!totalSummaryTable) {
            console.error('Total summary table not found');
            return;
        }

        const middleContainer2 = floatingWindow.document.querySelector('.section.middle-container2');
        const infoTable = middleContainer2.querySelector('.infotable');
        if (!infoTable) {
            console.error('Info table not found');
            return;
        }

        function getSellprice02() {
            const lastRow = infoTable.rows[infoTable.rows.length - 1];
            if (!lastRow) {
                console.error('Last row of info table not found');
                return 0;
            }
            return parseFloat(lastRow.cells[7].textContent) || 0;
        }

        function updateTotalSummary() {
            const sellprice02 = getSellprice02();
            const deliveryCell = totalSummaryTable.rows[0].cells[1];
            const installCell = totalSummaryTable.rows[1].cells[1];

            const delivery = parseFloat(deliveryCell.textContent) || 150;
            const install = parseFloat(installCell.textContent) || RBitemNO * 15;

            let FinalTotal;
            if (deliveryCell.style.textDecoration === 'line-through' && installCell.style.textDecoration === 'line-through') {
                FinalTotal = sellprice02;
            } else if (deliveryCell.style.textDecoration === 'line-through') {
                FinalTotal = install + sellprice02;
            } else if (installCell.style.textDecoration === 'line-through') {
                FinalTotal = delivery + sellprice02;
            } else {
                FinalTotal = delivery + install + sellprice02;
            }

            const GST = FinalTotal * 0.1;
            const Deposit = Math.ceil((FinalTotal * 0.55) / 10) * 10;
            const Balance = FinalTotal - Deposit;

            deliveryCell.textContent = delivery.toFixed(2);
            installCell.textContent = install.toFixed(2);
            totalSummaryTable.rows[2].cells[1].textContent = FinalTotal.toFixed(2);
            totalSummaryTable.rows[3].cells[1].textContent = GST.toFixed(2);
            totalSummaryTable.rows[4].cells[1].textContent = Deposit.toFixed(2);
            totalSummaryTable.rows[5].cells[1].textContent = Balance.toFixed(2);
        }

        // Make cells in column index 0, row index 0 and 1 clickable
        [0, 1].forEach(rowIndex => {
            const cell = totalSummaryTable.rows[rowIndex].cells[0];
            let isActive = false;
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function () {
                isActive = !isActive;
                this.style.backgroundColor = isActive ? '#f0f0f0' : '';
                const valueCell = totalSummaryTable.rows[rowIndex].cells[1];
                if (isActive) {
                    valueCell.style.textDecoration = 'line-through';
                } else {
                    valueCell.style.textDecoration = 'none';
                }
                updateTotalSummary();
            });
        });

        // Make all cells in column index 1 editable and add event listeners
        for (let i = 0; i < totalSummaryTable.rows.length; i++) {
            const cell = totalSummaryTable.rows[i].cells[1];
            if (!cell) {
                console.error(`Cell not found in row ${i}`);
                continue;
            }
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
                this.textContent = this.textContent.replace(/[^0-9.]/g, '');
                updateTotalSummary();
            });
            cell.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const nextRow = this.parentElement.nextElementSibling;
                    if (nextRow) {
                        nextRow.cells[1].focus();
                    } else {
                        this.blur();
                    }
                }
            });
        }

        // Add click functionality to GST row
        const gstRow = totalSummaryTable.rows[3];
        const gstLabelCell = gstRow.cells[0];
        const gstValueCell = gstRow.cells[1];
        let gstHidden = false;

        gstLabelCell.style.cursor = 'pointer';
        gstLabelCell.addEventListener('click', function () {
            if (gstHidden) {
                this.style.backgroundColor = '';
                this.textContent = 'GST inclusive:';
                gstValueCell.style.visibility = 'visible';
                gstValueCell.style.border = '1px solid black';
                gstHidden = false;
            } else {
                this.style.backgroundColor = '#f0f0f0';
                this.textContent = '';
                gstValueCell.style.visibility = 'hidden';
                gstValueCell.style.border = '2px solid black';
                gstHidden = true;
            }
            updateTotalSummary();
        });

        // Add a MutationObserver to watch for changes in the info table
        const observer = new MutationObserver(() => {
            updateTotalSummary();
        });

        observer.observe(infoTable, {
            subtree: true,
            childList: true,
            characterData: true
        });

        // Initial update
        updateTotalSummary();
    }

    function slimTable(table) {
        // 1. 縮小字體、設置為黑色，並居中對齊所有單元格
        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].style.fontSize = '65%';
                table.rows[i].cells[j].style.color = 'black';
                table.rows[i].cells[j].style.textAlign = 'center'; // 新增居中對齊
            }
        }

        // 2. 設置表頭字體為粗體
        for (let j = 0; j < table.rows[0].cells.length; j++) {
            table.rows[0].cells[j].style.fontWeight = 'bold';
        }

        // 3. 設置 column index 3 為可輸入內容，並添加 Enter 鍵監聽事件
        for (let i = 1; i < table.rows.length; i++) {
            const cell = table.rows[i].cells[3];
            cell.contentEditable = 'true';

            // 監聽 Enter 鍵，移動焦點到下一行
            cell.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault(); // 防止預設換行行為
                    const nextRowIndex = i + 1;
                    if (nextRowIndex < table.rows.length) {
                        const nextCell = table.rows[nextRowIndex].cells[3];
                        nextCell.focus(); // 將焦點移至下一行的對應單元格
                    }
                }
            });
        }

    }

    function addRBsum(table) {
        // 1. 計算最後一列的數值總和，命名為 RBsubTotal
        let RBsubTotal = 0;
        for (let i = 1; i < table.rows.length; i++) { // 跳過表頭
            const cellValue = parseFloat(table.rows[i].cells[table.rows[i].cells.length - 1].textContent) || 0;
            RBsubTotal += cellValue;
        }

        // 2. 計算表格行數，命名為 RBitemNO
        let RBitemNO = table.rows.length - 1; // 減去表頭行
        window.RBitemNO = RBitemNO; // 設置為全局變數，供外部使用

        // 3. 新增兩行
        const createRow = () => {
            const row = table.insertRow(); // 插入新行
            for (let i = 0; i < table.rows[0].cells.length; i++) { // 為該行創建單元格
                const cell = row.insertCell();
                cell.style.border = '1px solid black'; // 保持與表格樣式一致
                cell.style.padding = '8px';
                cell.style.textAlign = 'left';
            }
            return row;
        };

        const secondLastRow = createRow(); // 倒數第二行
        const lastRow = createRow();      // 倒數第一行

        // 4. 在倒數第二行 column index 11 填入 RBsubTotal
        secondLastRow.cells[11].textContent = RBsubTotal;

        // 5. 在倒數第二行 column index 10 填入 "Sub total"
        secondLastRow.cells[10].textContent = 'Sub total';

        // 6. 在倒數第一行 column index 9 填入 "Discount %"
        lastRow.cells[9].textContent = 'Discount %';

        // 7. 設定倒數第一行 column index 10 的值為 Discnt，並設置為可輸入狀態
        const discountCell = lastRow.cells[10];
        discountCell.contentEditable = "true"; // 設置單元格為可編輯
        discountCell.style.backgroundColor = '#f9f9f9'; // 給單元格添加背景區分

        // 預設折扣為空白，當空白時設置為 0
        let Discnt = parseFloat(discountCell.textContent) || 0;

        // 8. 設定倒數第一行 column index 11 的值為 RBdiscntTotal
        let RBdiscntTotal = RBsubTotal * ((100 - Discnt) / 100); // 計算折扣後的總和
        lastRow.cells[11].textContent = RBdiscntTotal.toFixed(2); // 保留兩位小數

        // 9. 添加輸入限制、動態更新功能，並防止換行
        discountCell.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // 阻止換行
                discountCell.blur();    // 移動焦點
            }
        });

        discountCell.addEventListener('input', () => {
            // 提取輸入值
            let inputValue = discountCell.textContent.trim();

            // 檢查是否為合法數字且範圍在 0 到 30
            if (/^\d+(\.\d+)?$/.test(inputValue)) { // 僅接受數字
                const parsedValue = parseFloat(inputValue);
                if (parsedValue >= 0 && parsedValue <= 30) {
                    Discnt = parsedValue; // 更新有效值
                } else {
                    Discnt = 0; // 超出範圍時，設為 0
                    discountCell.textContent = '0';
                }
            } else {
                Discnt = 0; // 非數字時，設為 0
                discountCell.textContent = '0';
            }

            // 動態更新 RBdiscntTotal
            RBdiscntTotal = RBsubTotal * ((100 - Discnt) / 100);
            lastRow.cells[11].textContent = RBdiscntTotal.toFixed(2);
        });
    }
}
