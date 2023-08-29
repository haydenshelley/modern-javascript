console.log("My Birthday");
console.log(
  dayjs()
    .startOf("year")
    .add(4, "month")
    .add(11, "day")
    .set("year", 1994)
    .format("MM-DD-YYYY")
);
