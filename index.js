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

import voca from "voca";
console.log(voca.camelCase("goodbye blue sky"));

let nums = [1, 54, 2, 5, 43];
let sum = nums.reduce((sum, num) => sum + num, 0);
console.log(sum);

let underTen = nums.filter((num) => num < 10);
console.log(underTen);

let timesTen = nums.map((num) => num * 10);
console.log(timesTen);
