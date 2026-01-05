const ClicBut = document.querySelectorAll(".button");
const Scrn = document.querySelector(".screen");
let expression = "";

ClicBut.forEach((button) => {
  button.addEventListener("click", (e) => {
    const act = e.target.dataset.number;
    if (act == "clr") {
      expression = " ";
      Scrn.innerHTML = " ";
      return;
    }
    if (act == "rslt") {
      try {
        let ans = eval(Scrn.innerHTML);
        Scrn.innerHTML = ans;
        expression = " ";
        return;
      } catch (error) {
        Scrn.innerHTML = "Error";
        expression = " ";
      }
    } else {
      CalcWork(e);
    }
  });
});

function CalcWork(e) {
  const operator = ["+", "-", "*", "/"];
  const value = e.target.dataset.number;
  let lastchar = expression.slice(-1);
  if (operator.includes(lastchar) && operator.includes(value)) {
    expression = expression.slice(0, -1) + value;
    Scrn.innerHTML = expression;
  } else {
    expression += value;
    Scrn.innerHTML = expression;
  }
}

// function CalcWork(e) {
//   const operators = ["+", "-", "*", "/"];
//   const value = e.target.dataset.number;
//   const lastChar = expression.slice(-1);

//   // 1️⃣ If value is a NUMBER → always append
//   if (!operators.includes(value)) {
//     expression += value;
//     console.log(expression);
//     return;
//   }

//   // 2️⃣ If expression empty → don't allow operator
//   if (expression === "") return;

//   // 3️⃣ If last char is operator → replace it
//   if (operators.includes(lastChar)) {
//     expression = expression.slice(0, -1) + value;
//   }
//   // 4️⃣ Otherwise append operator
//   else {
//     expression += value;
//   }

//   console.log(expression);THE DEMON EMPRESS IN MY ROOM - REVIEW MANHWA
// }
