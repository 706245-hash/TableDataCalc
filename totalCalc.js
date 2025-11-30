// Generic Table Data Calculator
// Calculates totals from HTML tables with date filtering

function calculateTableTotals(targetDate, options = {}) {
    const {
        dateColumn = 12,        // Column index for date filtering
        amountColumn = 6,       // Column index for main amount
        expenseColumn1 = 10,    // First expense column
        expenseColumn2 = 11,    // Second expense column
        currencySymbol = '£',   // Currency symbol to remove
        showDetails = false     // Show individual row breakdown
    } = options;

    let totalAmount = 0;
    let totalExpenses = 0;
    let totalNet = 0;
    let rowCount = 0;

    // Validate date format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(targetDate)) {
        console.log('❌ Please use DD/MM/YYYY format');
        return null;
    }

    console.log(`📅 Calculating totals for: ${targetDate}\n`);

    const rows = document.querySelectorAll('tr');
    rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length > Math.max(dateColumn, amountColumn, expenseColumn1, expenseColumn2)) {
            const rowDate = cells[dateColumn].textContent.trim();
            
            if (rowDate === targetDate) {
                // Parse values
                const amountText = cells[amountColumn].textContent.trim();
                const expense1Text = cells[expenseColumn1].textContent.trim();
                const expense2Text = cells[expenseColumn2].textContent.trim();
                
                const amount = parseFloat(amountText.replace(currencySymbol, '')) || 0;
                const expense1 = parseFloat(expense1Text) || 0;
                const expense2 = parseFloat(expense2Text) || 0;
                
                // Calculate row totals
                const rowExpenses = expense1 + expense2;
                const rowNet = amount - rowExpenses;
                
                // Add to totals
                totalAmount += amount;
                totalExpenses += rowExpenses;
                totalNet += rowNet;
                rowCount++;

                if (showDetails) {
                    console.log(`Row ${cells[0].textContent}:`);
                    console.log(`  Amount: ${currencySymbol}${amount.toFixed(2)}`);
                    console.log(`  Expenses: ${currencySymbol}${expense1.toFixed(2)} + ${currencySymbol}${expense2.toFixed(2)} = ${currencySymbol}${rowExpenses.toFixed(2)}`);
                    console.log(`  Net: ${currencySymbol}${amount.toFixed(2)} - ${currencySymbol}${rowExpenses.toFixed(2)} = ${currencySymbol}${rowNet.toFixed(2)}`);
                    console.log('---');
                }
            }
        }
    });

    if (rowCount === 0) {
        console.log(`❌ No data found for: ${targetDate}`);
        return null;
    }

    // Display results
    console.log(`=== RESULTS FOR ${targetDate} ===`);
    console.log(`Total Rows: ${rowCount}`);
    console.log(`💰 Total Amount: ${currencySymbol}${totalAmount.toFixed(2)}`);
    console.log(`💸 Total Expenses: ${currencySymbol}${totalExpenses.toFixed(2)}`);
    console.log(`📈 Net Total: ${currencySymbol}${totalNet.toFixed(2)}`);
    console.log(`📊 Averages:`);
    console.log(`   Amount: ${currencySymbol}${(totalAmount/rowCount).toFixed(2)}`);
    console.log(`   Expenses: ${currencySymbol}${(totalExpenses/rowCount).toFixed(2)}`);
    console.log(`   Net: ${currencySymbol}${(totalNet/rowCount).toFixed(2)}`);

    return {
        date: targetDate,
        totalAmount,
        totalExpenses,
        totalNet,
        rowCount,
        averageAmount: totalAmount / rowCount,
        averageExpenses: totalExpenses / rowCount,
        averageNet: totalNet / rowCount
    };
}

// Multiple date calculator
function calculateMultipleDates(dates, options = {}) {
    console.log('🧮 CALCULATING FOR MULTIPLE DATES\n');
    const results = [];
    
    dates.forEach(date => {
        const result = calculateTableTotals(date, options);
        if (result) results.push(result);
        console.log('\n' + '='.repeat(50) + '\n');
    });
    
    return results;
}

// Auto-detect table structure
function analyzeTableStructure() {
    console.log('🔍 Analyzing table structure...');
    
    const headerRow = document.querySelector('thead tr');
    if (headerRow) {
        const headers = headerRow.querySelectorAll('th');
        console.log('Table columns:');
        headers.forEach((header, index) => {
            console.log(`  [${index}]: "${header.textContent.trim()}"`);
        });
    }
    
    // Check first data row
    const firstDataRow = document.querySelector('tbody tr');
    if (firstDataRow) {
        const cells = firstDataRow.querySelectorAll('td');
        console.log(`\nFirst row has ${cells.length} columns`);
    }
    
    return {
        totalColumns: headerRow ? headerRow.querySelectorAll('th').length : 0,
        sampleData: firstDataRow ? Array.from(firstDataRow.querySelectorAll('td')).map(cell => cell.textContent.trim()) : []
    };
}

// USAGE EXAMPLES:

// Basic usage with default columns
// calculateTableTotals('03/12/2025');

// With detailed output
// calculateTableTotals('03/12/2025', { showDetails: true });

// With custom column mapping
// calculateTableTotals('03/12/2025', {
//     dateColumn: 11,
//     amountColumn: 5,
//     expenseColumn1: 9,
//     expenseColumn2: 10,
//     currencySymbol: '$'
// });

// Multiple dates
// calculateMultipleDates(['01/12/2025', '02/12/2025', '03/12/2025']);

// Analyze table first
// analyzeTableStructure();
