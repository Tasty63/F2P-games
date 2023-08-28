export const formatToLocaleDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
}