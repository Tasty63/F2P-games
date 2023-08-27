export const formatToLocaleDate = (date: string) => {
  return new Date(date).toLocaleDateString();
}