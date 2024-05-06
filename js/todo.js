const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 toDos 배열을 저장 (문자열로 변환)
}

function deleteToDo(event) {
  // 삭제 버튼을 누르면 실행되는 함수 event = 이벤트 객체
  const li = event.target.parentElement; // button의 부모인 li를 찾아서
  li.remove(); // 삭제
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 이벤트의 기본 동작을 막음 (새로고침)
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo); // toDos 배열에 newToDo를 추가
  
  paintToDo(newToDo);
  saveToDos(); // toDos 배열을 localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에 저장된 todos를 가져옴

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // 가져온 todos를 객체로 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 배열의 각 요소에 대해 paintToDo 함수 실행
}
