let display = document.getElementById('display');

// Ajoute une valeur au display
function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Efface tout
function clearDisplay() {
  display.innerText = '0';
}

// Calcule le résultat
function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Syntaxe Erreur';
  }
}
function calculateResult() {
    try {
      const result = eval(display.innerText);
      if (!isNaN(result)) {
        const history = document.getElementById('history');
        history.innerHTML += `<div>${display.innerText} = ${result}</div>`;
        display.innerText = result;
      } else {
        display.innerText = 'Erreur';
      }
    } catch {
      display.innerText = 'Erreur';
    }
  }
  function deleteLast() {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1); // Supprime le dernier caractère.
    } else {
      display.innerText = '0'; // Réinitialise si un seul caractère reste.
    }
  }
    
