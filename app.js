const slides = [
  { n: '01', title: 'Workshop title', text: 'Boot du module : ancrer les apprentissages avec l’IA. On annonce la règle du jeu et l’ambiance rétro.', bullets: ['Start visible', 'Objectif clair', 'Contrat ludique'], value: '18%' },
  { n: '02', title: 'Fatal system crash', text: 'Le modèle 1980 plante : adulte traité comme page blanche, sciences cognitives ignorées, aucune adaptation.', bullets: ['Andragogie introuvable', 'Sauvegarde échouée', 'Processeur obsolète'], value: '12%' },
  { n: '03', title: '6 commandes Knowles', text: 'Les boutons de l’andragogie activent besoin de savoir, autonomie, expérience, utilité, problème réel et motivation intrinsèque.', bullets: ['Pourquoi apprendre ?', 'Contrôle du volant', 'Défi contextuel'], value: '52%' },
  { n: '04', title: 'Encodage & attention', text: 'L’IA simplifie, hiérarchise, multiplie les analogies et crée des indices sémantiques pour éviter la surcharge cognitive.', bullets: ['Phasage matière', 'Liens variés', 'Réseau dense'], value: '62%' },
  { n: '05', title: 'Baffotron bienveillant', text: 'On remplace la punition par un feedback immédiat, orienté amélioration, sans jugement.', bullets: ['Immédiateté', 'Feedforward', 'Zéro jugement'], value: '70%' },
  { n: '06', title: 'Insert coin', text: 'Transition atelier : les participants ouvrent leurs ordinateurs et configurent leur propre IA d’ancrage.', bullets: ['Mission claire', 'Objectif terrain', 'Statut : pratique'], value: '78%' },
  { n: '07', title: 'Machine punitive du passé', text: 'La machine à baffes ne crée pas l’ancrage : elle crée la fuite. On évite le conditionnement brutal.', bullets: ['Feedback douloureux', 'Mémoire zéro', 'Fuite apprenante'], value: '8%' },
  { n: '08', title: 'Pédagogie vs andragogie', text: 'Mise à jour du logiciel : l’adulte arrive avec expérience, besoin de sens, autonomie et motivation intrinsèque.', bullets: ['Disque dur rempli', 'Sens et utilité', 'Implication'], value: '58%' },
  { n: '09', title: 'Courbe de l’oubli', text: 'Sans stratégie, près de la moitié des informations s’effacent rapidement : il faut programmer des rappels.', bullets: ['Data loss warning', '48 heures critiques', 'Réactivation'], value: '34%' },
  { n: '10', title: 'Bad sector', text: 'Encodage, rétention, récupération : l’erreur répétée creuse un chemin. Le feedback rapide évite l’ancrage erroné.', bullets: ['Acquisition', 'Stockage', 'Actualisation'], value: '45%' },
  { n: '11', title: '4 piliers Dehaene', text: 'Attention, engagement actif, retour d’information et consolidation forment le processeur d’apprentissage.', bullets: ['Filtre', 'Action', 'Feedback', 'Automatisation'], value: '82%' },
  { n: '12', title: 'IA engagement & consolidation', text: 'Drill automatisé, contextualisation, chatbot pédagogique et répétition espacée font vivre la récupération.', bullets: ['Quiz et flashcards', 'Cas concrets', 'J+1 · J+7 · J+30'], value: '95%' },
  { n: '13', title: 'Kirkpatrick impact', text: 'On diagnostique réaction, apprentissage, comportement et résultats pour mesurer ce qui change vraiment.', bullets: ['Satisfaction', 'Trace mnésique', 'Transfert', 'Impact'], value: '88%' }
];

const deck = document.querySelector('#slideDeck');
const soundToggle = document.querySelector('#soundToggle');
let audioOn = false;
let audioCtx;

function beep(type = 'click') {
  if (!audioOn) return;
  audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;
  osc.type = type === 'alarm' ? 'sawtooth' : 'square';
  osc.frequency.setValueAtTime(type === 'alarm' ? 140 : 520, now);
  osc.frequency.exponentialRampToValueAtTime(type === 'success' ? 880 : 220, now + 0.12);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.2);
}

function renderSlides() {
  deck.innerHTML = slides.map((slide) => `
    <article class="slide reveal" id="slide-${slide.n}">
      <div class="slide-number">${slide.n}</div>
      <div>
        <h3>${slide.title}</h3>
        <p>${slide.text}</p>
        <ul>${slide.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <aside class="module-card">
        <span class="light" aria-hidden="true"></span>
        <strong>ANCRAGE LEVEL</strong>
        <div class="meter" aria-label="Niveau d'ancrage"><span style="--value:${slide.value}"></span></div>
        <button class="slide-btn" type="button" data-slide="${slide.n}">Activer module</button>
      </aside>
    </article>
  `).join('');
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.16 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupDeckActions() {
  deck.addEventListener('click', (event) => {
    const button = event.target.closest('[data-slide]');
    if (!button) return;
    document.querySelectorAll('.slide').forEach((slide) => slide.classList.remove('active'));
    const card = document.querySelector(`#slide-${button.dataset.slide}`);
    card.classList.add('active');
    button.textContent = 'MODULE ACTIF';
    beep(button.dataset.slide === '02' || button.dataset.slide === '07' ? 'alarm' : 'success');
  });
}

const chips = ['Attention', 'Engagement actif', 'Retour d’information', 'Consolidation', 'Punition', 'Cours descendant', 'Jargon', 'Notes surprises'];
const good = new Set(['Attention', 'Engagement actif', 'Retour d’information', 'Consolidation']);
const chipGame = document.querySelector('#chipGame');
const quizResult = document.querySelector('#quizResult');

function renderGame() {
  chipGame.innerHTML = chips.map((chip) => `<button class="chip" type="button">${chip}</button>`).join('');
  chipGame.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;
    chip.classList.toggle('selected');
    beep('click');
    const selected = [...document.querySelectorAll('.chip.selected')].map((item) => item.textContent);
    const allGood = selected.length === 4 && selected.every((item) => good.has(item));
    if (allGood) {
      document.querySelectorAll('.chip.selected').forEach((item) => item.classList.add('good'));
      quizResult.textContent = 'PROCESSEUR DÉBLOQUÉ : apprentissage robuste prêt à compiler.';
      beep('success');
    } else if (selected.length >= 4) {
      selected.forEach((item) => {
        const element = [...document.querySelectorAll('.chip')].find((chipNode) => chipNode.textContent === item);
        if (!good.has(item)) element.classList.add('bad');
      });
      quizResult.textContent = 'BAD SECTOR : retirez les vieux réflexes et gardez les 4 piliers.';
      beep('alarm');
    } else {
      quizResult.textContent = `Circuits insérés : ${selected.length}/4.`;
    }
  });
}

function setupPromptGenerator() {
  document.querySelector('#generatePrompt').addEventListener('click', () => {
    const context = document.querySelector('#contextInput').value.trim() || 'votre contenu de formation';
    document.querySelector('#promptOutput').textContent = `Agis comme un ingénieur pédagogique spécialisé en andragogie et sciences cognitives.\n\nContexte : ${context}\n\nConçois une activité d’ancrage compatible adulte apprenant :\n1. une phase d’encodage qui limite la charge cognitive ;\n2. une mise en action contextualisée, liée à un problème réel ;\n3. un feedback immédiat, bienveillant et orienté feedforward ;\n4. un plan de récupération espacée à J+1, J+7, J+30 et M+6 ;\n5. trois variantes d’indices de rappel : sémantique, sensoriel, émotionnel ;\n6. un indicateur Kirkpatrick pour réaction, apprentissage, comportement et résultat.\n\nFormat attendu : scénario minute par minute, consignes participant, critères de réussite et relance si l’activité est trop scolaire.`;
    beep('success');
  });
}

soundToggle.addEventListener('click', async () => {
  audioOn = !audioOn;
  document.body.classList.toggle('sound-on', audioOn);
  soundToggle.textContent = audioOn ? '🔊 Sons ON' : '🔇 Sons OFF';
  soundToggle.setAttribute('aria-pressed', String(audioOn));
  if (audioOn) beep('success');
});

document.querySelector('#startMachine').addEventListener('click', () => {
  beep('success');
  document.querySelector('#slides').scrollIntoView({ behavior: 'smooth' });
});

renderSlides();
renderGame();
setupDeckActions();
setupPromptGenerator();
setupReveal();
