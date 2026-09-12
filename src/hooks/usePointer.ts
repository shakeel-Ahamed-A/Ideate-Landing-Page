import { useEffect } from 'react'

export function usePointer() {
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!media.matches) return

    let frame = 0
    let point = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const render = () => {
      document.documentElement.style.setProperty('--x', `${point.x}px`)
      document.documentElement.style.setProperty('--y', `${point.y}px`)
      frame = 0
    }
    const move = (event: PointerEvent) => {
      point = { x: event.clientX, y: event.clientY }
      if (!frame) frame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
