export const getYearsOfExperience = () => {
  const start = (new Date('2020 March 20')).getTime();
  const current = (new Date()).getTime();
  const year = (current - start) / 31_556_952_000;
  return parseFloat(year.toFixed(2));
}
