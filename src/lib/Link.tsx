import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from './router.ts'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** <a> that navigates client-side; new-tab / modified clicks keep browser behavior. */
export function Link({ href, onClick, ...rest }: LinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    if (event.defaultPrevented || modified || event.button !== 0 || rest.target) return
    event.preventDefault()
    navigate(href)
  }
  return <a href={href} onClick={handleClick} {...rest} />
}
