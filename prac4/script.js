document.addEventListener("DOMContentLoaded", () => {
    // Знаходимо всі клавіші на віртуальній клавіатурі
    const keys = document.querySelectorAll(".key");

    // Функція, яка додає клас активної клавіші
    function activateKey(keyElement) {
        if (keyElement) {
            keyElement.classList.add("active");
            setTimeout(() => keyElement.classList.remove("active"), 100); // Знімає клас після короткої затримки
        }
    }

    // Слухач для натискання фізичних клавіш на клавіатурі
    document.addEventListener("keydown", (event) => {
        const key = event.key.toUpperCase();
        let keyElement;

        // Знаходимо відповідний елемент для кожного випадку
        if (event.key === " ") keyElement = document.querySelector(".key.space"); // 
        else if (event.key === "Enter") keyElement = document.querySelector(".key.enter"); // 
        else if (event.key === "Backspace") keyElement = document.querySelector(".key.backspace"); // 
        else if (event.key === "Tab") keyElement = document.querySelector(".key.tab"); // 
        else if (event.key === "CapsLock") keyElement = document.querySelector(".key.capslock"); // 
        else if (event.key === "Shift") keyElement = document.querySelector(".key.shift"); // 
        else if (event.key === "Control") keyElement = document.querySelector(".key.ctrl"); // 
        else if (event.key === "Alt") keyElement = document.querySelector(".key.alt"); // Alt
        else if (event.key === "ArrowUp") keyElement = document.querySelector(".key.up-arrow"); // Стрілка вгору
        else if (event.key === "ArrowDown") keyElement = document.querySelector(".key.down-arrow"); // Стрілка вниз
        else if (event.key === "ArrowLeft") keyElement = document.querySelector(".key.left-arrow"); // Стрілка вліво
        else if (event.key === "ArrowRight") keyElement = document.querySelector(".key.right-arrow"); // Стрілка вправо
        else if (!isNaN(parseInt(key))) keyElement = document.querySelector(`.key.number:contains('${key}')`); // Цифрові клавіші
        else keyElement = Array.from(keys).find((el) => el.textContent.trim() === key); // Інші клавіші

        // Активуємо відповідну клавішу
        activateKey(keyElement);
    });

    keys.forEach((key) => {
        key.addEventListener("click", () => {
            activateKey(key);
        });
    });
});
