import { useEffect, useRef } from 'react'

const useScrollReveal = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default useScrollReveal
