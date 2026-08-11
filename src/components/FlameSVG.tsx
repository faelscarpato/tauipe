interface FlameSVGProps {
  className?: string
  animate?: boolean
}

export default function FlameSVG({ className = '', animate = true }: FlameSVGProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animate ? 'animate-flame-flicker' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M50 140C22.386 140 0 117.614 0 90C0 62 20 45 30 25C32 18 35 0 50 0C65 0 68 18 70 25C80 45 100 62 100 90C100 117.614 77.614 140 50 140Z"
        fill="url(#flameGradient)"
        opacity="0.9"
      />
      <path
        d="M50 130C27.909 130 10 112.091 10 90C10 66 26 51 34 35C36 29 38 15 50 15C62 15 64 29 66 35C74 51 90 66 90 90C90 112.091 72.091 130 50 130Z"
        fill="#EAB308"
        opacity="0.7"
      />
      <path
        d="M50 115C36.193 115 25 103.807 25 90C25 75 36 65 41 55C43 51 44 42 50 42C56 42 57 51 59 55C64 65 75 75 75 90C75 103.807 63.807 115 50 115Z"
        fill="#FEF3C7"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="flameGradient" x1="50" y1="0" x2="50" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
      </defs>
    </svg>
  )
}