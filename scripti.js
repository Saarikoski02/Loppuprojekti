const productContainers = [...document.querySelectorAll('.tuotesäiliö')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((container, i) => {
    let containerWidth = container.offsetWidth; // Kontainerin leveys
    let scrollAmount = containerWidth * 0.25; // Vieritysmäärä yhtä kertaa kohden (90% leveydestä)

    nxtBtn[i].addEventListener('click', () => {
        container.scrollLeft += scrollAmount; // Vieritä oikealle
    });

    preBtn[i].addEventListener('click', () => {
        container.scrollLeft -= scrollAmount; // Vieritä vasemmalle
    });
});
