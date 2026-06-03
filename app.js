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
      "Observez votre attention : qu’est-ce qui vous accroche ou vous fait décrocher ?",
      "Repérez ce qui manque : utilité, lien au terrain, interaction, autonomie ?",
      "Préparez un mot ou une phrase pour décrire votre ressenti."
    ],
    deliverable: "vos mots sur ce qui aide ou empêche un adulte d’apprendre.",
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
      "Partagez ce qui a freiné votre attention ou votre envie d’apprendre.",
      "Reliez vos réponses aux besoins d’un adulte apprenant : utilité, expérience, problème réel, autonomie, transfert.",
      "Gardez un principe que vous voulez mieux intégrer dans vos formations."
    ],
    deliverable: "une grille simple pour relire vos propres formations.",
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
      "Identifiez ce qui doit rester mobilisable après la formation.",
      "Repérez le premier geste concret attendu chez vos apprenants.",
      "Complétez : “La formation sort de la salle quand…”"
    ],
    deliverable: "une phrase repère reliant ancrage et mise en action.",
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
      "Gardez votre expertise : l’IA propose, vous arbitrez.",
      "Vérifiez votre intention avant d’écrire un prompt.",
      "Transformez “donne-moi un exercice” en demande précise pour votre public."
    ],
    deliverable: "un principe de vigilance : l’intention pédagogique passe avant l’effet waouh.",
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
      "Complétez le canevas avec votre situation réelle.",
      "Choisissez un seul contenu à ancrer, pas toute une formation.",
      "Formulez un changement observable dans la pratique."
    ],
    deliverable: "une intention claire, prête à devenir un prompt.",
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
      "Générez l’antisèche de prompt depuis votre canevas.",
      "Testez le prompt avec votre propre contexte.",
      "Repérez ce qui est trop scolaire, trop vague ou trop loin du terrain."
    ],
    deliverable: "une première proposition IA à critiquer.",
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
      "Comparez : qu’est-ce qui est réaliste, applicable, cohérent avec votre public ?",
      "Choisissez une relance : moins scolaire, plus terrain, moins écrit ou plus autonome.",
      "Gardez les critères d’une bonne activité d’ancrage."
    ],
    deliverable: "des critères et relances pour améliorer une réponse IA.",
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
      "Choisissez une relance et améliorez votre résultat.",
      "Vérifiez trois critères : réaliste, applicable, cohérent avec votre public.",
      "Gardez une version courte de votre activité finale."
    ],
    deliverable: "une activité d’ancrage améliorée par itération.",
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
      "Observez une conversation où l’IA joue l’apprenant face à un contenu de formation.",
      "Repérez comment les contraintes concrètes modifient la proposition.",
      "Déduisez : quelles consignes ont permis d’obtenir ce résultat ?"
    ],
    deliverable: "un exemple de conversation inversée pour préparer vos formations.",
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
      "Configurez une conversation inversée sur votre contenu.",
      "Mettez-vous dans la peau de vos apprenants.",
      "Extrayez un exercice concret de mise en action."
    ],
    deliverable: "un exercice de mise en action relié à votre formation réelle.",
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
      "Découvrez ce qu’un agent d’ancrage et de mise en action peut suivre.",
      "Choisissez une action testable dès demain.",
      "Formulez une phrase d’engagement individuel."
    ],
    deliverable: "une action, un indicateur, une date de réutilisation.",
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
        <p class="stage-kicker">${step.start}’ → ${step.start + step.duration}’ · ${step.block}</p>
        <h3>${step.title}</h3>
      </div>
      <span class="stamp-mini">À vous</span>
    </div>
    <div class="step-content">
      <div>
        <div class="step-meta">
          <span class="badge">${step.duration} min</span>
          <span class="badge">Sandra et Johan vous guident</span>
        </div>
        <p class="stage-goal">${step.goal}</p>
        <h4 class="participant-title">Ce que vous faites maintenant</h4>
        <ol class="activity-list">
          ${step.activities.map(activity => `<li>${activity}</li>`).join("")}
        </ol>
        <p class="deliverable"><strong>À garder :</strong> ${step.deliverable}</p>
      </div>
      <div class="check-panel" aria-label="Repères de l'étape">
        <h4 class="participant-title">Repères visibles</h4>
        ${step.activities.map((activity, index) => `
          <label class="check-item">
            <input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""} />
            <span>${activity}</span>
          </label>
        `).join("")}
        <div class="stage-actions screen-controls" aria-label="Contrôles de navigation pour Sandra et Johan">
          <button class="ghost-button small" type="button" data-move="previous">← Précédent</button>
          <button class="primary-button small" type="button" data-move="next">Suivant →</button>
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
