import "./alertToCart.sass";

export const alertOpen = (message) => {
    const alert = document.querySelector(".alertToCart");
    alert.innerHTML = message;

    alert.style.display = "block";
    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);
}