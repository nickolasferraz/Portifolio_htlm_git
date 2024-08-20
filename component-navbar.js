const navbar= document.querySelector('.nav_bar');
let header=document.createElement('nav');
header.innerHTML=`
    <ul class="nav-list">
        <li><button>Home</button></li>
        <li><button>Ingressos</button></li>
        <li><button>Contato</button></li>
        <li><button>Imagens</button></li>
        <li><button>Programação</button></li>
    </ul>
`
navbar.appendChild(header);


let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todas as imagens
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Volta ao primeiro slide se necessário
    slides[slideIndex - 1].style.display = "block"; // Mostra a imagem atual
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}

showSlides(); // Inicializa o carrossel