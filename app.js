//!  PRINTING ENTERED NUMBERS TO THE CURRENT SCREEN ***

const numbers = document.querySelectorAll(".number button");

let currDisp = document.querySelector(".current");
let preDisp = document.querySelector(".previous");

for (let i in numbers) {
  numbers[i].onclick = () => {
    currDisp.textContent += numbers[i].textContent;
  };
}

//! ------------------------------------------//
//** FIND INDEX OF OPERAOTOR*/
//! -----------------------------------------//

let indexof = 0;
let index = () => {
  let arr = [];
  arr.push(currDisp.textContent.lastIndexOf("+"));
  arr.push(currDisp.textContent.lastIndexOf("-"));
  arr.push(currDisp.textContent.lastIndexOf("*"));
  arr.push(currDisp.textContent.lastIndexOf("/"));
  indexof = Math.max(...arr);
  console.log(indexof);
};

//!  PRINTING ENTERED COMMA TO THE CURRENT SCREEN ***

const comma = document.querySelector("#comma");
comma.onclick = () => {
  index();
  if (currDisp.textContent == 0) {
    currDisp.textContent = "0.";
  }
  if (
    !currDisp.textContent.includes(".", indexof) &&
    (currDisp.textContent.includes("+") ||
      currDisp.textContent.includes("-") ||
      currDisp.textContent.includes("*") ||
      currDisp.textContent.includes("/")) &&
    currDisp.textContent.slice(-1) != "."
  ) {
    currDisp.textContent += ".";
  }
  if (currDisp.textContent.length < 2) {
    currDisp.textContent += ".";
  }
  if (!currDisp.textContent.includes(".")) {
    if (currDisp.textContent.slice(-1).includes(transactions)) {
      currDisp.textContent += "0.";
    } else {
      currDisp.textContent += "0.";
    }
  }
};

//! AC --> DELETED THE CURRENT SCREEN ***

const ac = document.querySelector("#ac");
console.log(ac);
currDisp = document.querySelector(".current");

ac.onclick = () => {
  // preDisp.textContent = "";
  currDisp.textContent = "";
  // currDisp.remove(currDisp);  remove yapınca neden olmadı hocaya sor.
  // currDisp.textContent = currDisp.remove(currDisp.textContent);
};

//!  PRINTING + / - OPERATORS TO THE CURRENT SCREEN ***

const ngtvPstv = document.querySelector("#negative");

currDisp = document.querySelector(".current");

ngtvPstv.onclick = () => {
  if (currDisp.textContent == Number(currDisp.textContent)) {
    currDisp.textContent = 0 - currDisp.textContent;
  }
};

//! % - OPERATOR ***

const percent = document.querySelector("#percent");

currDisp = document.querySelector(".current");

percent.onclick = () => {
  if (currDisp.textContent == Number(currDisp.textContent)) {
    currDisp.textContent = currDisp.textContent / 100;
  }
};

//!  PRINTING ENTERED OPERATORS TO THE CURRENT SCREEN ***
const transactions = document.querySelectorAll(".operators");
currDisp = document.querySelector(".current");

for (let i in transactions) {
  transactions[i].onclick = () => {
    let lastIndex = currDisp.textContent.slice(-1);

    if (lastIndex == "") {
      currDisp.textContent = "";
    } else if (lastIndex == "+") {
      currDisp.textContent += "";
    } else if (lastIndex == "-") {
      currDisp.textContent += "";
    } else if (lastIndex == "/") {
      currDisp.textContent += "";
    } else if (lastIndex == "*") {
      currDisp.textContent += "";
    } else {
      currDisp.textContent += transactions[i].textContent;
    }
  };
}

//! EQUAL - OPERATOR *******
// const equal = document.querySelector(".equal");
// currDisp = document.querySelector(".current");

// equal.onclick = () => {
//   currDisp.textContent = eval(currDisp.textContent);
// };
const equal = document.querySelector(".equal");
// currDisp = document.querySelector(".current");

equal.onclick = () => {
  let lastIndex = currDisp.textContent.slice(-1);
  if (lastIndex == "+") {
    currDisp.textContent = eval(currDisp.textContent.replace("+", ""));
    console.log(currDisp.textContent.replace("+", ""));
  } else if (lastIndex == "-") {
    currDisp.textContent = eval(currDisp.textContent.replace("-", ""));
  } else if (lastIndex == "/") {
    currDisp.textContent = eval(currDisp.textContent.replace("/", ""));
  } else if (lastIndex == "*") {
    currDisp.textContent = eval(currDisp.textContent.replace("*", ""));
  } else if (lastIndex == Number(lastIndex)) {
    let preDisp = document.querySelector(".previous");
    preDisp.textContent = eval(currDisp.textContent);
    currDisp.textContent = "";
    // for (let i in numbers) {
    //   numbers[i].onclick = () => {};
    //   currDisp.textContent = numbers[i].textContent;
    // }
  } else {
    preDisp.textContent = eval(currDisp.textContent);
    currDisp.textContent = "";
  }
};

// let num = document.querySelectorAll(".number button");

// for (let i in num) {
//   num[i].onclick = () => {
//     currDisp.textContent == num[i].textContent;
//   };
//   console.log(num[i].textContent);
// }
