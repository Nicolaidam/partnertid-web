import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				body: ['var(--font-body)', 'serif'],
				display: ['var(--font-display)', 'serif'],
				sans: ['var(--font-body)', 'serif'],
			},
			spacing: {
				72: '18rem',
				88: '22rem',
				104: '26rem',
			},
			fontSize: {
				display: ['clamp(2.75rem, 4vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'section-title': ['clamp(2rem, 2.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				body: ['clamp(0.95rem, 1vw + 0.25rem, 1.1rem)', { lineHeight: '1.75' }],
				'small-body': ['0.875rem', { lineHeight: '1.6' }],
			},
			letterSpacing: {
				tighter: '-0.05em',
				widest: '0.35em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					warm: {
						light: 'hsl(var(--brand-warm-light))',
						DEFAULT: 'hsl(var(--brand-warm))',
						dark: 'hsl(var(--brand-warm-dark))'
					},
					sand: {
						light: 'hsl(var(--brand-sand-light))',
						DEFAULT: 'hsl(var(--brand-sand))',
						dark: 'hsl(var(--brand-sand-dark))'
					},
					terracotta: {
						light: 'hsl(var(--brand-terracotta-light))',
						DEFAULT: 'hsl(var(--brand-terracotta))',
						dark: 'hsl(var(--brand-terracotta-dark))'
					},
					green: {
						light: 'hsl(var(--brand-green-light))',
						DEFAULT: 'hsl(var(--brand-green))',
						dark: 'hsl(var(--brand-green-dark))'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.25rem',
				'2xl': '1.75rem'
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
				'slide-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-gentle': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite'
			}
		}
	},
	plugins: [animate],
} satisfies Config;
