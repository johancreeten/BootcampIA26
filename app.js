const steps = [
  {
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

function persist() {
  localStorage.setItem("anchorWorkshop", JSON.stringify(state));
}

function renderTimeline() {
  timeline.innerHTML = steps.map((step, index) => `
    <button class="step-tab ${index === activeStep ? "is-active" : ""}" type="button" data-step="${index}">
      <span>Étape ${index + 1} · ${step.duration}</span>
      <strong>${step.title}</strong>
    </button>
  `).join("");
}

function renderStage() {
  const step = steps[activeStep];
  const checked = state.checks?.[activeStep] || [];

  stage.innerHTML = `
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
      </div>
    </div>
  `;
}

function hydrateForm() {
  const values = state.canvas || {};
  [...form.elements].forEach(field => {
    if (field.name) field.value = values[field.name] || "";
  });
  renderSummary();
}

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

form.addEventListener("input", renderSummary);
document.querySelector("#generatePrompt").addEventListener("click", generatePrompt);
document.querySelector("#copySummary").addEventListener("click", async () => {
  await navigator.clipboard.writeText(summary.textContent);
});
document.querySelector("#resetSession").addEventListener("click", () => {
  localStorage.removeItem("anchorWorkshop");
  window.location.reload();
});

renderTimeline();
renderStage();
hydrateForm();
generatePrompt();
