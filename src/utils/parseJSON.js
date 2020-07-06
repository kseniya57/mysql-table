export default (json, defaultValue = []) => {
  if (!json) {
    return defaultValue;
  }
  try {
    return JSON.parse(json);
  } catch {
    return defaultValue;
  }
};
