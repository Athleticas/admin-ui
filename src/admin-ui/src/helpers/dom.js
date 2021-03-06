import { isEmptyString } from './utils'

function getSize (el) {
  // let computed = window.getComputedStyle(el)
  // let rect = el.getBoundingClientRect()
  // return {
  //   width: el.offsetWidth || rect.width || parseInt(computed.width) || 0,
  //   height: el.offsetHeight || rect.height || parseInt(computed.height) || 0
  // }
  return {
    width: el.offsetWidth || 0,
    height: el.offsetHeight || 0
  }
}

export function getElementSize (el, isFragment) {
  let temp = getSize(el)
  if (temp.width || temp.height) return temp

  // clone the el
  let copy = el.cloneNode(true)
  // ste some style to minimize the influence to the document
  // if (isFragment) copy.setAttribute('style', 'visibility:hidden !important; display:block !important;')
  // else copy.setAttribute('style', 'visibility:hidden !important;')
  copy.style.visibility = 'hidden'
  copy.style.display = 'block'
  copy.style.position = 'absolute'
  copy.style.top = '-9999999px'
  copy.style.left = '-9999999px'

  let res = null
  // insert it to document
  // if (isFragment) document.body.appendChild(copy)
  // else el.parentNode.insertBefore(copy, el)
  document.body.appendChild(copy)
  res = getSize(copy)

  // remove it
  // if (isFragment) document.body.removeChild(copy)
  // else el.parentNode.removeChild(copy)
  document.body.removeChild(copy)
  return res
}

export function getElementPagePos (el) {
  function getLeft (el) {
    let actualLeft = el.offsetLeft
    let current = el.offsetParent

    while (current !== null) {
      actualLeft += current.offsetLeft
      current = current.offsetParent
    }

    return actualLeft
  }

  function getTop (el) {
    let actualTop = el.offsetTop
    let current = el.offsetParent

    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }

    return actualTop
  }

  return {
    left: getLeft(el),
    top: getTop(el)
  }
}

export function getWindowSize () {
  // 获取窗口宽度
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else if (document.body.clientWidth) {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }
}

export let isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1
export function mousewheel (action, element, handler) {
  if (element && element[action + 'EventListener']) {
    element[action + 'EventListener'](isFirefox ? 'DOMMouseScroll' : 'mousewheel', handler, { passive: true })
  }
}

function getOriginClasses (el) {
  let originClasses = []
  el.className.split(' ').forEach(cl => {
    if (!isEmptyString(cl)) originClasses.push(cl)
  })
  return originClasses
}
export function addClass (el, className) {
  if (el.className.indexOf(className) === -1) {
    let originClasses = getOriginClasses(el)
    originClasses.push(className)
    el.className = originClasses.join(' ')
  }
}

export function removeClass (el, className) {
  if (el.className.indexOf(className) !== -1) {
    let originClasses = getOriginClasses(el)
    let temp = []
    originClasses.forEach(cl => {
      if (cl !== className) temp.push(cl)
    })
    el.className = temp.join(' ')
  }
}

export function hasClass (el, className) {
  return getOriginClasses(el).indexOf(className.trim()) !== -1
}

export function isAncestor (el, ancestor) {
  let parent = el
  if (parent === ancestor) return true
  else if (el.parentNode) return isAncestor(el.parentNode, ancestor)
  else return false
}
