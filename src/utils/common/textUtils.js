export const wrapText = (text, maxLength) => {
  if (text === "") {
    return "";
  }

  const words = text.split(" ");
  let currentLine = "";
  const lines = [];

  for (const word of words) {
    if (currentLine.length + word.length <= maxLength) {
      currentLine += (currentLine.length > 0 ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines.join("\n");
};
