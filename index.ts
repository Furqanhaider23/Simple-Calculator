#! /usr/bin/env node

import inquirer from "inquirer";

// PRINTING A WELCOME MESSAGE 

console.log("\n\t WELCOME TO \ 'CODE WITH FURQAN HAIDER\'- CLI SIMPLE-CALCULATOR\n")


// ASKING QUESTION FROM USER THROUGHT INQUIRER

const answer = await inquirer.prompt([
  { message: "Enter YOUR FIRST NUMBER", type: "number", name: "firstnumber" },

  { message: "Enter YOUR SECOND NUMBER", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPILACTION", "DIVISION"],
  },
]);

// CONDITION STATEMENT

if (answer.operator === "ADDITION") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "MULTIPILACTION") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("PLEASE SELECT VALID OPERATOR");



}

