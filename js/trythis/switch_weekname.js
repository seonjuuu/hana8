// function getWeekName(date) {
//   //if (date == undefined) date = new Date();
//   date = date ?? new Date(); //false라면 오른쪽
//   console.log("🚀 ~ getWeekNamef ~ date:", date);
//   let weekname;
//   switch (date.getDay()) {
//     case 0:
//       weekname = "일";
//       break;
//     case 1:
//       weekname = "월";
//       break;
//     case 2:
//       weekname = "화";
//       break;
//     case 3:
//       weekname = "수";
//       break;
//     case 4:
//       weekname = "목";
//       break;
//     case 5:
//       weekname = "금";
//       break;
//     case 6:
//       weekname = "토";
//       break;
//   }
//   console.log(`오늘은 ${weekname}요일 입니다.`);
// }
// getWeekName();

// const WEEKNAMES = "일월화수목금토";

// getWeekName();
// getWeekName(new Date());

// function getWeekName(date) {
//   const weekName = WEEKNAMES[(date ?? new Date()).getDay()];
//   console.log(`오늘은 ${weekname}요일 입니다.`);
// }

// const getWN = (date) => WEEKNAMES[date ?? new Date().getDay()];
