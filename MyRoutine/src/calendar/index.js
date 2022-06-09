// 날짜 클릭 시, alert 형식 todolist 추가 가능
const headerTime = document.querySelector(".real-time");
const currentMonth = document.querySelector(".this-month");
const date = new Date();

const setMonth = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.log(months[date.getMonth()]);
  return months[date.getMonth()];
};

const realTime = () => {
  // 새로 고침 하면 실시간
  // setInterval로 반복해서 넣어주기
  // 노마드코더 모멘텀 넣기 , date 오픈 api
  // 
}
// 실시간 변화가 생기는 시간함수를 만들어주고 넣어줄 것

console.log(setMonth());
currentMonth.textContent = setMonth();
// headerTime.textContent = `${}`
// setMonth();

//
