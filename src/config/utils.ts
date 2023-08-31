export const formatToLocaleDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
}

export const hasOnlyNullProperties = (object: object): boolean => {
  return Object.values(object).every(value => value === null);
}

export const saveToLocalStorage = (key: string, object: any): void => {
  const savedObject = structuredClone(object);
  savedObject.timestamp = new Date().getTime();

  localStorage.setItem(key, JSON.stringify(savedObject));
}

export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);

  return item && JSON.parse(item);
}

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
}

export const hasTimePassed = (timestamp: number, time: number): boolean => {
  const currentTime = new Date().getTime();

  return (currentTime - timestamp) > time;
}