// ==============================
// MENU
// ==============================

const botaoMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function() {
        menu.classList.toggle("aberto");
    });
}


// ==============================
// DADOS DO PRODUTO
// ==============================

const iphone11 = {
    modelo: "iPhone 11",
    capacidade: "64 GB",
    bateria: "100%",
    cor: "Branco",
    estado: "Novo",
    preco: "256.000 Kz",
    quantidade: 1
};


// ==============================
// PREENCHER DADOS DO PRODUTO
// ==============================

function preencherProduto(produto) {

    const elementos = {
        modelo: document.querySelectorAll("[data-produto='modelo']"),
        capacidade: document.querySelectorAll("[data-produto='capacidade']"),
        bateria: document.querySelectorAll("[data-produto='bateria']"),
        cor: document.querySelectorAll("[data-produto='cor']"),
        estado: document.querySelectorAll("[data-produto='estado']"),
        preco: document.querySelectorAll("[data-produto='preco']")
    };

    elementos.modelo.forEach(elemento => {
        elemento.textContent = produto.modelo;
    });

    elementos.capacidade.forEach(elemento => {
        elemento.textContent = produto.capacidade;
    });

    elementos.bateria.forEach(elemento => {
        elemento.textContent = produto.bateria;
    });

    elementos.cor.forEach(elemento => {
        elemento.textContent = produto.cor;
    });

    elementos.estado.forEach(elemento => {
        elemento.textContent = produto.estado;
    });

    elementos.preco.forEach(elemento => {
        elemento.textContent = produto.preco;
    });
}

preencherProduto(iphone11);


// ==============================
// ESTOQUE
// ==============================

const disponibilidade = document.getElementById("disponibilidade-iphone-11");
const estadoEstoque = document.getElementById("estado-iphone-11");
const botaoDetalhes = document.getElementById("detalhes-iphone-11");
const imagemProduto = document.querySelector(".imagem-produto");

if (disponibilidade && estadoEstoque && botaoDetalhes && imagemProduto) {

    if (iphone11.quantidade > 0) {

        disponibilidade.textContent = "Disponível";
        disponibilidade.style.color = "green";

        estadoEstoque.textContent = "DISPONÍVEL";
        estadoEstoque.classList.add("disponivel");

    } else {

        disponibilidade.textContent = "Esgotado";
        disponibilidade.style.color = "red";

        estadoEstoque.textContent = "ESGOTADO";
        estadoEstoque.classList.add("esgotado");

        imagemProduto.classList.add("produto-esgotado");

        botaoDetalhes.classList.add("botao-desativado");
    }
}


// ==============================
// WHATSAPP
// ==============================

const botaoComprar = document.getElementById("botao-comprar");

if (botaoComprar) {

    const mensagem =
        "Olá! Tenho interesse no " +
        iphone11.modelo +
        " de " +
        iphone11.capacidade +
        ", cor " +
        iphone11.cor +
        ", bateria " +
        iphone11.bateria +
        ", por " +
        iphone11.preco +
        ".";

    const mensagemCodificada = encodeURIComponent(mensagem);

    botaoComprar.href =
        "https://wa.me/244943001990?text=" + mensagemCodificada;
}

// ==============================
// GALERIA DE FOTOS
// ==============================

const imagemPrincipal = document.getElementById("imagem-principal");
const botaoAnterior = document.getElementById("foto-anterior");
const botaoProxima = document.getElementById("foto-proxima");
const miniaturas = document.querySelectorAll(".miniatura");

if (imagemPrincipal && botaoAnterior && botaoProxima && miniaturas.length > 0) {

    const fotos = [
        "imagens/iphone-11-frente.jpg",
        "imagens/iphone-11branco-traseira.jpg.webp",
        "imagens/iphone-11branco-lateral.jpg.webp"
    ];

    let fotoAtual = 0;

    function mostrarFoto(indice) {

        imagemPrincipal.src = fotos[indice];

        miniaturas.forEach((miniatura, index) => {

            miniatura.classList.toggle(
                "ativa",
                index === indice
            );

        });

        fotoAtual = indice;
    }

    botaoProxima.addEventListener("click", function() {

        fotoAtual++;

        if (fotoAtual >= fotos.length) {
            fotoAtual = 0;
        }

        mostrarFoto(fotoAtual);
    });

    botaoAnterior.addEventListener("click", function() {

        fotoAtual--;

        if (fotoAtual < 0) {
            fotoAtual = fotos.length - 1;
        }

        mostrarFoto(fotoAtual);
    });

    miniaturas.forEach((miniatura, index) => {

        miniatura.addEventListener("click", function() {
            mostrarFoto(index);
        });

    });
}