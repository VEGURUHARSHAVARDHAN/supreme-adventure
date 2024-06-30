document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let currentInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === 'C') {
          currentInput = '';
          display.textContent = '0';
        } else if (value === '=') {
          try {
            currentInput = eval(currentInput).toString();
          } catch {
            currentInput = 'Error';
          }
          display.textContent = currentInput;
        } else {
          if (currentInput === 'Error') currentInput = '';
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });
  });
  