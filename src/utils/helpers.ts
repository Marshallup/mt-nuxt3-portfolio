export function getAbsolutePositionHtmlEl(el: HTMLElement) {
  const { top, left } = el.getBoundingClientRect()

  return {
    top: top + window.scrollY,
    left: left + window.scrollX
  }
}

export function getPercentValFromNum(num: number, percent: number) {
  return num / 100  * percent
}