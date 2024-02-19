const lists = Array.from(document.querySelectorAll(".list"));/* Transforma os itens obtidos em um */
const arrowSymbol = document.querySelector(".arrow");

lists.map((list) => {
    return list.addEventListener("click", (e) => {
        arrowSymbol.classList.remove('bxs-right-arrow');
    });
});
