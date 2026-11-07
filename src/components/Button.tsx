import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'wishlist' | 'form'
}

export function Button({ variant, className, children, ...rest }: Props) {
  return (
    <a
      className={`btn btn--${variant}${className ? ` ${className}` : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}
