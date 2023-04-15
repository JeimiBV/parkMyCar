export function splitIntoSection(data) {
  const sections = [];

  for (let i = 0; i < data.length; i += 12) {
    const section = data.slice(i, i + 12);
    sections.push(section);
  }

  return sections;
}
