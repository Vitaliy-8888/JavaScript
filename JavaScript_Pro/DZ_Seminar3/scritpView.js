const products = document.querySelector('.products');

for (let i = 0; i < localStorage.length; i++) {
    let newEl = document.createElement("li");
    newEl.classList.add("li" + i);
    newEl.textContent = `Продукт: ${localStorage.key(i)}`;
    products.appendChild(newEl);

    let newBtn = document.createElement("button");
    newBtn.classList.add("btn" + i);
    newBtn.textContent = "показать отзыв";
    products.appendChild(newBtn);

    let newBtnAll = document.querySelector('.btn' + i);

    newBtnAll.addEventListener("click", () => {
        newEl.textContent = `Продукт: ${localStorage.key(i)} - Описание: ${localStorage.getItem(localStorage.key(i))}`;
        newBtn.textContent = "скрыть отзыв"; // доработать

        newBtnAll.addEventListener("click", () => {
            location.reload();
        })

        let newBtnViem = document.createElement("button");
        newBtnViem.classList.add("btnViem" + i);
        newBtnViem.textContent = "удалить продукт";
        newEl.appendChild(newBtnViem);

        let newBtnViemAll = document.querySelector('.btnViem' + i);

        newBtnViemAll.addEventListener("click", () => {
            localStorage.removeItem(localStorage.key(i));
            location.reload();
        })
    })
}