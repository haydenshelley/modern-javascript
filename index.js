const dayjs = require("dayjs");

let name = "Hayden";
console.log(`${name}'s Birthday`);
console.log(
  dayjs()
    .startOf("year")
    .add(4, "month")
    .add(11, "day")
    .set("year", 1994)
    .format("MM-DD-YYYY")
);

console.log("Today's Date");
console.log(
  dayjs()
    .startOf("year")
    .add(7, "month")
    .add(28, "day")
    .set("year", 2023)
    .format("MM-DD-YYYY")
);

import voca from "voca";
console.log(voca.camelCase("goodbye blue sky"));

const start = ["do", "re", "mi"];
const end = ["la", "ti", "da"];
const scaleFromLiteral = [...start, "fa", "so", ...end];
console.log(scaleFromLiteral);

let nums = [1, 54, 2, 5, 43];
let sum = nums.reduce(function (sum, num) {
  return sum + num;
}, 0);

console.log(sum);
