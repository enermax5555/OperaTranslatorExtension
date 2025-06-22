chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TRANSLATE') {
    const sourceLang = 'auto';
    const url = `https://lingva.ml/api/v1/${sourceLang}/${message.targetLang}/${encodeURIComponent(message.text)}`;
    fetch(url)
      .then(res => res.json())
      .then(data => sendResponse({ translatedText: data.translation }))
      .catch(err => sendResponse({ error: err.message }));
    return true;
  }
});