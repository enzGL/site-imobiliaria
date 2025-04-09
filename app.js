function fnIdiomaIngles() {
    document.getElementById("navbar-inicial").innerText = "Home"
    document.getElementById("navbar-imoveis").innerText = "Properties"
    document.getElementById("navbar-sobre").innerText = "About"
    document.getElementById("navbar-contato").innerText = "Contact"
    document.getElementById("hero-tx1").innerText = "Find your dream home"
    document.getElementById("hero-tx2").innerText = "Explore our wide range of properties and find the perfect home for you."
    document.getElementById("hero-tx3").innerText = "Search for properties"
    document.getElementById("hero-tx4").innerText = "Learn More"
    document.getElementById("contact-txt1").innerText = "Get in touch with us today!"
    document.getElementById("contact-txt2").innerText = "Contact Us"
    document.getElementById("contact-txt3").innerText = "Phone"
    document.getElementById("contact-txt4").innerText = "Office"
    document.getElementById("footer-txt1").innerText = "Subscribe to our newsletter for the latest updates on new features and product releases."
    document.getElementById("footer-txt2").innerText = "Subscribe"
    document.getElementById("rodape").innerText = "© 2025 Enzo Lanzi. All rights reserved."
}

function fnIdiomaPtBr() {
    document.getElementById("navbar-inicial").innerText = "Inicial"
    document.getElementById("navbar-imoveis").innerText = "Imóveis"
    document.getElementById("navbar-sobre").innerText = "Sobre nós"
    document.getElementById("navbar-contato").innerText = "Contato"
    document.getElementById("hero-tx1").innerText = "Encontre a casa dos seus sonhos"
    document.getElementById("hero-tx2").innerText = "Explore nossa ampla variedade de imóveis e encontre a casa perfeita para você."
    document.getElementById("hero-tx3").innerText = "Pesquise Imóveis"
    document.getElementById("hero-tx4").innerText = "Saiba Mais"
    document.getElementById("contact-txt1").innerText = "Entre em contato conosco hoje mesmo!"
    document.getElementById("contact-txt2").innerText = "Entre em contato"
    document.getElementById("contact-txt3").innerText = "Telefone"
    document.getElementById("contact-txt4").innerText = "Escritório"
    document.getElementById("footer-txt1").innerText = "Assine nossa newsletter para receber as últimas atualizações sobre novos recursos e lançamentos de produtos"
    document.getElementById("footer-txt2").innerText = "Cadastrar"
    document.getElementById("rodape").innerText = "© 2025 Enzo Lanzi. Todos os direitos reservados."
}

function fnBanner1() {
    document.getElementById("banner").src = "images/banner01.jpg"
}

function fnBanner2() {
    document.getElementById("banner").src = "images/banner02.jpg"
}

function fnBanner3() {
    document.getElementById("banner").src = "images/banner03.jpg"
}

function fnBanner4() {
    document.getElementById("banner").src = "images/banner04.jpg"
}


const banners = [
    "images/banner01.jpg",
    "images/banner02.jpg",
    "images/banner03.jpg",
    "images/banner04.jpg"
];

let bannerAtual = 0;

function fnAtualizarBanner() {
    document.getElementById("banner").src = banners[bannerAtual];
}
document.getElementById("ida").addEventListener("click", function () {
    for (let i = 0; i < banners.length; i++) {
        if (i == bannerAtual + 1) {
            bannerAtual = i;
            break;
        }
    }
    if (bannerAtual >= banners.length) {
        bannerAtual = banners.length - 1;
    }
    fnAtualizarBanner();
});
document.getElementById("volta").addEventListener("click", function () {
    for (let i = banners.length - 1; i >= 0; i--) {
        if (i == bannerAtual - 1) {
            bannerAtual = i;
            break;
        }
    }
    if (bannerAtual < 0) {
        bannerAtual = 0;
    }
    fnAtualizarBanner();
});

function fnCadastraEmail() {
    let email = document.getElementById("email").value

    alert("Seu email [" + email + "] foi cadastrado com sucesso.")

    document.getElementById("email").value = ""
}

function fnAtualizaHora() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    document.getElementById("hora").textContent = "Hora atual: " + horas + ":" + minutos + ":" + segundos

}

document.addEventListener("DOMContentLoaded", function () {
    fnAtualizaHora();
    setInterval(fnAtualizaHora, 1000);
});