const fillArray = () => {
  const rows = +prompt("Enter the number of rows: ");
  const cols = +prompt("Enter the number of columns: ");

  if (Number.isNaN(rows) || !Number.isInteger(rows) || rows <= 0 || Number.isNaN(cols) || !Number.isInteger(cols) || cols <= 0)  {
    alert("The number of rows and columns must be positive integers!");
    return;
  }

  const arr = [];
  
  for (let i = 0; i < rows; i++) {
    const rowArray = [];
    
    for (let j = 0; j < cols; j++) {
      const value = prompt(`Enter a value for the cell [${i}][${j}]: `);

      if (value === null) {
        alert ("Input cancelled by the user!");
        return;
      }

      rowArray.push(value);
    }
    
    arr.push(rowArray);
  }
  
  return arr;
};

const newArray = fillArray();
console.log(newArray);