// 클래스를 활용하기 위해 상수 만들어주기
const rightBtn = document.querySelector(".btn-start");
const leftBtn = document.querySelector(".btn-reset");
const screen = document.querySelector(".screen");
const lapsCount = document.querySelector(".lapsCount");
// formatTime 함수에 사용되는 다항연산자를 이용해
let interval; //setInterval 이용
let lapTime = 0;
let centisecond = 0; // 초기 번호
let lapNum = 1;

// 정수부분만 화면에 나타내기
const formatTime = (time) => {
  let formattedString = "";
  const formatString = (num) => (num < 10 ? "0" + num : num);
  const min = parseInt(time / 6000);
  const sec = parseInt((time - 6000 * min) / 100);
  const centisec = time % 100;
  formattedString = `${formatString(min)} : ${formatString(sec)} : ${formatString(centisec)}`;
  return formattedString;
};
// 화면에 나타나도록 클래스에 넣어주기
const updateTime = () => {
  screen.innerText = formatTime(centisecond);
};
// 시작 버튼 클릭 시 setInterval을 통해 센티세컨드 올리기,
// clearInterval이 어떤 것을 멈추게 하는지 알기 위해 interval 지정
const stopWatchStart = () => {
  interval = setInterval(() => {
    ++centisecond;
    updateTime();
  }, 10);
};
// resetBtn 버튼 누를 시, 초기화, 초기화 화면에 뿌리기
const resetBtn = () => {
  centisecond = 0;
  updateTime();
  lapsCount.innerHTML = "";
  lapNum = 1;
  lapTime = 0;
};

// 랩스 버튼 클릭 시, 당시 시간
const lapsBtn = () => {
  const li = document.createElement("li");
  li.dataset.id = centisecond - lapTime;
  li.className = "lapsLi";
  const lapsView = lapsCount.appendChild(li);
  const lapsLiList = document.querySelectorAll(".lapsLi");

  const arr = [...lapsLiList].sort((a, b) => {
    return a.dataset.id - b.dataset.id;
  });

  arr.forEach((elem, index) => {
    elem.classList.remove("bbb");
    elem.classList.remove("aaa");
    if (index === 0) {
      elem.classList.add("aaa");
    }
    if (index === arr.length - 1) {
      elem.classList.add("bbb");
    }
  });

  lapsView.innerText = `Laps ${lapNum} :  ${formatTime(centisecond - lapTime)}`;
  lapNum += 1;
  lapTime = centisecond;
};
// 시작 버튼 클릭 시 동작하는 이벤트 정리
rightBtn.addEventListener("click", () => {
  if (rightBtn.innerText === "시작") {
    rightBtn.innerText = "중지";
    leftBtn.innerText = "랩스";
    stopWatchStart();
  } else if (rightBtn.innerText === "중지") {
    rightBtn.innerText = "시작";
    leftBtn.innerText = "리셋";
    clearInterval(interval);
  }
});
// 리셋 버튼과 랩스 버튼
leftBtn.addEventListener("click", () => {
  // lapsCount 내에 li 태그 삽입
  if (leftBtn.innerText === "리셋") {
    resetBtn();
  } else if (leftBtn.innerText === "랩스") {
    lapsBtn();
  }
});

//spacebar stop, start
document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    e.preventDefault();
    if (rightBtn.innerText === "시작") {
      rightBtn.innerText = "중지";
      leftBtn.innerText = "랩스";
      stopWatchStart();
    } else if (rightBtn.innerText === "중지") {
      rightBtn.innerText = "시작";
      leftBtn.innerText = "리셋";
      clearInterval(interval);
    }
  }
});

//longest time, shorten time visualize
