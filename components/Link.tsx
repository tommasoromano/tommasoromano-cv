/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { RainboWBg, RainbowText } from './Rainbow'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink

export const TextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    // <RainbowText>
    <span className="decoration-primary font-bold underline">
      <CustomLink href={href ? href : '#'}>
        {children}
        {/* {href && !href.startsWith('#') && '🔗'} */}
      </CustomLink>
    </span>
    // </RainbowText>
  )
}
