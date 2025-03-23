const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

// Recursive function to convert decimal to binary
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Function to show the animation for the call stack
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  // Set the final result of decimalToBinary(5) after animation completes
  setTimeout(() => {
    result.textContent = decimalToBinary(5); // Display binary result for 5 after animation
  }, 20000); // Adjust this based on the animation duration
};

// Function to check the user input and handle conversion
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();  // Show animation for 5
    return;
  }

  result.textContent = decimalToBinary(inputInt); // Display the binary result for other inputs
  numberInput.value = "";
};

// Event listener for the Convert button
convertBtn.addEventListener("click", checkUserInput);

// Event listener for the Enter key
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
