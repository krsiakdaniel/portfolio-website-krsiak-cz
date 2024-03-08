export const getYearsExperience = (startYear: number): number => {
  return new Date().getFullYear() - startYear
}
