let equal_pressed = 0;

// Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll('.input-button');

// Refer input, equal, clear, and erase
let input = document.getElementById('input');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');

// Clear input on page load
window.onload = () => {
    input.value = '';
};

// Access each class using forEach
button_input.forEach(button => {
    button.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = '';
            equal_pressed = 0;
        }

        // Display value of each button
        input.value += button.value;
    });
});

// Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    let input_val = input.value;

    try {
        // evaluate user's input
        let solution = eval(input_val);

        if (solution === undefined || isNaN(solution)) {
            alert("Invalid Input!");
            input.value = "";
        } else {
            input.value = solution;
        }

        equal_pressed = 1; // Mark equal_pressed after evaluation
    } catch (err) {
        alert("Invalid Input!");
        input.value = "";
    }
});

// Clear input on 'AC' button click
clear.addEventListener("click", () => {
    input.value = "";
});

// Erase the last character on 'DEL' button click
erase.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});
