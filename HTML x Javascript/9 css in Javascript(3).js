// css in JavaScript(3)

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    /*if (h1.classList.contains(clickedClass)) { // classList.contains()는 classList에 해당 클래스가 있는지 확인하는 메소드
        h1.classList.remove(clickedClass); // classList.remove()는 classList에 해당 클래스를 제거하는 메소드
    } else {
        h1.classList.add(clickedClass); // classList.add()는 classList에 해당 클래스를 추가하는 메소드
    }*/

    // toggle function 
    // toggle은 classList에 해당 클래스가 있는지 확인해서 있으면 제거하고 없으면 추가하는 메소드
    // toggle은 위의 코드를 한 줄로 줄일 수 있다.
    
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
