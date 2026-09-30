/* =========================================
   ANIMAÇÃO DAS SEÇÕES
========================================= */

const elementos = document.querySelectorAll(
    ".introducao, .assunto, .conclusao"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add(
                    "aparecer"
                );

                observador.unobserve(
                    entrada.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    observador.observe(elemento);

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("botao-topo");

document.body.appendChild(botaoTopo);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("visivel");

    } else {

        botaoTopo.classList.remove("visivel");

    }

});


botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   EFEITO NOS CARTÕES
========================================= */

const cartoes = document.querySelectorAll(
    ".cartao"
);


cartoes.forEach((cartao) => {

    cartao.addEventListener(
        "mouseenter",
        () => {

            cartao.classList.add(
                "cartao-ativo"
            );

        }
    );


    cartao.addEventListener(
        "mouseleave",
        () => {

            cartao.classList.remove(
                "cartao-ativo"
            );

        }
    );

});