export default function toTitleCase(sentence) {
  return sentence.replace(/\b\w/g, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
}
