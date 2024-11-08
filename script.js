const questions = [
    "Ce este istoria?", 
    "Ce știință ajutătoare a istoriei cunoști?", 
    "Cum poate fi împărțit timpul istoric?", 
    "Care sunt unitățile de masură cu care lucrează cronologia?", 
    "Care sunt epocile istorice, în ordine cronologică?", 
    "Pe baza a ce poate fi studiată istoria?",   
    "Ce este preistoria?", 
    "De când până când ține preistoria?", 
    "Epocile istorice sunt în număr de 2?", 
    "Enumeră 4 caracteristici ale Paleoliticului.", 
    "Enumeră 4 caracteristici ale Neoliticului.", 
    "Ce înseamnă microlită și cărei epoci corespunde?", 
    "Prezintă 2 caracteristici ale epocii metalelor.", 
    "În ce se imparte epoca metalelor?", 
    "În ce se împarte epoca fierului?", 
    "Cărui secol aparțin anii: 354 î.Hr., 1054, 1918.", 
    "Cum și când a descoperit omul focul?", 
    "Unde locuiau oamenii în preistorie?", 
    "De ce omul era nomad în Paleolitic?", 
    "De ce devine omul sedentar și când?", 
    "Explică următoarele cuvinte: sedentar, izvor istoric, microlită.", 
    "Explică următoarele cuvinte: nomad, primată, paleolitic.", 
    "Ce este metalurgia și când apare ea?"
];

let currentIndex = 0;
let currentRound = [];
let roundsCompleted = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startNewRound() {
    currentIndex = 0;
    currentRound = shuffleArray([...questions]).slice(0, 10);
    document.getElementById('question').textContent = "";
    document.getElementById('next-btn').textContent = "Următoarea întrebare";
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentIndex >= 10) {
        document.getElementById('question').textContent = "Ai terminat setul de 10 întrebări!";
        document.getElementById('next-btn').textContent = "Începe testul";
        document.getElementById('next-btn').disabled = true;

        setTimeout(() => {
            startNewRound();
        }, 3000);
        return;
    }

    document.getElementById('question').textContent = currentRound[currentIndex];
    currentIndex++;

    if (currentIndex < 10) {
        document.getElementById('next-btn').textContent = "Următoarea întrebare";
    }
}

startNewRound();




