const localDate = () => {
  let date = new Date();
  return date.toLocaleString();
};

console.log(localDate());
