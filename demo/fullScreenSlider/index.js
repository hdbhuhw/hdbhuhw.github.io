
const leftbtn = document.querySelector('.buttons .left')
const rightbtn = document.querySelector('.buttons .right')
const slide = document.querySelector('#slide')
// 节流变量
let openclick = true
rightbtn.addEventListener('click', () => {
  // 触发后禁用按钮
  if (openclick) {
    openclick = false
    // 实时获取最新的item列表
    const items = document.querySelectorAll('.item')
    // 点击时将第一张图移动到最后
    slide.appendChild(items[0])
    // 动画结束后再开放按钮
    setTimeout(() => { openclick = true }, 1000)
  }
})
leftbtn.addEventListener('click', () => {
  // 触发后禁用按钮
  if (openclick) {
    openclick = false
    // 实时获取最新的item列表
    const items = document.querySelectorAll('.item')
    // 点击时将第一张图移动到最后
    slide.prepend(items[items.length - 1])
    // 动画结束后再开放按钮
    setTimeout(() => { openclick = true }, 1000)
  }
})