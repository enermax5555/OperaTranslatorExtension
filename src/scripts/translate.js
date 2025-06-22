export async function translateText(text, fromLang, toLang) {
  const url = `https://lingva.ml/api/v1/${fromLang}/${toLang}/${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Translation API error');
  const data = await res.json();
  return data.translation || text;
}