const popcounter = function () {
  let popularity;
  if (this.likes - this.dislikes >= 5) {
    popularity = "hot";
  } else {
    popularity = "regular";
  }
  return popularity;
};

export default popcounter;
