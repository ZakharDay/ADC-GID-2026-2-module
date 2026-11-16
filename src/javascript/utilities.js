function getRectWithoutBorder(element) {
  const rect = element.getBoundingClientRect()

  // clientTop и clientLeft равны толщине верхней и левой рамок в пикселях
  const top = rect.top + element.clientTop
  const left = rect.left + element.clientLeft

  // clientWidth и clientHeight равны ширине и высоте внутри рамок (включая padding)
  const width = element.clientWidth
  const height = element.clientHeight

  return {
    top,
    left,
    width,
    height,
    right: left + width,
    bottom: top + height
  }
}

export { getRectWithoutBorder }
