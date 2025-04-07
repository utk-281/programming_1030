function convert12to24(time) {
  let [timePart, period] = time.split(" ");
  let [hrs, mins] = timePart.split(":");
  //   console.log(hrs, mins);

  if (period == "PM" && hrs !== "12") {
    // hrs = parseInt(hrs) + 12;
    hrs = Number(hrs) + 12;
  } else if (period == "AM" && hrs === "12") {
    hrs = "00";
  }
  console.log(`${hrs}:${mins}`);
}

convert12to24("01:30 PM");
convert12to24("12:30 AM");
convert12to24("12:30 PM");
convert12to24("02:30 PM");
convert12to24("05:30 PM");
