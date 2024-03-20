let date = new Date();

const options = {
  weekdey: "long",
  year: "numeric",
  month: "Short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

//Ukraine
const localeUk = date.toLocaleString("Uk-uk", options);
console.log(localeUk);

const localeUs = date.toLocaleString("en-US", options);
console.log(localeUs);
