const perguntas = [
    { 
        pergunta: "Qual desses alimentos tem maior valor nutricional?",
        opcoes: ["Batata frita", "Brócolis", "Refrigerante", "Bala de goma"],
        resposta: "Brócolis"
    },
    { 
        pergunta: "Quanto de comida é desperdiçada no mundo anualmente?",
        opcoes: ["500 mil toneladas", "1 milhão de toneladas", "931 milhões de toneladas", "10 bilhões de toneladas"],
        resposta: "931 milhões de toneladas"
    },
    {
        pergunta: "Qual vitamina é essencial para a saúde dos ossos?",
        opcoes: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"],
        resposta: "Vitamina D"
    },
    {
        pergunta: "Qual desses alimentos é mais saudável?",
        opcoes: ["Bolacha recheada", "Bolacha de água e sal", "Bolacha de maisena", "Bolacha de chocolate"],
        resposta: "Bolacha de água e sal"
    },
    {
        pergunta: "Qual desses alimentos é mais saudável?",
        opcoes: ["Refrigerante", "Suco de caixinha", "Suco natural", "Água"],
        resposta: "Água"
    },
    {
        pergunta: "O que significa segurança alimentar?",
        opcoes: ["Comer sem medo", "Comer de tudo", "Comer sem culpa", "Comer de forma segura"],
        resposta: "Comer de forma segura"
    },
    {
        pergunta: "Qual dessas práticas melhora a segurança alimentar no mundo?",
        opcoes: ["Desperdiçar comida", "Compartilhar comida", "Comprar comida", "Jogar comida fora"],
        resposta: "Compartilhar comida"
    },
];

let indiceAtual = 0;
let acertos = 0;  


document.getElementById("startQuiz").addEventListener("click", iniciarQuiz);

function iniciarQuiz() {
    
    document.getElementById("startQuiz").style.display = "none";
    
    document.getElementById("quizContainer").style.display = "block";
    
    document.getElementById("resultado").style.display = "none"; 
    
    acertos = 0;
    indiceAtual = 0;
    mostrarPergunta();
}


function mostrarPergunta() {
    const quiz = perguntas[indiceAtual];
    document.getElementById("pergunta").innerText = quiz.pergunta;
    let opcoesHtml = "";
    quiz.opcoes.forEach(opcao => {
        opcoesHtml += `<button onclick="verificarResposta('${opcao}')">${opcao}</button>`;
    });
    document.getElementById("opcoes").innerHTML = opcoesHtml;
}


function verificarResposta(resposta) {
    if (resposta === perguntas[indiceAtual].resposta) {
        acertos++;  
    }
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();  
    }
}


function mostrarResultado() {
    document.getElementById("quizContainer").style.display = "none";  
    document.getElementById("resultado").style.display = "block";  

    
    document.getElementById("totalAcertos").innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;

    
    document.getElementById("reiniciarBtn").style.display = "block";
}


function reiniciarQuiz() {
    
    document.getElementById("resultado").style.display = "none";
    
    document.getElementById("startQuiz").style.display = "block";
    
    document.getElementById("reiniciarBtn").style.display = "none";
}

function verificarResposta(resposta) {
    const perguntaAtual = perguntas[indiceAtual];
    const feedbackResposta = document.getElementById("feedbackResposta");
    const feedbackTexto = document.getElementById("feedbackTexto");

    if (resposta === perguntaAtual.resposta) {
        acertos++;
        feedbackTexto.textContent = "Resposta correta!";
        feedbackResposta.classList.add("correto");
        feedbackResposta.classList.remove("errado");
    } else {
        feedbackTexto.textContent = `Resposta errada! A resposta correta era: ${perguntaAtual.resposta}`;
        feedbackResposta.classList.add("errado");
        feedbackResposta.classList.remove("correto");
    }

    feedbackResposta.style.display = "block";  

    
    setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            mostrarPergunta();
            feedbackResposta.style.display = "none"; 
        } else {
            mostrarResultado();
        }
    }, 3000);  
}

function reiniciarQuiz() {
    indiceAtual = 0; 
    acertos = 0; 

    
    let mensagemResposta = document.getElementById("mensagemResposta");
    if (mensagemResposta) {
        mensagemResposta.innerHTML = "";
        mensagemResposta.style.display = "none";
    }

    
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").style.display = "none";

    
    document.getElementById("quizContainer").style.display = "block";

    
    mostrarPergunta();
}
