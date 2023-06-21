const fillArray = () => {
  const rows = parseInt(prompt("Enter the number of rows: "));
  const cols = parseInt(prompt("Enter the number of columns: "));

  if (!rows || !cols || rows <= 0 || cols <= 0) {
    return alert("The number of rows and columns must be positive integers!");
  }

  const arr = [];

  for (let i = 0; i < rows; i++) {
    const rowArray = Array.from({ length: cols }, (_, j) => {
      const value = prompt(`Enter a value for the cell [${i}][${j}]: `);
      if (value === null) {
        return alert("Input cancelled by the user!");
      }
      return value;
    });

    arr.push(rowArray);
  }

  return arr;
};

const newArray = fillArray();
console.log(newArray);