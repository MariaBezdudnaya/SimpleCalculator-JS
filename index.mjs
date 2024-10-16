let calculationHistory = [];
const outputHistory = document.getElementById("outputHistory");

function formatHistory(history) {
    return history.map(item => {
        return ("---" + `"sum":${item.sum},"difference":${item.difference},"multiplication":${item.multiplication},"division":${item.division},"power":${item.power}`);
    }).join("\n");
}

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
        let division = b !== 0 ? a / b : "dividing by zero is impossible"; // Проверка деления на ноль
        
        let power = Math.abs(a) ** Math.abs(b);
        
        // Добавляем объект в массив и выводим его
        calculationHistory.push({sum, difference, multiplication, division, power});
        console.log(calculationHistory); 
        outputHistory.value = formatHistory(calculationHistory);
    }
}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    calculate();
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    calculationHistory = [];
    outputHistory.value = JSON.stringify(calculationHistory);
});
