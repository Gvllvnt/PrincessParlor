"use client"

import type { ComponentType, ReactNode } from "react"
import { motion } from "framer-motion"

const float = (delay = 0, duration = 4) => ({
  animate: {
    y: [0, -12, 0],
    rotate: [-3, 3, -3],
  },
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
})

const wiggle = (delay = 0) => ({
  animate: { rotate: [-8, 8, -8] },
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay },
})

function CartoonPrincess({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden>
      <ellipse cx="60" cy="125" rx="35" ry="8" fill="#E8B4F8" opacity="0.5" />
      <path d="M35 95 Q60 70 85 95 L80 125 Q60 135 40 125 Z" fill="#FF9EC8" />
      <path d="M30 95 Q60 55 90 95" fill="#FFD6EC" stroke="#FF6B9D" strokeWidth="2" />
      <circle cx="60" cy="52" r="28" fill="#FFE4C4" stroke="#FF6B9D" strokeWidth="2" />
      <ellipse cx="48" cy="50" rx="5" ry="6" fill="#4A3728" />
      <ellipse cx="72" cy="50" rx="5" ry="6" fill="#4A3728" />
      <circle cx="49" cy="48" r="1.5" fill="white" />
      <circle cx="73" cy="48" r="1.5" fill="white" />
      <path d="M52 62 Q60 70 68 62" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="58" r="5" fill="#FFB6C1" opacity="0.6" />
      <circle cx="78" cy="58" r="5" fill="#FFB6C1" opacity="0.6" />
      <path d="M32 35 L40 20 L50 32 L60 15 L70 32 L80 20 L88 35" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5" />
      <circle cx="60" cy="18" r="6" fill="#FF69B4" />
      <path d="M25 55 Q15 45 20 35" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M95 55 Q105 45 100 35" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function CartoonScissors({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="25" cy="75" r="18" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
      <circle cx="75" cy="75" r="18" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
      <circle cx="25" cy="75" r="8" fill="#DBEAFE" />
      <circle cx="75" cy="75" r="8" fill="#DBEAFE" />
      <path d="M25 57 L50 25 L75 57" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="50" cy="22" r="8" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
      <path d="M42 18 L50 8 L58 18" fill="#FBBF24" />
      <ellipse cx="35" cy="40" rx="4" ry="3" fill="#4A3728" />
      <ellipse cx="65" cy="40" rx="4" ry="3" fill="#4A3728" />
      <path d="M38 48 Q50 55 62 48" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function CartoonStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <path
        d="M40 5 L48 30 L75 30 L54 47 L62 72 L40 57 L18 72 L26 47 L5 30 L32 30 Z"
        fill="#FDE047"
        stroke="#F59E0B"
        strokeWidth="2"
      />
      <circle cx="32" cy="38" r="3" fill="#4A3728" />
      <circle cx="48" cy="38" r="3" fill="#4A3728" />
      <path d="M34 48 Q40 54 46 48" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="42" r="3" fill="#FBBF24" opacity="0.5" />
      <circle cx="52" cy="42" r="3" fill="#FBBF24" opacity="0.5" />
    </svg>
  )
}

function CartoonButterfly({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden>
      <ellipse cx="30" cy="35" rx="22" ry="18" fill="#C084FC" opacity="0.85" />
      <ellipse cx="70" cy="35" rx="22" ry="18" fill="#F472B6" opacity="0.85" />
      <ellipse cx="28" cy="50" rx="14" ry="12" fill="#A78BFA" opacity="0.7" />
      <ellipse cx="72" cy="50" rx="14" ry="12" fill="#FB7185" opacity="0.7" />
      <ellipse cx="50" cy="42" rx="4" ry="20" fill="#4A3728" />
      <circle cx="50" cy="22" r="8" fill="#4A3728" />
      <circle cx="47" cy="20" r="2" fill="white" />
      <circle cx="53" cy="20" r="2" fill="white" />
      <path d="M44 26 Q50 30 56 26" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  )
}

function CartoonBalloon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} aria-hidden>
      <ellipse cx="30" cy="35" rx="24" ry="30" fill="#FF6B9D" stroke="#E11D48" strokeWidth="2" />
      <ellipse cx="24" cy="28" rx="6" ry="10" fill="white" opacity="0.35" />
      <path d="M30 65 L28 90" stroke="#6B7280" strokeWidth="2" fill="none" />
      <path d="M28 90 L22 95 M28 90 L34 95" stroke="#6B7280" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function CartoonCrown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" className={className} aria-hidden>
      <path
        d="M10 55 L20 25 L35 45 L45 15 L55 45 L70 25 L80 55 Z"
        fill="#FDE047"
        stroke="#F59E0B"
        strokeWidth="2"
      />
      <rect x="10" y="55" width="70" height="12" rx="3" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
      <circle cx="20" cy="25" r="5" fill="#FF69B4" />
      <circle cx="45" cy="15" r="6" fill="#FF69B4" />
      <circle cx="70" cy="25" r="5" fill="#FF69B4" />
      <circle cx="35" cy="40" r="3" fill="#60A5FA" />
      <circle cx="55" cy="40" r="3" fill="#60A5FA" />
    </svg>
  )
}

function CartoonRainbow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden>
      <path d="M10 60 A50 50 0 0 1 110 60" stroke="#FF6B9D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M18 60 A42 42 0 0 1 102 60" stroke="#FBBF24" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M26 60 A34 34 0 0 1 94 60" stroke="#4ADE80" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M34 60 A26 26 0 0 1 86 60" stroke="#60A5FA" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M42 60 A18 18 0 0 1 78 60" stroke="#C084FC" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="20" cy="62" rx="12" ry="6" fill="white" opacity="0.8" />
      <ellipse cx="100" cy="62" rx="12" ry="6" fill="white" opacity="0.8" />
    </svg>
  )
}

function CartoonComb({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 90" className={className} aria-hidden>
      <rect x="15" y="5" width="40" height="35" rx="8" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
      <circle cx="28" cy="18" r="4" fill="#FDE047" />
      <circle cx="42" cy="18" r="4" fill="#60A5FA" />
      <circle cx="35" cy="30" r="4" fill="#4ADE80" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={18 + i * 5} y="42" width="4" height="45" rx="2" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1" />
      ))}
    </svg>
  )
}

type CartoonType =
  | "princess"
  | "scissors"
  | "star"
  | "butterfly"
  | "balloon"
  | "crown"
  | "rainbow"
  | "comb"

const cartoonMap: Record<CartoonType, ComponentType<{ className?: string }>> = {
  princess: CartoonPrincess,
  scissors: CartoonScissors,
  star: CartoonStar,
  butterfly: CartoonButterfly,
  balloon: CartoonBalloon,
  crown: CartoonCrown,
  rainbow: CartoonRainbow,
  comb: CartoonComb,
}

interface FloatingCartoonProps {
  type: CartoonType
  className?: string
  delay?: number
  size?: "sm" | "md" | "lg"
  wiggle?: boolean
}

export function FloatingCartoon({
  type,
  className = "",
  delay = 0,
  size = "md",
  wiggle: useWiggle = false,
}: FloatingCartoonProps) {
  const Cartoon = cartoonMap[type]
  const sizeClass =
    size === "sm" ? "w-16 h-16 md:w-20 md:h-20" : size === "lg" ? "w-28 h-28 md:w-36 md:h-36" : "w-20 h-20 md:w-28 md:h-28"

  const motionProps = useWiggle ? wiggle(delay) : float(delay)

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      {...motionProps}
    >
      <Cartoon className={`${sizeClass} drop-shadow-lg`} />
    </motion.div>
  )
}

interface SectionCartoonsProps {
  variant: "hero" | "about" | "services" | "gallery" | "how-it-works" | "contact" | "footer"
}

export function SectionCartoons({ variant }: SectionCartoonsProps) {
  const layouts: Record<SectionCartoonsProps["variant"], ReactNode> = {
    hero: (
      <>
        <FloatingCartoon type="princess" className="absolute left-2 top-28 md:left-8 md:top-32" delay={0} size="lg" />
        <FloatingCartoon type="balloon" className="absolute right-4 top-24 md:right-12 md:top-28" delay={0.5} size="md" />
        <FloatingCartoon type="star" className="absolute left-[15%] bottom-32" delay={1} size="sm" wiggle />
        <FloatingCartoon type="butterfly" className="absolute right-[12%] bottom-40" delay={1.2} size="sm" />
        <FloatingCartoon type="crown" className="absolute right-[8%] top-[45%] hidden md:block" delay={0.8} size="sm" wiggle />
        <FloatingCartoon type="rainbow" className="absolute left-[5%] top-[55%] hidden lg:block" delay={0.3} size="md" />
      </>
    ),
    about: (
      <>
        <FloatingCartoon type="scissors" className="absolute -left-2 top-8 md:left-4" delay={0.2} size="md" wiggle />
        <FloatingCartoon type="star" className="absolute right-2 top-16 md:right-8" delay={0.6} size="sm" />
        <FloatingCartoon type="comb" className="absolute right-0 bottom-12 hidden md:block" delay={1} size="sm" />
      </>
    ),
    services: (
      <>
        <FloatingCartoon type="crown" className="absolute left-4 top-4 md:left-12" delay={0} size="lg" wiggle />
        <FloatingCartoon type="balloon" className="absolute right-2 top-8 md:right-16" delay={0.4} size="md" />
        <FloatingCartoon type="butterfly" className="absolute left-8 bottom-8 hidden md:block" delay={0.8} size="sm" />
        <FloatingCartoon type="star" className="absolute right-12 bottom-4" delay={1.2} size="sm" wiggle />
      </>
    ),
    gallery: (
      <>
        <FloatingCartoon type="princess" className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block" delay={0.3} size="md" />
        <FloatingCartoon type="star" className="absolute right-4 top-8" delay={0} size="md" wiggle />
        <FloatingCartoon type="rainbow" className="absolute right-8 bottom-8 hidden md:block" delay={0.6} size="sm" />
      </>
    ),
    "how-it-works": (
      <>
        <FloatingCartoon type="balloon" className="absolute left-2 top-12" delay={0.2} size="md" />
        <FloatingCartoon type="scissors" className="absolute right-4 top-8 hidden md:block" delay={0.5} size="sm" wiggle />
        <FloatingCartoon type="crown" className="absolute left-12 bottom-8 hidden md:block" delay={0.8} size="sm" />
      </>
    ),
    contact: (
      <>
        <FloatingCartoon type="butterfly" className="absolute left-4 top-8" delay={0} size="md" />
        <FloatingCartoon type="star" className="absolute right-6 top-12" delay={0.4} size="sm" wiggle />
        <FloatingCartoon type="balloon" className="absolute right-2 bottom-16 hidden md:block" delay={0.7} size="sm" />
      </>
    ),
    footer: (
      <>
        <FloatingCartoon type="star" className="absolute left-8 top-8 opacity-80" delay={0} size="sm" />
        <FloatingCartoon type="crown" className="absolute right-8 top-6 opacity-80" delay={0.5} size="sm" wiggle />
      </>
    ),
  }

  return <motion.div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">{layouts[variant]}</motion.div>
}
