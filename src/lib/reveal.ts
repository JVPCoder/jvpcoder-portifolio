import type { CSSProperties } from 'react'

/**
 * Reveal [data-reveal] elements once as they scroll into view (CSS in index.css).
 * Call after each page renders; returns the cleanup.
 */
export function observeReveals(): () => void {
  const els = [...document.querySelectorAll('[data-reveal]:not([data-revealed])')]
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        // Also reveal everything earlier on the page: after a jump (deep link, End key) those
        // elements were skipped over and would otherwise stay invisible above the viewport.
        for (const el of els.slice(0, els.indexOf(entry.target) + 1)) {
          if (el.hasAttribute('data-revealed')) continue
          el.setAttribute('data-revealed', '')
          io.unobserve(el)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  els.forEach((el) => io.observe(el))
  return () => io.disconnect()
}

/** Stagger position for a revealed item (multiplied by --stagger in CSS). */
export const staggerStyle = (i: number) => ({ '--i': i }) as CSSProperties
