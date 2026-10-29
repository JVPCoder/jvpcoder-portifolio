import { useSyncExternalStore } from 'react'
import { parseRoute } from './route.ts'

const NAV_EVENT = 'app:navigate'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener(NAV_EVENT, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(NAV_EVENT, onChange)
  }
}

export function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname)
}

export const useRoute = () => parseRoute(usePathname())

let navigated = false

/** True once the visitor has moved between pages (startup redirects don't count). */
export const hasNavigated = () => navigated

export function navigate(to: string, { replace = false } = {}) {
  const samePage = new URL(to, window.location.href).pathname === window.location.pathname
  if (replace) window.history.replaceState(null, '', to)
  else {
    window.history.pushState(null, '', to)
    navigated = true
  }
  window.dispatchEvent(new Event(NAV_EVENT))
  // pushState doesn't scroll, so do it after React renders the new page.
  // Only same-page section links glide; a new page starts in place, never visibly scrolling.
  const hash = to.split('#')[1]
  requestAnimationFrame(() => {
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  })
}
