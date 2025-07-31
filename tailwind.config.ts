import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
				primary: ['var(--font-primary)'],
				display: ['var(--font-display)'],
				inter: ['Inter', 'system-ui', 'sans-serif'],
				satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
			},
			colors: {
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					glass: 'hsl(var(--surface-glass))',
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: 'hsl(var(--secondary))',
				accent: 'hsl(var(--accent))',
				success: 'hsl(var(--success))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)',
				'premium': 'var(--shadow-premium)',
				'neuro': 'var(--neuro-shadow)',
			},
			backdropBlur: {
				'glass': 'var(--blur-glass)',
				'heavy': 'var(--blur-heavy)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
