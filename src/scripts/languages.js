export const languages = [
  { value: "af", text: "Afrikaans" }, { value: "am", text: "Amharic" }, { value: "ar", text: "Arabic" },
  { value: "az", text: "Azerbaijani" }, { value: "be", text: "Belarusian" }, { value: "bg", text: "Bulgarian" },
  { value: "bn", text: "Bengali" }, { value: "bs", text: "Bosnian" }, { value: "ca", text: "Catalan" },
  { value: "cs", text: "Czech" }, { value: "da", text: "Danish" }, { value: "de", text: "German" },
  { value: "el", text: "Greek" }, { value: "en", text: "English" }, { value: "eo", text: "Esperanto" },
  { value: "es", text: "Spanish" }, { value: "et", text: "Estonian" }, { value: "eu", text: "Basque" },
  { value: "fa", text: "Persian" }, { value: "fi", text: "Finnish" }, { value: "fr", text: "French" },
  { value: "ga", text: "Irish" }, { value: "gl", text: "Galician" }, { value: "gu", text: "Gujarati" },
  { value: "ha", text: "Hausa" }, { value: "he", text: "Hebrew" }, { value: "hi", text: "Hindi" },
  { value: "hr", text: "Croatian" }, { value: "hu", text: "Hungarian" }, { value: "hy", text: "Armenian" },
  { value: "id", text: "Indonesian" }, { value: "ig", text: "Igbo" }, { value: "is", text: "Icelandic" },
  { value: "it", text: "Italian" }, { value: "ja", text: "Japanese" }, { value: "ka", text: "Georgian" },
  { value: "km", text: "Khmer" }, { value: "kn", text: "Kannada" }, { value: "ko", text: "Korean" },
  { value: "lo", text: "Lao" }, { value: "lt", text: "Lithuanian" }, { value: "lv", text: "Latvian" },
  { value: "ml", text: "Malayalam" }, { value: "mn", text: "Mongolian" }, { value: "mr", text: "Marathi" },
  { value: "ms", text: "Malay" }, { value: "mt", text: "Maltese" }, { value: "my", text: "Burmese" },
  { value: "ne", text: "Nepali" }, { value: "nl", text: "Dutch" }, { value: "no", text: "Norwegian" },
  { value: "pa", text: "Punjabi" }, { value: "pl", text: "Polish" }, { value: "pt", text: "Portuguese" },
  { value: "ro", text: "Romanian" }, { value: "ru", text: "Russian" }, { value: "si", text: "Sinhala" },
  { value: "sk", text: "Slovak" }, { value: "sl", text: "Slovenian" }, { value: "sq", text: "Albanian" },
  { value: "sr", text: "Serbian" }, { value: "st", text: "Sesotho" }, { value: "sv", text: "Swedish" },
  { value: "sw", text: "Swahili" }, { value: "ta", text: "Tamil" }, { value: "te", text: "Telugu" },
  { value: "th", text: "Thai" }, { value: "tl", text: "Tagalog" }, { value: "tr", text: "Turkish" },
  { value: "uk", text: "Ukrainian" }, { value: "ur", text: "Urdu" }, { value: "vi", text: "Vietnamese" },
  { value: "yo", text: "Yoruba" }, { value: "zh", text: "Chinese" }, { value: "zu", text: "Zulu" },
  { value: "xh", text: "Xhosa" }
];

export function getLangText(code) {
  const lang = languages.find(l => l.value === code);
  return lang ? lang.text : code;
}