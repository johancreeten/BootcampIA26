const steps = [
  {
    title: "Faux cours sous-doués",
    block: "Intro",
    start: 0,
    duration: 5,
    owner: "Johan + Sandra",
    posture: "Ils jouent. Le groupe subit volontairement.",
    goal: "Écouter un faux cours et repérer ce qui donne envie de décrocher.",
    goal: "Créer un décrochage contrôlé pour disposer d’une matière émotionnelle commune.",
    activities: [
      "Observez votre attention : qu’est-ce qui vous accroche ou vous fait décrocher ?",
      "Repérez ce qui manque : utilité, lien au terrain, interaction, autonomie ?",
      "Préparez un mot ou une phrase pour décrire votre ressenti."
    ],
    deliverable: "vos mots sur ce qui aide ou empêche un adulte d’apprendre.",
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
    goal: "Mettre des mots sur ce qui aide ou empêche un adulte d’apprendre.",
    goal: "Faire émerger les principes de l’apprentissage adulte depuis ce qui vient d’être ressenti.",
    activities: [
      "Partagez ce qui a freiné votre attention ou votre envie d’apprendre.",
      "Reliez vos réponses aux besoins d’un adulte apprenant : utilité, expérience, problème réel, autonomie, transfert.",
      "Gardez un principe que vous voulez mieux intégrer dans vos formations."
    ],
    deliverable: "une grille simple pour relire vos propres formations.",
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
    goal: "Comprendre le lien entre apprentissage qui dure et passage à l’action.",
    goal: "Clarifier que l’ancrage fait durer et que la mise en action transforme le savoir en mouvement concret.",
    activities: [
      "Identifiez ce qui doit rester mobilisable après la formation.",
      "Repérez le premier geste concret attendu chez vos apprenants.",
      "Complétez : “La formation sort de la salle quand…”"
    ],
    deliverable: "une phrase repère reliant ancrage et mise en action.",
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
    goal: "Situer l’IA comme aide de conception, pas comme solution magique.",
    goal: "Positionner l’IA comme aide pédagogique, pas comme distributeur d’exercices génériques.",
    activities: [
      "Gardez votre expertise : l’IA propose, vous arbitrez.",
      "Vérifiez votre intention avant d’écrire un prompt.",
      "Transformez “donne-moi un exercice” en demande précise pour votre public."
    ],
    deliverable: "un principe de vigilance : l’intention pédagogique passe avant l’effet waouh.",
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
    goal: "Clarifier votre besoin avant de lancer une conversation IA.",
    goal: "Obliger les participants à préciser leur besoin avant de lancer une conversation IA.",
    activities: [
      "Complétez le canevas avec votre situation réelle.",
      "Choisissez un seul contenu à ancrer, pas toute une formation.",
      "Formulez un changement observable dans la pratique."
    ],
    deliverable: "une intention claire, prête à devenir un prompt.",
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
    goal: "Tester un prompt simple, réplicable et lié à une situation réelle.",
    goal: "Tester un prompt simple, réplicable, qui s’appuie sur l’expérience et les problèmes réels.",
    activities: [
      "Générez l’antisèche de prompt depuis votre canevas.",
      "Testez le prompt avec votre propre contexte.",
      "Repérez ce qui est trop scolaire, trop vague ou trop loin du terrain."
    ],
    deliverable: "une première proposition IA à critiquer.",
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
    goal: "Passer de “l’IA a répondu” à “est-ce utile pour mon public ?”.",
    goal: "Passer de “l’IA a répondu” à “cette réponse est-elle pédagogiquement valable ?”.",
    activities: [
      "Comparez : qu’est-ce qui est réaliste, applicable, cohérent avec votre public ?",
      "Choisissez une relance : moins scolaire, plus terrain, moins écrit ou plus autonome.",
      "Gardez les critères d’une bonne activité d’ancrage."
    ],
    deliverable: "des critères et relances pour améliorer une réponse IA.",
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
    goal: "Améliorer l’activité jusqu’à ce qu’elle soit utilisable rapidement.",
    goal: "Faire évoluer l’activité jusqu’à ce qu’elle soit utilisable dès le lendemain.",
    activities: [
      "Choisissez une relance et améliorez votre résultat.",
      "Vérifiez trois critères : réaliste, applicable, cohérent avec votre public.",
      "Gardez une version courte de votre activité finale."
    ],
    deliverable: "une activité d’ancrage améliorée par itération.",
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
    goal: "Découvrir comment l’IA peut aider à se mettre dans la peau de l’apprenant.",
    goal: "Montrer comment l’IA peut placer le formateur dans la peau de l’apprenant.",
    activities: [
      "Observez une conversation où l’IA joue l’apprenant face à un contenu de formation.",
      "Repérez comment les contraintes concrètes modifient la proposition.",
      "Déduisez : quelles consignes ont permis d’obtenir ce résultat ?"
    ],
    deliverable: "un exemple de conversation inversée pour préparer vos formations.",
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
    goal: "Produire un exercice de mise en action, pas seulement une conversation avec l’IA.",
    goal: "Faire produire un exercice de mise en action, pas seulement une interaction sympathique avec l’IA.",
    activities: [
      "Configurez une conversation inversée sur votre contenu.",
      "Mettez-vous dans la peau de vos apprenants.",
      "Extrayez un exercice concret de mise en action."
    ],
    deliverable: "un exercice de mise en action relié à votre formation réelle.",
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
    goal: "Découvrir un prolongement possible avec un agent dédié à l’ancrage.",
    goal: "Donner à voir l’agent dédié comme prolongement possible, sans ouvrir un nouveau chantier complet.",
    activities: [
      "Découvrez ce qu’un agent d’ancrage et de mise en action peut suivre.",
      "Choisissez une action testable dès demain.",
      "Formulez une phrase d’engagement individuel."
    ],
    deliverable: "une action, un indicateur, une date de réutilisation.",
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
    title: "Faire vivre l’anti-modèle",
    duration: "8 min",
    mode: "scène + débrief",
    goal: "Créer une rupture mémorable entre transmission subie et apprentissage adulte.",
    activities: [
      "Jouer 3 minutes de cours volontairement pompeux, froid et descendant.",
      "Demander : “Qu’est-ce qui vous a empêchés d’apprendre ?”",
      "Relier les ressentis aux besoins de l’adulte apprenant."
    ],
    note: "Assumer le jeu, mais couper vite : l’humour sert le diagnostic, il ne doit pas prendre toute la place."
  },
  {
    title: "Poser le cadre andragogique",
    duration: "12 min",
    mode: "mise au point active",
    goal: "Installer les principes clés : utilité, expérience, problème réel, autonomie et transfert.",
    activities: [
      "Reprendre les mots du débrief et les classer dans les 4 principes du cadre.",
      "Faire illustrer chaque principe par une situation vécue au Forem, à Bruxelles Formation ou à l’IFAPME.",
      "Conclure : une formation qui s’arrête au contenu transmis reste incomplète."
    ],
    note: "Éviter le second cours magistral : cette mise au point doit expliquer ce qu’ils viennent de ressentir."
  },
  {
    title: "Concevoir",
    duration: "20 min",
    title: "Créer l’attention",
    duration: "10 min",
    mode: "plénière",
    goal: "Faire sentir la différence entre une activité qui passe et une activité qui reste.",
    activities: [
      "Question choc : “Quelle trace votre dernière formation a-t-elle laissée 7 jours après ?”",
      "Positionnement silencieux sur une ligne : souvenir faible ↔ souvenir durable.",
      "Collecte de 3 facteurs qui favorisent l’ancrage."
    ],
    note: "Ouvrir par une expérience corporelle et émotionnelle plutôt que par une définition."
  },
  {
    title: "Diagnostiquer",
    duration: "15 min",
    mode: "triades",
    goal: "Repérer les moments où les apprentissages se dissolvent dans leurs formations.",
    activities: [
      "Chaque triade choisit une formation réelle.",
      "Identification d’un moment fragile : surcharge, abstraction, manque de pratique, oubli.",
      "Formulation d’un défi d’ancrage en une phrase."
    ],
    note: "Faire émerger les contraintes du Forem, de Bruxelles Formation et de l’IFAPME sans comparer les institutions."
  },
  {
    title: "Concevoir",
    duration: "25 min",
    mode: "groupes de 4",
    goal: "Transformer un défi en micro-dispositif pédagogique observable.",
    activities: [
      "Choisir une preuve d’ancrage : expliquer, faire, transférer, enseigner à autrui.",
      "Composer le triptyque : émotion utile + effort de récupération + mise en situation.",
      "Compléter le canevas numérique."
    ],
    note: "Ramener chaque idée à une preuve visible : que verra-t-on si l’ancrage existe vraiment ?"
  },
  {
    title: "Augmenter par l’IA",
    duration: "20 min",
    duration: "25 min",
    mode: "laboratoire",
    goal: "Utiliser l’IA pour produire des variantes, des simulations et du feedback actionnable.",
    activities: [
      "Tester le générateur de prompt.",
      "Demander 3 variantes : plus courte, plus concrète, plus inclusive.",
      "Comparer la sortie IA avec l’intention pédagogique initiale."
    ],
    note: "Insister : l’IA propose, le formateur arbitre selon le contexte, le public et l’objectif."
  },
  {
    title: "Prototyper",
    duration: "20 min",
    mode: "binômes croisés",
    goal: "Rendre l’activité suffisamment concrète pour être testée demain.",
    activities: [
      "Un binôme joue les apprenants, l’autre facilite 5 minutes.",
      "Feedback en trois mots : clair, utile, mémorable ?",
      "Ajustement immédiat du scénario."
    ],
    note: "Limiter le prototype à une séquence courte : on cherche la preuve, pas la perfection."
  },
  {
    title: "Ancrer l’engagement",
    duration: "10 min",
    mode: "individuel + cercle",
    goal: "Clore par un transfert explicite vers leur pratique professionnelle.",
    activities: [
      "Chaque personne écrit : “Dans ma prochaine formation, je teste…”",
      "Partage en cercle de 30 secondes par personne.",
      "Photo mentale : une action, un indicateur, une date."
    ],
    note: "Le dernier geste doit être un engagement concret, pas une évaluation générale."
  }
];

const state = JSON.parse(localStorage.getItem("anchorWorkshop") || "{}") || {};
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
      <span>Étape ${index + 1} · ${step.duration}</span>
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
      <span class="stamp-mini">${step.duration} min</span>
    </div>
    <div class="step-content">
      <div>
        <p class="stage-goal">${step.goal}</p>
        <h4 class="participant-title">Maintenant</h4>
      <span class="stamp-mini">À vous</span>
        <p class="stage-kicker">${step.start}’ → ${step.start + step.duration}’ · ${step.owner}</p>
        <h3>${step.title}</h3>
      </div>
      <span class="stamp-mini">${step.block}</span>
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
      <div class="visual-panel" aria-label="Repère visuel de l'étape">
        <span class="big-minute">${step.start + step.duration}’</span>
        <strong>${step.block}</strong>
        <p>${step.deliverable}</p>
      <div class="check-panel" aria-label="Repères de l'étape">
        <h4 class="participant-title">Repères visibles</h4>
          <span class="badge">${step.posture}</span>
        </div>
        <p class="stage-goal">${step.goal}</p>
        <ol class="activity-list">
          ${step.activities.map(activity => `<li>${activity}</li>`).join("")}
        </ol>
        <p class="deliverable"><strong>Livrable :</strong> ${step.deliverable}</p>
        <p class="facilitator-note"><strong>Note régie :</strong> ${step.note}</p>
    <div class="step-content">
      <div>
        <div class="step-meta">
          <span class="badge">${step.duration}</span>
          <span class="badge">${step.mode}</span>
          <span class="badge">12 participants</span>
        </div>
        <h3>${step.title}</h3>
        <p class="hero-lead">${step.goal}</p>
        <ol class="activity-list">
          ${step.activities.map(activity => `<li>${activity}</li>`).join("")}
        </ol>
        <p class="facilitator-note"><strong>Note facilitation :</strong> ${step.note}</p>
      </div>
      <div class="check-panel" aria-label="Checklist de l'étape">
        ${step.activities.map((activity, index) => `
          <label class="check-item">
            <input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""} />
            <span>${activity}</span>
          </label>
        `).join("")}
        <div class="stage-actions screen-controls" aria-label="Contrôles de navigation pour Sandra et Johan">
          <button class="ghost-button small" type="button" data-move="previous">← Précédent</button>
          <button class="primary-button small" type="button" data-move="next">Suivant →</button>
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
    if (field.name) field.value = values[field.name] || "";
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
function renderSummary() {
  const data = Object.fromEntries(new FormData(form).entries());
  state.canvas = data;
  persist();
  summary.textContent = `Nous voulons ancrer : ${data.moment || "[moment à préciser]"}\n\nDans la situation : ${data.situation || "[situation à préciser]"}\n\nLa preuve observable sera : ${data.evidence || "[preuve à préciser]"}\n\nL’IA sera utile pour : ${data.aiRole || "[rôle de l’IA à préciser]"}\n\nQuestion de contrôle : l’activité oblige-t-elle les apprenants à récupérer, appliquer et transférer ?`;
}

function generatePrompt() {
  const audience = document.querySelector("#audienceInput").value.trim();
  const skill = document.querySelector("#skillInput").value.trim();
  const format = document.querySelector("#formatInput").value;
  const canvas = state.canvas || {};
  document.querySelector("#promptOutput").textContent = `Agis comme un ingénieur pédagogique spécialisé dans la formation d'adultes.\n\nContexte : ${canvas.situation || "décris une situation de formation professionnelle"}.\nPublic : ${audience}.\nCompétence à ancrer : ${skill}.\nMoment fragile : ${canvas.moment || "un moment où les apprenants risquent d'oublier ou de ne pas transférer"}.\nPreuve d'ancrage attendue : ${canvas.evidence || "une preuve observable et mesurable"}.\n\nPropose une ${format} qui combine :\n1. une mise en situation concrète ;\n2. un effort de récupération active ;\n3. un feedback rapide ;\n4. une variante plus inclusive ;\n5. une question de débriefing pour favoriser le transfert.\n\nPrésente la réponse sous forme de déroulé minute par minute, avec matériel nécessaire et critères de réussite.`;
}

timeline.addEventListener("click", event => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  activeStep = Number(button.dataset.step);
  state.activeStep = activeStep;
  persist();
  renderTimeline();
  renderStage();
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
document.querySelector("#resetSession")?.addEventListener("click", () => {
form.addEventListener("input", renderSummary);
document.querySelector("#generatePrompt").addEventListener("click", generatePrompt);
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

renderTimeline();
renderStage();
hydrateForm();
generatePrompt();
