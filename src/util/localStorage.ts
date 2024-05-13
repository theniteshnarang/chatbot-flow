export enum LocalStorageKeys {
  nodesEdges = "nodesEdges",
}

export const setDataInLocalStorage = (
  key: LocalStorageKeys,
  value: Record<string | number, unknown>
) => {
  if (!key || !value || !window) {
    return;
  }
  const storeInJSON = JSON.stringify(value);
  window.localStorage.setItem(key, storeInJSON);
};

export const getDataInLocalStorage = (key: LocalStorageKeys) => {
  if (!key || !window) {
    return;
  }

  const stringifyData = window.localStorage.getItem(key);

  if (!stringifyData) {
    return;
  }

  const data = JSON.parse(stringifyData);

  return data;
};

export const removeItemInLocalStorage = (key: LocalStorageKeys) => {
  if (!key || !window) {
    return;
  }
  window.localStorage.removeItem(key);
};
