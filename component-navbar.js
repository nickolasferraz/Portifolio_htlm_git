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