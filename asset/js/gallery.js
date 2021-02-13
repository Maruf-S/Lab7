$('.carousel').carousel({
    interval: 50000
});
$('.carousel').on('slid.bs.carousel', function (e) {
    ChangeThePicture();
});
async function ChangeThePicture() {

    let response = await fetch('https://picsum.photos/1280/720');
    let data = await response.url;
    let activeImage = document.querySelector(".carousel-item.active").querySelector("img");
    // console.log(activeImage);
    activeImage.src = data;
}