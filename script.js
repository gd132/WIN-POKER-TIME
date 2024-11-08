document.getElementById('analyze-button').addEventListener('click', function() {
    const fileInput = document.getElementById('hand-upload');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            analyzeHand(fileContent);
        };
        reader.readAsText(file);
    } else {
        alert('Пожалуйста, загрузите файл с раздачей.');
    }
});

function analyzeHand(handData) {
    const handDetails = \`Детали раздачи:
\${handData}
(Здесь будет расшифровка раздачи)\`;
    document.getElementById('hand-details').innerText = handDetails;

    const strategySuggestions = getStrategySuggestions(handData);
    document.getElementById('strategy-suggestions').innerText = strategySuggestions;
}

function getStrategySuggestions(handData) {
    return "Рекомендации: Если у вас пара тузов, лучше ставить на префлопе.";
}
