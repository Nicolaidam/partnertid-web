import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	content: [
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				brand: {
					warm: {
						light: "hsl(var(--brand-warm-light))",
						DEFAULT: "hsl(var(--brand-warm))",
						dark: "hsl(var(--brand-warm-dark))",
					},
					sand: {
						light: "hsl(var(--brand-sand-light))",
						DEFAULT: "hsl(var(--brand-sand))",
						dark: "hsl(var(--brand-sand-dark))",
					},
					terracotta: {
						light: "hsl(var(--brand-terracotta-light))",
						DEFAULT: "hsl(var(--brand-terracotta))",
						dark: "hsl(var(--brand-terracotta-dark))",
					},
					green: {
						light: "hsl(var(--brand-green-light))",
						DEFAULT: "hsl(var(--brand-green))",
						dark: "hsl(var(--brand-green-dark))",
					},
				},
			},
			fontSize: {
				h1: ['clamp(2.4rem, 3.3vw, 2.9rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
				h2: ['clamp(2.0rem, 2.7vw, 2.1rem)', { lineHeight: '1.2', letterSpacing: '0.015em' }],
				h3: ['1.375rem', { lineHeight: '1.3' }],
				h4: ['0.7875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
				body: ['clamp(0.95rem, 1.2vw, 1rem)', { lineHeight: '1.6' }],
				small: ['0.8125rem', { lineHeight: '1.6' }],
				caption: ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
			},
			fontFamily: {
				body: ['var(--font-body)', 'serif'],
				display: ['var(--font-display)', 'sans-serif'],
				sans: ['var(--font-display)', 'sans-serif'],
			},
			letterSpacing: {
				display: '0.03em',
				headline: '0.02em',
				emphasis: '0.04em',
				button: '0.08em',
				label: '0.12em',
				eyebrow: '0.2em',
				caps: '0.28em',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.25rem',
				'2xl': '1.75rem',
				'5xl': '3rem'
			},
			aspectRatio: {
				'4/5': '4 / 5'
			},
			gridTemplateColumns: {
				hero: '1.2fr 0.8fr'
			},
			maxWidth: {
				'70p': '70%'
			},
			maxHeight: {
				dropdown: 'var(--radix-dropdown-menu-content-available-height)'
			},
			transformOrigin: {
				dropdown: 'var(--radix-dropdown-menu-content-transform-origin)'
			},
			scale: {
				102: '1.02'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
			}
		}
	},
	plugins: [animate],
} satisfies Config;
