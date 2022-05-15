export function filterUndefined(map: Record<string, unknown>): typeof map {
  for (const key of Object.keys(map)) {
    const value = map[key];
    if (Array.isArray(value)) {
      const [test, val] = value;
      if (test === undefined) {
        delete map[key];
      } else {
        map[key] = val;
      }
    }
    if (map[key] === undefined) {
      delete map[key];
    }
  }
  return map;
}
