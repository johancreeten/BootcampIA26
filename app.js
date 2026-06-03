const steps = [
  {
    title: "Faux cours sous-doués",
    block: "Intro",
    start: 0,
    duration: 5,
    owner: "Johan + Sandra",
    posture: "Ils jouent. Le groupe subit volontairement.",
    goal: "Créer un décrochage contrôlé pour disposer d’une matière émotionnelle commune.",
    activities: [
      "Johan lance un cours pompeux, jargonnant, trop sûr de lui.",
      "Sandra renforce l’absurde : discipline, diapo imaginaire, interdiction des questions.",
      "Stop net après 3 minutes, sans laisser la blague s’installer trop longtemps."
    ],
    deliverable: "Une réaction collective à chaud : passivité, surcharge, absence de sens, distance au terrain.",
    note: "La scène doit être drôle, mais surtout utile : elle fabrique le problème que l’atelier va résoudre."
  },
  {
    title: "Débrief andragogie",
    block: "Intro",
    start: 5,
    duration: 10,
    owner: "Sandra mène, Johan note au tableau",
    posture: "Ils cadrent. Le groupe verbalise.",
    goal: "Faire émerger les principes de l’apprentissage adulte depuis ce qui vient d’être ressenti.",
    activities: [
      "Question : “Qu’est-ce qui vous a empêchés d’apprendre ?”",
      "Classer les réponses : utilité, expérience, problème réel, autonomie, transfert.",
      "Relier au cadre Knowles sans refaire un cours descendant."
    ],
    deliverable: "Une grille simple : un adulte apprend si cela sert sa pratique et respecte son expérience.",
    note: "La théorie vient après l’expérience : elle explique le malaise, elle ne le remplace pas."
  },
  {
    title: "Ancrage + mise en action",
    block: "Intro",
    start: 15,
    duration: 10,
    owner: "Johan mène, Sandra reformule",
    posture: "Ils articulent. Le groupe valide par exemples.",
    goal: "Clarifier que l’ancrage fait durer et que la mise en action transforme le savoir en mouvement concret.",
    activities: [
      "Ancrage : rester mobilisable pendant et après la formation, dans une situation réelle.",
      "Mise en action : passer du savoir compris au savoir utilisé, testé et ajusté.",
      "Faire formuler un exemple : “la formation sort de la salle quand…”"
    ],
    deliverable: "Une phrase repère : sans ancrage l’élan retombe, sans mise en action rien ne change.",
    note: "Utiliser des exemples professionnels des participants, pas des définitions longues."
  },
  {
    title: "IA comme aide de conception",
    block: "Ancrage",
    start: 25,
    duration: 5,
    owner: "Sandra",
    posture: "Elle pose les règles du jeu.",
    goal: "Positionner l’IA comme aide pédagogique, pas comme distributeur d’exercices génériques.",
    activities: [
      "Avertissement : l’IA ne remplace pas la créativité pédagogique.",
      "Dire explicitement : l’intention précède toujours l’outil.",
      "Montrer qu’on ne demande pas “un exercice”, mais une activité d’ancrage pour un public précis."
    ],
    deliverable: "Un principe de vigilance : pas d’effet waouh sans intention pédagogique claire.",
    note: "Le groupe doit sentir qu’il garde son expertise métier face à l’IA."
  },
  {
    title: "Cadrer l’intention",
    block: "Ancrage",
    start: 30,
    duration: 5,
    owner: "Johan chronomètre, Sandra accompagne",
    posture: "Ils guident. Chacun remplit sa copie.",
    goal: "Obliger les participants à préciser leur besoin avant de lancer une conversation IA.",
    activities: [
      "Compléter le canevas : contenu, public, contexte, moment, changement attendu, contraintes.",
      "Faire choisir un seul contenu à ancrer, pas toute une formation.",
      "Vérifier que le changement attendu est observable."
    ],
    deliverable: "Une intention pédagogique claire, prête à devenir un prompt.",
    note: "Si c’est flou ici, l’IA produira du flou plus joliment formulé."
  },
  {
    title: "Conversation simple",
    block: "Ancrage",
    start: 35,
    duration: 10,
    owner: "Sandra démontre, Johan circule",
    posture: "Ils montrent puis laissent tester sous contrôle.",
    goal: "Tester un prompt simple, réplicable, qui s’appuie sur l’expérience et les problèmes réels.",
    activities: [
      "Générer l’antisèche de prompt depuis le canevas.",
      "Chaque participant teste le prompt avec son propre contexte.",
      "Repérer immédiatement ce qui est trop scolaire, trop vague ou trop éloigné du terrain."
    ],
    deliverable: "Une première proposition IA d’activité d’ancrage.",
    note: "Ne pas chercher le résultat parfait : il faut un premier matériau critiquable."
  },
  {
    title: "Feedback critique",
    block: "Ancrage",
    start: 45,
    duration: 10,
    owner: "Johan anime la critique",
    posture: "Ils orchestrent le recul professionnel.",
    goal: "Passer de “l’IA a répondu” à “cette réponse est-elle pédagogiquement valable ?”.",
    activities: [
      "Comparer les sorties : qu’est-ce qui est réaliste, applicable, cohérent avec le public ?",
      "Faire émerger des relances : moins scolaire, plus terrain, moins écrit, plus autonome.",
      "Noter collectivement les critères d’une bonne activité d’ancrage."
    ],
    deliverable: "Une liste de critères et de relances utiles pour améliorer la réponse IA.",
    note: "C’est ici que l’expertise de formateur reprend la main sur la machine."
  },
  {
    title: "Itération",
    block: "Ancrage",
    start: 55,
    duration: 5,
    owner: "Sandra relance le rythme",
    posture: "Ils font produire vite.",
    goal: "Faire évoluer l’activité jusqu’à ce qu’elle soit utilisable dès le lendemain.",
    activities: [
      "Chaque participant choisit une relance et améliore son résultat.",
      "Vérifier trois critères : réaliste, applicable, cohérent avec le public.",
      "Garder une version courte de l’activité finale."
    ],
    deliverable: "Une activité d’ancrage améliorée par itération conversationnelle.",
    note: "Limiter le temps : l’itération doit montrer une méthode, pas devenir un tunnel individuel."
  },
  {
    title: "Démo mode apprentissage",
    block: "Démo",
    start: 60,
    duration: 15,
    owner: "Johan démontre, Sandra questionne",
    posture: "Ils inversent la posture.",
    goal: "Montrer comment l’IA peut placer le formateur dans la peau de l’apprenant.",
    activities: [
      "Configurer une conversation où l’IA joue l’apprenant face au contenu de formation.",
      "Tester une mise en action tenant compte de contraintes concrètes.",
      "Demander : “Comment ce résultat a-t-il été produit ?”"
    ],
    deliverable: "Un exemple de conversation inversée utilisable en préparation pédagogique.",
    note: "Présenter aussi l’alternative gratuite : obtenir le même effet par prompt si le mode apprentissage n’est pas disponible."
  },
  {
    title: "Mise en action participants",
    block: "Démo",
    start: 75,
    duration: 10,
    owner: "Sandra cadre, Johan soutient",
    posture: "Ils restent aux commandes pendant la pratique.",
    goal: "Faire produire un exercice de mise en action, pas seulement une interaction sympathique avec l’IA.",
    activities: [
      "Les participants configurent une conversation inversée sur leur contenu.",
      "Ils se mettent dans la peau de leurs apprenants.",
      "Ils extraient un exercice concret de mise en action."
    ],
    deliverable: "Un exercice de mise en action relié à leur formation réelle.",
    note: "Rappeler : tant que rien ne change dans la pratique, l’apprentissage n’est pas terminé."
  },
  {
    title: "Agent ancrage + clôture",
    block: "Démo",
    start: 85,
    duration: 5,
    owner: "Johan + Sandra",
    posture: "Ils ouvrent la suite et referment l’atelier.",
    goal: "Donner à voir l’agent dédié comme prolongement possible, sans ouvrir un nouveau chantier complet.",
    activities: [
      "Montrer brièvement ce qu’un agent d’ancrage et de mise en action peut suivre.",
      "Faire verbaliser une action testable dès demain.",
      "Clôturer par une phrase d’engagement individuel."
    ],
    deliverable: "Une action, un indicateur, une date de réutilisation.",
    note: "Si un atelier agent suit plus tard, teaser sans déborder : ici, l’objectif reste l’ancrage."
  }
];

const initialState = JSON.parse(localStorage.getItem("anchorWorkshop") || "{}") || {};
const state = initialState;
let activeStep = state.activeStep || 0;

const timeline = document.querySelector("#timeline");
const stage = document.querySelector("#stepStage");
const form = document.querySelector("#anchorForm");
const summary = document.querySelector("#summary");
const progressBar = document.querySelector("#progressBar");
const progressLabel = document.querySelector("#progressLabel");
const activePhaseLabel = document.querySelector("#activePhaseLabel");

function persist() {
  localStorage.setItem("anchorWorkshop", JSON.stringify(state));
}

function renderTimeline() {
  timeline.innerHTML = steps.map((step, index) => `
    <button class="step-tab ${index === activeStep ? "is-active" : ""}" type="button" data-step="${index}">
      <span>${step.start}’ → ${step.start + step.duration}’ · ${step.block}</span>
      <strong>${step.title}</strong>
    </button>
  `).join("");
}

function renderProgress() {
  const step = steps[activeStep];
  const completed = step.start + step.duration;
  progressBar.style.width = `${Math.min(100, Math.round((completed / 90) * 100))}%`;
  progressLabel.textContent = `${completed} min / 90 min`;
  activePhaseLabel.textContent = `${step.block} · ${step.title}`;
}

function renderStage() {
  const step = steps[activeStep];
  const checked = state.checks?.[activeStep] || [];

  stage.innerHTML = `
    <div class="stage-header">
      <div>
        <p class="stage-kicker">${step.start}’ → ${step.start + step.duration}’ · ${step.owner}</p>
        <h3>${step.title}</h3>
      </div>
      <span class="stamp-mini">${step.block}</span>
    </div>
    <div class="step-content">
      <div>
        <div class="step-meta">
          <span class="badge">${step.duration} min</span>
          <span class="badge">${step.posture}</span>
        </div>
        <p class="stage-goal">${step.goal}</p>
        <ol class="activity-list">
          ${step.activities.map(activity => `<li>${activity}</li>`).join("")}
        </ol>
        <p class="deliverable"><strong>Livrable :</strong> ${step.deliverable}</p>
        <p class="facilitator-note"><strong>Note régie :</strong> ${step.note}</p>
      </div>
      <div class="check-panel" aria-label="Checklist de l'étape">
        ${step.activities.map((activity, index) => `
          <label class="check-item">
            <input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""} />
            <span>${activity}</span>
          </label>
        `).join("")}
        <div class="stage-actions">
          <button class="ghost-button small" type="button" data-move="previous">← Étape précédente</button>
          <button class="primary-button small" type="button" data-move="next">Étape suivante →</button>
        </div>
      </div>
    </div>
  `;
}

function hydrateForm() {
  const values = state.canvas || {};
  [...form.elements].forEach(field => {
    if (field.name && values[field.name] !== undefined) field.value = values[field.name];
  });
  renderSummary();
}

function getCanvasData() {
  return Object.fromEntries(new FormData(form).entries());
}

function renderSummary() {
  const data = getCanvasData();
  state.canvas = data;
  persist();
  summary.textContent = `Contenu à ancrer : ${data.content || "[à préciser]"}\n\nPublic : ${data.audience || "[à préciser]"}\n\nContexte : ${data.context || "[à préciser]"}\n\nMoment : ${data.moment || "[à préciser]"}\n\nChangement attendu : ${data.change || "[à préciser]"}\n\nContraintes : ${data.constraints || "[à préciser]"}\n\nQuestion de contrôle : l’activité s’appuie-t-elle sur l’expérience, un problème réel et un transfert observable ?`;
}

function generatePrompt(extraRelance = "") {
  const data = state.canvas || getCanvasData();
  const format = document.querySelector("#formatInput").value;
  const tone = document.querySelector("#toneInput").value;
  const relance = extraRelance ? `\n\nRelance d’itération à appliquer : ${extraRelance}` : "";

  document.querySelector("#promptOutput").textContent = `Tu es un ingénieur pédagogique spécialisé en formation d’adultes. Aide-moi à concevoir une ${format}.\n\nContexte : ${data.context || "[contexte]"}\nPublic : ${data.audience || "[public]"}\nContenu à ancrer : ${data.content || "[contenu clé]"}\nMoment de l’activité d’ancrage : ${data.moment || "[moment]"}\nObjectif : les apprenants doivent ${data.change || "[changement attendu]"}\nContraintes : ${data.constraints || "[durée, groupe, présentiel/distanciel, niveau d’écrit...]"}\nTon attendu : ${tone}.\n\nPropose une activité simple, orientée vers un problème réel, qui s’appuie sur l’expérience/vécu des apprenants pour en faire une ressource d’apprentissage.\n\nStructure ta réponse en 5 parties :\n1. intention pédagogique ;\n2. déroulé minute par minute ;\n3. rôle du formateur ;\n4. preuve d’ancrage observable ;\n5. variante de mise en action après la formation.${relance}`;
}

function setActiveStep(nextStep) {
  activeStep = Math.max(0, Math.min(steps.length - 1, nextStep));
  state.activeStep = activeStep;
  persist();
  renderTimeline();
  renderProgress();
  renderStage();
}

timeline.addEventListener("click", event => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  setActiveStep(Number(button.dataset.step));
});

stage.addEventListener("change", event => {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;
  state.checks ||= {};
  const list = new Set(state.checks[activeStep] || []);
  const value = Number(checkbox.dataset.check);
  checkbox.checked ? list.add(value) : list.delete(value);
  state.checks[activeStep] = [...list];
  persist();
});

stage.addEventListener("click", event => {
  const move = event.target.closest("[data-move]")?.dataset.move;
  if (!move) return;
  setActiveStep(activeStep + (move === "next" ? 1 : -1));
});

form.addEventListener("input", () => {
  renderSummary();
  generatePrompt();
});
form.addEventListener("change", () => {
  renderSummary();
  generatePrompt();
});

document.querySelector("#generatePrompt").addEventListener("click", () => generatePrompt());
document.querySelector("#copySummary").addEventListener("click", async () => {
  await navigator.clipboard.writeText(summary.textContent);
});
document.querySelector("#resetSession").addEventListener("click", () => {
  localStorage.removeItem("anchorWorkshop");
  window.location.reload();
});
document.querySelector(".relance-box").addEventListener("click", event => {
  const relance = event.target.closest("[data-relance]")?.dataset.relance;
  if (!relance) return;
  generatePrompt(relance);
});

renderTimeline();
renderProgress();
renderStage();
hydrateForm();
generatePrompt();
