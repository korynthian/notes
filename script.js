// select text
const textElement = document.querySelector('.text');

function updateDisplay() {
    const storedKeys = localStorage.getItem('keys') || '';
    textElement.textContent = storedKeys;
}

// key event
document.addEventListener('keydown', async (event) => {
    const key = event.key; // Get the pressed key
    let storedKeys = localStorage.getItem('keys') || '';

    if (event.ctrlKey && key === 'v') {
        console.log('You pressed Ctrl + V');
        try {
            ;
            storedKeys += clipboardText; // add clipboard stuff
        } catch (error) {
            alert('Failed to read clipboard content:', error);
            console.error('Failed to read clipboard content:', error);
        }
    } if (event.ctrlKey && key === 'z') {
        console.log('You pressed Ctrl + Z');
        // add undo later!!!
    } else if (event.ctrlKey && key === 'c') {
        // Do nothing
    } else if (key.length === 1) {
        storedKeys += key;
    } else if (key === 'Backspace') {
        storedKeys = storedKeys.slice(0, -1);
    } else if (key.startsWith('F') && !isNaN(key.slice(1))) {
        // F Key
        alert(`You pressed ${key}`);
    } else {
        console.log(`Special key pressed: ${key}`);
    }

    // Save to localStorage
    localStorage.setItem('keys', storedKeys);
    updateDisplay();
});

updateDisplay();