// src/lib/utils.ts
export function parseCSV(text: string): any[] {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj: any = {};
    headers.forEach((h, i) => {
      obj[h] = isNaN(+values[i]) ? values[i] : +values[i];
    });
    return obj;
  });
}
