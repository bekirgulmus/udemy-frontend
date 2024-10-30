var Media;
(function (Media) {
    Media[Media["newPaper"] = 0] = "newPaper";
    Media[Media["newsletter"] = 1] = "newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine);
console.log(Media[3]);
// enum PrintMedia {
//   newPaper = 'NEWSPAPER',
//   newsletter = 'NEWSLETTER',
//   Magazine = 'MAGAZINE',
//   Book = 'BOOK',
// }
//
// console.log(PrintMedia.newPaper);
// console.log(PrintMedia['newPaper']);
