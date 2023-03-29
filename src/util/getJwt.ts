/* eslint-disable no-unused-expressions */
export const getJwt = (): string | null => {
  //Apparently, the call to localStorage.length below (even without the console.log())
  // initializes localStorage with the correct values (in our case, the "jwt" key-value pair).
  //This line is necessary because without it, Firefox and Edge have a timing issue that causes them
  // to send null JWT values to the backend in some components (specifically when joining a game).
  //The console.log() part is not required, but is necessary because eslint will not let this code compile without
  // it being an expression (even though I have // disable-eslint-line and no-unused-expressions is disabled.)
  // disable-eslint-line
  //const x = localStorage.length; // disable-eslint-line
  const token = localStorage.getItem("jwt");
  return token ? token : null;
};
