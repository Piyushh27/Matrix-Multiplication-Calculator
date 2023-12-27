function multiplyMatrices() {

    const rowsA = parseInt(document.getElementById('rowsA').value, 10);
    const colsA = parseInt(document.getElementById('colsA').value, 10);
    const rowsB = parseInt(document.getElementById('rowsB').value, 10);
    const colsB = parseInt(document.getElementById('colsB').value, 10);

    // Validate dimensions
    if (isNaN(rowsA) || isNaN(colsA) || isNaN(rowsB) || isNaN(colsB)) {
        alert('Please enter valid dimensions for matrices.');
        return;
    }

    // Get matrixes
    const matrixA = parseMatrix(document.getElementById('matrixA').value, rowsA, colsA);
    const matrixB = parseMatrix(document.getElementById('matrixB').value, rowsB, colsB);

    // Check multiplication
    if (colsA !== rowsB) {
        alert('Invalid matrices for multiplication. Number of columns in Matrix A must be equal to the number of rows in Matrix B.');
        return;
    }

    const result = multiply(matrixA, matrixB);

    // result
    document.getElementById('result').value = stringifyMatrix(result);
}

function parseMatrix(input, rows, cols) {
    // Parsing
    const lines = input.split('\n');
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = lines[i].split(',').map(Number);
    }
    return matrix;
}

function multiply(a, b) {
    
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < a[0].length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}
function stringifyMatrix(matrix) {
    // Convert 2D array
    return matrix.map(row => row.join(', ')).join('\n');
}