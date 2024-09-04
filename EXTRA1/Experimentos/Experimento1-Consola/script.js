const codeInput = document.getElementById('codeInput');
const output = document.getElementById('output');
const executeButton = document.getElementById('executeButton');
const clearButton = document.getElementById('clearButton');
let commandHistory = [];
let historyIndex = -1;

// Función para imprimir los diferentes tipos de mensajes en la consola
const printMessage = (type, ...args) => {
    const message = document.createElement('div');
    message.className = type;
    message.textContent = args.join(' ');
    output.appendChild(message);
    output.scrollTop = output.scrollHeight; // Auto-scroll
};

// Redirigir las funciones de console
const originalConsole = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    table: console.table
};

console.log = (...args) => printMessage('log', ...args);
console.error = (...args) => printMessage('error', ...args);
console.warn = (...args) => printMessage('warn', ...args);
console.info = (...args) => printMessage('info', ...args);
console.table = (data) => {
    const tableString = JSON.stringify(data, null, 2);
    printMessage('table', tableString);
};

executeButton.addEventListener('click', () => {
    const code = codeInput.value;
    if (code.trim()) {
        commandHistory.push(code);
        historyIndex = commandHistory.length;
    }
    try {
        eval(code);
    } catch (error) {
        printMessage('error', 'Error:', error.message);
    } finally {
        codeInput.value = '';
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
        console.table = originalConsole.table;
    }
});

clearButton.addEventListener('click', () => {
    output.textContent = '';
});

codeInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (e.key === 'ArrowUp') {
            if (historyIndex > 0) historyIndex--;
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) historyIndex++;
            else historyIndex = commandHistory.length;
        }
        codeInput.value = commandHistory[historyIndex] || '';
        e.preventDefault();
    }
});
