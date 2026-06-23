import { useEffect } from 'react'

/**
 * Reveals elements tagged with [data-reveal] as they scroll into view.
 * Robust by design: no-ops when the reveal-ready flag is absent (reduced
 * motion / no-JS), reveals everything if IntersectionObserver is missing,
 * and a fail-safe timer guarantees nothing ever stays stuck hidden.
 */
export function useReveal() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('reveal-ready')) return

    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!targets.length) return

    const reveal = (el) => el.classList.add('is-visible')

    if (!('IntersectionObserver' in window)) {
      targets.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )

    targets.forEach((el) => io.observe(el))

    // Safety net: never leave anything stuck hidden.
    const failSafe = window.setTimeout(() => targets.forEach(reveal), 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(failSafe)
    }
  }, [])
}
