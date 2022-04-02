const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function () {
  const result = [];
  console.log(books.length);
  for (let i = 0; i < books.length; i++) {
    result.push(books[i]["title"]);
    continue;
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
