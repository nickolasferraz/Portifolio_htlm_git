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


let contador = 0;
    const box = document.querySelector('.container');
    const imagens = document.querySelectorAll('.container img'); // Seleciona todas as imagens

    setInterval(() => {
        contador++;
        if (contador >= imagens.length) {
            contador = 0; // Reinicia o contador ao chegar ao fim
        }
        // Ajusta o translateX para mostrar uma imagem de cada vez
        box.style.transform = `translateX(${-contador * 1250}px)`;
    }, 2000);