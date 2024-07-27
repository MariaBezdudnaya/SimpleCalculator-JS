let calculationHistory = [];
const outputHistory = document.getElementById("outputHistory");
function calculate() {
    // Получаем ввод от пользователя
    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    
   // Проверяем корректность ввода
   if (isNaN(a) || isNaN(b)) { 
        alert("Enter correct values");
        calculate();
    } else { 
        // Выполняем вычисления и создаём объект
        let sum = a + b;
        let difference = a - b;
        let multiplication = a * b;
        let division = a / b;
            if (b == 0) {
                division = "dividing by zero is impossible";
            }
        
        let power = Math.abs(a) ** Math.abs(b);
        
        // Добавляем объект в массив и выводим его
        calculationHistory.push({sum, difference, multiplication, division, power});
        console.log(calculationHistory); 
        outputHistory.value = JSON.stringify(calculationHistory);
    }
}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    calculate();
});

// const resetBtn = document.getElementById("resetBtn");
// resetBtn.addEventListener("click", () => {
//     let newResult = calculate();
//     calculationHistory.push(newResult);
//     outputHistory.value = JSON.stringify(calculationHistory);
// });

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {1
    calculationHistory = [];
    outputHistory.value = JSON.stringify(calculationHistory);
});
