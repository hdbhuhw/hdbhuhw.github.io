// 随机图片函数
(function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const anniu = document.querySelector('.anniu')
  anniu.addEventListener('click', () => {
    console.log(111)
    document.querySelector('.box img').src = `./images/${Math.floor(Math.random() * (13 - 1 + 1) + 1)}.png`
  })
})();
// 放大器函数
(function () {
  const middle = document.querySelector('.box')
  const large = document.querySelector('.large')
  const pic = document.querySelector('.box img')
  document.querySelector('.anniu').addEventListener('click', () => {
    large.style.backgroundImage = `url(${pic.src})`
  })
  // 3.鼠标经过图片，显示隐藏大盒子
  middle.addEventListener('mouseenter', show)
  middle.addEventListener('mouseleave', hide)
  // 4,鼠标经过大盒子，显示隐藏大盒子
  large.addEventListener('mouseenter', show)
  large.addEventListener('mouseleave', hide)
  let timeId = 0
  function show() {
    clearTimeout(timeId)
    large.style.display = 'block'
  }
  // 隐藏函数，隐藏大盒子
  function hide() {
    timeId = setTimeout(function () {
      large.style.display = 'none'
    }, 200)
  }
  // 5.鼠标经过中等盒子，显示黑色遮罩
  const layer = document.querySelector('.layer')
  middle.addEventListener('mouseenter', function () {
    layer.style.display = 'block'
  })
  middle.addEventListener('mouseleave', function () {
    layer.style.display = 'none'
  })
  // 6,移动黑色遮罩盒子
  middle.addEventListener('mousemove', function (e) {
    // 鼠标在middle 盒子里面的坐标 = 鼠标在页面中的坐标 - middle 中等盒子的坐标
    // console.log(e.pageX) //鼠标在页面的坐标
    let x = e.pageX - middle.getBoundingClientRect().left
    let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
    // console.log(x, y)
    //黑色遮罩要在middle内 限定移动距离
    if (x >= 0 && x <= 300 && y >= 0 && y <= 500) {
      // 黑色盒子不是一直移动
      //声明两个变量 
      let mx = 0, my = 0
      if (x < 75) mx = 0
      if (x >= 75 && x <= 225) mx = x - 75
      if (x > 225) mx = 150

      if (y < 125) my = 0
      if (y >= 125 && y <= 375) my = y - 125
      if (y > 375) my = 250
      layer.style.left = mx + 'px'
      layer.style.top = my + 'px'
      // 大盒子背景图片要跟随中等盒子移动, 存在的关系是2倍
      large.style.backgroundPositionX = -2 * mx + 'px'
      large.style.backgroundPositionY = -2 * my + 'px'
    }
  })
})()