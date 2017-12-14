import Vue from 'vue'
import template from './loading.vue'

export default (config = {}) => {
  let instance = new (Vue.extend(template))()
  let {
    target = document.body,
    text,
    color = 'primary'
  } = config
  function colorValidator (v) {
    return ['primary', 'danger', 'info', 'success', 'warning'].indexOf(v) !== -1 || console.warn('Admin UI@au-loading@color must be one of the type below: primary, danger, info, success, warning')
  }
  let {
    position,
    width,
    height,
    // paddingTop,
    // paddingBottom,
    // paddingLeft,
    // paddingRight,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth
  } = getComputedStyle(target)
  if (position === 'static') {
    target.style.position = 'relative'
  }
  let size = Math.min(
    parseInt(width) - parseInt(borderLeftWidth) - parseInt(borderRightWidth),
    parseInt(height) - parseInt(borderTopWidth) - parseInt(borderBottomWidth)
  )
  size = size > 50 ? 50 : size

  instance.text = text
  instance.size = size
  instance.color = colorValidator(color) ? color : 'primary'

  instance.$mount(document.createElement('div'))

  target.appendChild(instance.$el)
  // instance.setColor()
  instance.setTop(parseInt(height) - parseInt(borderTopWidth) - parseInt(borderBottomWidth))

  return instance
}
