'use strict';
const themes = {
  energy: { title: 'Forecasting that informs control', description: 'Probabilistic wave prediction accounts for uncertainty in the future excitation of a wave energy converter. Connecting those forecasts to model predictive control brings prediction and energy-conversion decisions into one framework. My broader research interests include wind-turbine pitch control and reinforcement learning.', methods: ['Probabilistic diffusion models', 'Model predictive control', 'Reinforcement learning'] },
  climate: { title: 'Interpretable models for temporal climate data', description: 'Kolmogorov–Arnold networks offer a way to learn nonlinear relationships through univariate functions. My work studies interpretable temperature prediction, alongside sequence modelling with Mamba architectures and uncertainty-aware forecasting for climate and weather applications.', methods: ['Kolmogorov–Arnold networks', 'Mamba sequence models', 'Uncertainty quantification'] },
  industry: { title: 'Learning what sensors cannot directly measure', description: 'Soft sensors use process observations to estimate important variables that are difficult to measure directly. My research connects temporal learning, Bayesian prediction, and digital twins to industrial processes, including aluminum electrolysis, thickening, mining, and ironmaking.', methods: ['Learning-based soft sensing', 'Bayesian machine learning', 'Digital twins & surrogate models'] }
};
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
document.querySelectorAll('.research-card').forEach(card => card.addEventListener('click', () => {
  const key = card.dataset.theme;
  const theme = themes[key];
  document.querySelectorAll('.research-card').forEach(item => { const selected = item === card; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.getElementById('theme-title').textContent = theme.title;
  document.getElementById('theme-description').textContent = theme.description;
  document.getElementById('theme-methods').replaceChildren(...theme.methods.map(method => { const tag = document.createElement('span'); tag.textContent = method; return tag; }));
  document.querySelector('.related-papers').dataset.filter = key;
}));
let selectedFilter = 'all';
const search = document.getElementById('publication-search');
const publications = [...document.querySelectorAll('.publication')];
const count = document.getElementById('publication-count');
const updatePublications = () => {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  publications.forEach(publication => {
    const matchesTopic = selectedFilter === 'all' || publication.dataset.topics.split(' ').includes(selectedFilter);
    const matchesQuery = !query || (publication.textContent + ' ' + publication.dataset.keywords).toLocaleLowerCase().includes(query);
    publication.hidden = !(matchesTopic && matchesQuery);
    if (!publication.hidden) visible++;
  });
  count.textContent = `${visible} ${visible === 1 ? 'publication' : 'publications'}`;
  document.querySelector('.empty-state').hidden = visible !== 0;
};
const chooseFilter = filter => {
  selectedFilter = filter;
  document.querySelectorAll('.filter').forEach(button => { const selected = button.dataset.filter === filter; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  updatePublications();
};
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => chooseFilter(button.dataset.filter)));
search.addEventListener('input', updatePublications);
document.getElementById('reset-publications').addEventListener('click', () => { search.value = ''; chooseFilter('all'); search.focus(); });
document.querySelector('.related-papers').addEventListener('click', event => { search.value = ''; chooseFilter(event.currentTarget.dataset.filter); document.getElementById('publications').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); });
document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText('Lei_Yongxiang@a-star.edu.sg'); status.textContent = 'Email address copied.'; }
  catch { status.textContent = 'Please select the email address above to copy it.'; }
});
updatePublications();
