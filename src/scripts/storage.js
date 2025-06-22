export function saveToStorage(obj) {
  if (chrome?.storage?.local) {
    chrome.storage.local.set(obj);
  }
}

export function getFromStorage(keys, cb) {
  if (chrome?.storage?.local) {
    chrome.storage.local.get(keys, cb);
  } else {
    cb({});
  }
}