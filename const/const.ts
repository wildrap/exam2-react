export const createData = (firstName, lastName, dateOfBirth, custCode) => {
  return { firstName, lastName, dateOfBirth, custCode };
};

export const rows = [
  createData("Dick", "Grayson", "2021-01-01", "DickGrayson2021-01-01"),
  createData("Bruce", "Wayne", "2021-01-02", "BruceWayne2021-01-02"),
  createData("Clark", "Kent", "2021-01-03", "ClarkKent2021-01-03"),
];
