const arrayLike = document.querySelectorAll('div')

Array.from(arrayLike);

Array.prototype.slice.call(arrayLike)

Array.apply(null,arrayLike)

Array.prototype.concat.apply([],arrayLike)