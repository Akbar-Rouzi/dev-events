export function parseArrayField(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string") return [];

  const trimmed = value.trim();

  // JSON array case: ["a","b"]
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
      return [];
    }
  }

  // Fallback: comma-separated "a,b"
  return trimmed.split(",").map(s => s.trim()).filter(Boolean);
}

export function parseJsonFromArray<T>(arr: string[]): T | null {
  if (!arr.length || !arr[0]) return null;
  try {
    return JSON.parse(arr[0].trim().replace(/,+$/, ""));
  } catch {
    return null;
  }
}