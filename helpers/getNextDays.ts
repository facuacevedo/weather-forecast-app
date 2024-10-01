const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const getNextDays = (startDays: number, numDays: number) => {
  const newDays = [];

  const normalizedStarDay = startDays < 7 ? startDays % 7 : (startDays % 7) + 1;

  for (let i = 0; i < numDays; i++) {
    const currentIndex = (normalizedStarDay + i) % 7;

    newDays.push(daysOfWeek[currentIndex]);
  }

  return newDays;
};
