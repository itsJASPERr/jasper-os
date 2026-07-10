const STORAGE_KEY = "jasperos.executive.briefing";

export function saveBriefing(state: unknown) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}


export function loadBriefing<T>() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return null;
  }

  return JSON.parse(saved) as T;
}


export function clearBriefing() {
  localStorage.removeItem(STORAGE_KEY);
}