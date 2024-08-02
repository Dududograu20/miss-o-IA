const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal fonte de energia renovável utilizada para gerar eletricidade globalmente?",
        alternativas: [
            {
                texto: "Solar",
                afirmacao: "Avanços na conscientização ambiental têm levado à implementação de políticas sustentáveis e à conservação de habitats naturais. Tecnologias limpas, como energia solar e eólica, reduzem as emissões de carbono. Pesquisa científica contínua impulsiona soluções inovadoras para desafios ambientais. Educação ambiental fortalece práticas sustentáveis, garantindo um futuro mais seguro e saudável."
            },
            {
                texto: "Carvão",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas contribui mais para a redução das emissões de carbono?",
        alternativas: [
            {
                texto: "Reciclagem de plásticos",
                afirmacao: ""
            },
            {
                texto: "Uso de transporte público",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Qual é o principal fator responsável pelo desmatamento de florestas tropicais?",
        alternativas: [
            {
                texto: " Agricultura e pecuária",
                afirmacao: ""
            },
            {
                texto: "Turismo ecológico",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções é considerada uma consequência direta das mudanças climáticas?",
        alternativas: [
            {
                texto: "Aumento da temperatura média global",
                afirmacao: ""
            },
            {
                texto: "Diminuição da biodiversidade devido à urbanização",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é uma das estratégias mais eficazes para conservar a água doce?",
        alternativas: [
            {
                texto: "Utilização de sistemas de irrigação eficientes",
                afirmacao: ""
            },
            {
                texto: "umento do uso de água mineral",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
