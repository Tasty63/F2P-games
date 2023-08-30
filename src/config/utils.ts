export const formatToLocaleDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
}

export const hasOnlyNullProperties = (object: any): boolean => {
  return Object.values(object).every(value => value === null)
}