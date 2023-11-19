(function () {
  // 显示内容函数
  function show(str) {
    const shows = document.querySelector('.show')
    shows.innerHTML = str
  }
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  let arr2 = []
  let results = null
  show(arr2.join(''))
  // 监听点击事件得到输入的值
  document.querySelector('.box').addEventListener('click', e => {
    arr.forEach(item => {
      if (e.target.dataset.id === `${item}`) {
        arr2.push(e.target.innerHTML)
      }
    })
    show(arr2.join(''))
  })
  // 运算
  document.querySelector('.results').addEventListener('click', () => {
    try {
      results = eval(arr2.join(''))
    }
    catch {
      // 如果输入错误弹窗
      alert('请输入正确的运算式')
    }
    finally {
      // 正确
      arr2 = []
      arr2.push(results)
      show(arr2.join(''))
    }
  })
  // 归零键
  document.querySelector('.reset').addEventListener('click', () => {
    arr2 = []
    show(arr2.join(''))
  })
})()