// Function to convert text to camelCase
function toCamelCase(input) {
    return input
        .split(/[\s_]+/) // Split by spaces or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join back into a single string
}

// Function to convert text to snake_case
function toSnakeCase(input) {
    return input
        .toLowerCase() // Convert entire string to lowercase
        .replace(/[\s]+/g, '_') // Replace spaces with underscores
        .replace(/[]+/g, '') // Replace multiple underscores with a single underscore
        .trim(); // Remove leading/trailing whitespace
}

// Function to convert text to PascalCase
function toPascalCase(input) {
    return input
        .split(/[\s_]+/) // Split by spaces or underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
        .join(''); // Join back into a single string
}

// Function to handle text conversion based on selected format
function convertText(format) {
    const inputText = document.getElementById('inputText').value;
    let convertedText;

    switch (format) {
        case 'camelCase':
            convertedText = toCamelCase(inputText);
            break;
        case 'snake_case':
            convertedText = toSnakeCase(inputText);
            break;
        case 'PascalCase':
            convertedText = toPascalCase(inputText);
            break;
        default:
            convertedText = inputText;
    }

    document.getElementById('outputText').innerText = convertedText;
}