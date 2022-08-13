// helper functions for getting/setting session storage
// session = doc loaded in particular browser tab
// storage survives over page reloads and restores
// storage clears when tab closes
// multiple tabs for same site opens multiple storages

export const getSessionStorageItem = key => window.sessionStorage.getItem(key);

export const setSessionStorageItem = (key, value) => window.sessionStorage.setItem(key, value);