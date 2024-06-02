/* function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
  
    alert( message );
  }
  
  showMessage(); // Привет, я JavaScript! */



 /*  let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName );
 */



function mul(n, m) {
    return n + m;
  }
  
  let result = mul(1, 2);
  alert( result );