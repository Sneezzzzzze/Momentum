const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  // String : 숫자를 문자로 변환
  // padStart : 문자열의 길이가 부족할 때 앞에 문자를 채워줌
  // padEnd : 문자열의 길이가 부족할 때 뒤에 문자를 채워줌
  // padStart(2, "0") : 2자리 수가 안되면 앞에 0 을 붙여줌

}
getClock();
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행

// setInterval(sayHello, 5000); // 5초마다 sayHello 함수 실행
// setTimeout(sayHello, 5000); // 5초 후에 sayHello 함수 실행
