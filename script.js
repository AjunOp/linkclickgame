const flash = document.getElementById('flash');
const memory = document.getElementById('memory');
const memoryText = document.getElementById('memoryText');
const sound = document.getElementById('sound');

const memories = {
  1: "🕰️ Tu entres dans un café vide... Une voix familière t'appelle. C'est Lu Guang, concentré sur une photo posée devant lui.",
  2: "📸 La lumière clignote... Tu es dans une ruelle sombre. Cheng Xiaoshi vient de prendre la photo d'une scène tragique.",
  3: "💼 Tu arrives dans un bureau. Une femme pleure doucement. Une décision du passé a brisé bien plus qu'elle ne l'imagine."
};

function revealMemory(id) {
  flash.style.opacity = 1;
  sound.play();
  setTimeout(() => {
    flash.style.opacity = 0;
    memoryText.textContent = memories[id];
    memory.classList.remove('hidden');
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.intro').style.display = 'none';
  }, 400);
}

function reset() {
  memory.classList.add('hidden');
  document.querySelector('.gallery').style.display = 'flex';
  document.querySelector('.intro').style.display = 'block';
}
