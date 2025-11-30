Table Data Calculator
=====================

A flexible JavaScript utility for calculating totals from HTML tables with date filtering. Perfect for financial data, expense tracking, or any tabular data analysis in web applications.

Features
--------

-   📅 Date-based filtering - Calculate totals for specific dates

-   💰 Flexible column mapping - Configure which columns to use for amounts and expenses

-   🔧 Customizable options - Support for different currencies and display preferences

-   📊 Multiple calculations - Process single dates or multiple dates at once

-   🔍 Table analysis - Auto-detect table structure and column indexes

-   📈 Comprehensive reporting - Totals, averages, and detailed breakdowns

Installation
------------

Simply copy the JavaScript code into your browser's developer console, or include it in your web project.

Quick Start
-----------

### Basic Usage

```javasript
// Calculate totals for a specific date
calculateTableTotals('03/12/2025');
```

### Analyze Table Structure
```
javascript

// First, examine your table structure
analyzeTableStructure();
```

### Advanced Usage
```
javascript

// Calculate with custom column mapping and detailed output
calculateTableTotals('03/12/2025', {
    dateColumn: 12,
    amountColumn: 6,
    expenseColumn1: 10,
    expenseColumn2: 11,
    currencySymbol: '£',
    showDetails: true
});
```
### Multiple Dates
```
javascript

// Process multiple dates at once
calculateMultipleDates(['01/12/2025', '02/12/2025', '03/12/2025']);
```
Configuration Options
---------------------

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `dateColumn` | number | 12 | Column index for date filtering |
| `amountColumn` | number | 6 | Column index for main amount |
| `expenseColumn1` | number | 10 | First expense column index |
| `expenseColumn2` | number | 11 | Second expense column index |
| `currencySymbol` | string | '£' | Currency symbol to remove during parsing |
| `showDetails` | boolean | false | Show individual row breakdown |

API Reference
-------------

### `calculateTableTotals(targetDate, options)`

Calculates totals for a specific date.

Parameters:

-   `targetDate` (string): Date in DD/MM/YYYY format

-   `options` (object): Configuration options (optional)

Returns: Object with calculation results or null if no data found

### `calculateMultipleDates(dates, options)`

Process multiple dates in one call.

Parameters:

-   `dates` (array): Array of date strings

-   `options` (object): Configuration options (optional)

Returns: Array of result objects

### `analyzeTableStructure()`

Analyzes the current table structure and displays column information.

Returns: Object with table structure information

Output Example
--------------
```
text

📅 Calculating totals for: 03/12/2025

=== RESULTS FOR 03/12/2025 ===
Total Rows: 15
💰 Total Amount: £245.67
💸 Total Expenses: £45.23
📈 Net Total: £200.44
📊 Averages:
   Amount: £16.38
   Expenses: £3.02
   Net: £13.36
```
Use Cases
---------

-   Financial reporting - Calculate daily totals from transaction tables

-   Expense tracking - Analyze spending patterns across dates

-   Sales data - Process daily sales figures from HTML tables

-   Project management - Track time or resource allocation

-   Data analysis - Any tabular data requiring date-based aggregation

Browser Compatibility
---------------------

Works in all modern browsers with basic JavaScript support. Designed to run in:

-   Chrome DevTools Console

-   Firefox Developer Tools

-   Safari Web Inspector

-   Edge Developer Tools

Contributing
------------

Feel free to submit issues and enhancement requests! This is a generic utility that can be extended for various table structures and calculation needs.

License
-------

MIT License - feel free to use in personal and commercial projects.

* * * * *

Note: This is a client-side JavaScript utility designed to work with existing HTML tables in web pages.
