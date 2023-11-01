const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const anniu = document.querySelector('.anniu')
anniu.addEventListener('click', () => {
  console.log(111)
  document.querySelector('.box img').src = `./images/${Math.floor(Math.random() * (13 - 1 + 1) + 1)}.png`
})