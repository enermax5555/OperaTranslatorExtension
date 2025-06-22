# Opera Translator Extension

A simple, fast, and privacy-friendly translation extension for Opera (and Chromium-based browsers).  
Supports dozens of languages, dark mode, and works offline with your last translation.

---

## Features

- 🌍 Translate text between 60+ languages
- 🔎 Fast language search and selection
- 🌓 Light/Dark mode toggle
- 💾 Remembers your last input, output, and language
- ⚡ Clean, modular codebase (ES modules)
- 🛡️ No tracking, no ads, no unnecessary permissions

---

## How It Works

- Uses the [Lingva Translate API](https://lingva.ml/) for translations
- Language list and dropdown are fully searchable
- All settings and last-used data are stored locally (via Chrome storage)
- Modern, responsive UI

---

## Installation

1. **Clone or download this repo:**
   ```sh
   git clone https://github.com/enermax5555/OperaTranslatorExtension.git
   cd OperaTranslatorExtension
   ```

2. **Load as an unpacked extension:**
   - Go to `opera://extensions` (or `chrome://extensions`)
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project folder

---

## Usage

- Type or paste text in the input box.
- Select your target language using the dropdown (searchable).
- Click **Translate** to see the result.
- Use the **Clear** button to reset.
- Toggle **Dark Mode** for a comfortable night experience.

---

## Project Structure

```
src/
  scripts/
    app.js           # Main app logic and UI glue
    languages.js     # Language list and helpers
    storage.js       # Chrome storage helpers
    dropdown.js      # Dropdown rendering logic
    translate.js     # Translation API logic
style.css           # Main stylesheet
html/
  index.html        # Extension popup HTML
```

---

## Tech Stack

- JavaScript (ES Modules)
- HTML5 & CSS3
- Lingva Translate API
- Chrome Storage API

---

## License

MIT

---

## Credits

- [Lingva Translate](https://lingva.ml/)