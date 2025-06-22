import { languages } from './languages.js';

export function renderCustomSelect(customSelect, selected) {
  customSelect.innerHTML = '';
  languages.forEach(lang => {
    const div = document.createElement('div');
    div.className = 'custom-select-option' + (lang.value === selected ? ' active' : '');
    div.textContent = lang.text;
    div.dataset.value = lang.value;
    customSelect.appendChild(div);
  });
}