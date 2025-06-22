import { languages, getLangText } from './languages.js';
import { saveToStorage, getFromStorage } from './storage.js';
import { renderCustomSelect } from './dropdown.js';
import { translateText } from './translate.js';

const $ = sel => document.querySelector(sel);

const inputText = $('#inputText');
const outputDiv = $('#outputText');
const selectedLangBtn = $('#selectedLangBtn');
const langSearch = $('#langSearch');
const customSelect = $('#customSelect');
const translateBtn = $('#translateBtn');
const clearBtn = $('#clearBtn');
const themeToggleBtn = $('#themeToggleBtn');
const body = document.body;

let selectedLang = "en";

// --- UI Helpers ---
const hideDropdown = () => {
  langSearch.value = '';
  langSearch.style.display = 'none';
  customSelect.classList.remove('open');
  selectedLangBtn.classList.remove('open');
};
const showDropdown = () => {
  selectedLangBtn.classList.add('open');
  langSearch.style.display = 'block';
  langSearch.value = '';
  filterLanguages();
  customSelect.classList.add('open');
  langSearch.focus();
};
const setLoader = show => {
  if (show) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.id = 'translateLoader';
    translateBtn.style.display = 'none';
    translateBtn.parentNode.insertBefore(loader, translateBtn);
  } else {
    $('#translateLoader')?.remove();
    translateBtn.style.display = '';
  }
};

// --- Language Dropdown ---
const updateSelectedLangBtn = () =>
  selectedLangBtn.textContent = getLangText(selectedLang) || "Select language";

const filterLanguages = () => {
  const search = langSearch.value.trim().toLowerCase();
  const filtered = languages.filter(lang =>
    lang.text.toLowerCase().includes(search) ||
    lang.value.toLowerCase().includes(search)
  );
  renderCustomSelect(customSelect, selectedLang, filtered);
  customSelect.classList.add('open');
};

// --- Dropdown Events ---
selectedLangBtn.addEventListener('click', showDropdown);
langSearch.addEventListener('input', filterLanguages);

customSelect.addEventListener('mousedown', e => {
  if (e.target.classList.contains('custom-select-option')) {
    selectedLang = e.target.dataset.value;
    updateSelectedLangBtn();
    hideDropdown();
    renderCustomSelect(customSelect, selectedLang);
    saveToStorage({ lastLang: selectedLang });
  }
});

langSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const firstOption = customSelect.querySelector('.custom-select-option');
    if (firstOption) {
      selectedLang = firstOption.dataset.value;
      updateSelectedLangBtn();
      hideDropdown();
      renderCustomSelect(customSelect, selectedLang);
      saveToStorage({ lastLang: selectedLang });
    }
    e.preventDefault();
  } else if (e.key === 'Escape') {
    hideDropdown();
  }
});

document.addEventListener('mousedown', e => {
  if (!e.target.closest('.custom-select-wrapper')) hideDropdown();
});
langSearch.addEventListener('blur', () => setTimeout(hideDropdown, 120));

// --- Restore last state ---
getFromStorage(['lastInput', 'lastOutput', 'lastLang'], result => {
  if (result.lastInput !== undefined) inputText.value = result.lastInput;
  if (result.lastOutput !== undefined) outputDiv.textContent = result.lastOutput;
  if (result.lastLang) {
    selectedLang = result.lastLang;
    updateSelectedLangBtn();
    renderCustomSelect(customSelect, selectedLang);
  }
});

// --- Translation Logic ---
translateBtn.addEventListener('click', async () => {
  hideDropdown();
  const text = inputText.value;
  outputDiv.textContent = 'Translating...';
  setLoader(true);

  saveToStorage({ lastInput: text, lastLang: selectedLang });

  try {
    const data = await translateText(text, 'auto', selectedLang);
    outputDiv.textContent = data;
    saveToStorage({ lastOutput: outputDiv.textContent });
  } catch (err) {
    outputDiv.textContent = 'Error: ' + err.message;
    saveToStorage({ lastOutput: outputDiv.textContent });
  }
  setLoader(false);
});

clearBtn.addEventListener('click', () => {
  inputText.value = '';
  outputDiv.textContent = '';
  saveToStorage({ lastInput: '', lastOutput: '' });
});

// --- Theme Toggle ---
getFromStorage(['theme'], result => {
  if (result.theme === 'dark') {
    body.classList.add('dark');
    themeToggleBtn.textContent = 'Light Mode';
  } else {
    themeToggleBtn.textContent = 'Dark Mode';
  }
});
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  saveToStorage({ theme: isDark ? 'dark' : 'light' });
});

// --- Enter key triggers translation ---
inputText.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    translateBtn.click();
  }
});
langSearch.style.display = 'none';
