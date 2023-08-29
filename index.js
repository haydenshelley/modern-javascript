const dayjs = require("dayjs");

console.log("My Birthday");
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
console.log(voca.kebabCase("goodbye blue sky")); // => 'goodbye-blue-sky'

console.log(voca.trim(" Hello World! "));
console.log(voca.sprintf("%d red %s", 3, "apples"));
