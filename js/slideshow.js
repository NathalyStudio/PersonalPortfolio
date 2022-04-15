const imgArray = [
    '../img/First Proyect.png',
    '../img/card ecommerce fisrt project.jpg"',
    '../img/hero pastry tzuzul.png'
]
const img = document.querySelector('#slide')
    //const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i + 1 : 0
}

const interval = () => {
    setInterval(slideShow, 1000)
}