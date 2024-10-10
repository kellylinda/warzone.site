document.addEventListener("DOMContentLoaded", function() {
    console.log("Bem-vindo à página do Warzone!");
});

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "m4a1"; // Nome da arma da imagem
    const result = document.getElementById("result");

    if (answer === correctAnswer) {
        result.textContent = "Correto! Você acertou.";
    } else {
        result.textContent = "Incorreto. Tente novamente.";
    }
}
