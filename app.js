  // 🔸 Variables
    let count = 0; // Initial count value
    const display = document.getElementById("count"); // Display element

    // 🔹 Functions
    function increment() { // Increment count by 1
      count++;                  // Increment the count
      display.innerText = count; // Update display
    }

    function decrement() {  // Decrement count by 1
      count--;           // Decrement the count
      display.innerText = count; // Update display
    }

    function reset() {  // Reset count to 0
      count = 0;         // Reset the count
      display.innerText = count; // Update display
    }