(function () {
  let sum = 0
  const timeout = document.querySelector('.timeout')
  const randoma = document.querySelector('.randoma')
  const randomb = randoma.nextElementSibling
  function getRandom(N, M) {
    return Math.floor(Math.random() * (M - N + 1) + N)
  }
  function showFraction() {
    document.querySelector('.fraction').innerHTML = sum
  }
  let flag = false
  document.querySelector('.start').addEventListener('click', () => {
    timeout.style.display = 'block'
    let num = 4
    let timer = setInterval(() => {
      num--
      timeout.innerHTML = `${num}秒后开始`
      if (num === 1) {
        timeout.innerHTML = `开始`
      }
      if (num === 0) {
        timeout.style.display = 'none'
        flag = true
        clearInterval(timer)
      }
    }, 1000)
    setTimeout(() => {
      randoma.style.display = 'block'
      randomb.style.display = 'block'
      let timer2 = setInterval(() => {
        const random1 = getRandom(395, 1100)
        const random2 = getRandom(0, 800)
        const random3 = getRandom(395, 1100)
        const random4 = getRandom(0, 800)
        randoma.style.transform = `translateX(${random1}px) translateY(${random2}px)`
        randomb.style.transform = `translateX(${random3}px) translateY(${random4}px)`
      }, 600)
    }, 4000)
    document.querySelector('.container').addEventListener('click', e => {
      if (e.target.dataset.id === '1') {
        sum += 100
        showFraction()
      }
    })
    document.querySelector('.reset').addEventListener('click', () => {
      location.reload()
    })
  })
})()