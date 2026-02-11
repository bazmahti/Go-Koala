# S'uNReel 2026 - GO KOALA! Proposal Website

## Overview
Interactive proposal website for "GO KOALA!" - an animated episodic series and multiplayer computer game concept by Ralph Lycett Tyrrell with animations and game development by Dr Baz (Barry Ferrier). The site presents characters, story episodes, game design analysis, platform/technology recommendations, and stylistic vision.

## Architecture
- **Frontend**: React + Vite with Tailwind CSS, Framer Motion for animations, wouter for routing
- **Backend**: Express.js (minimal - serves static content only)
- **Styling**: Australian bush theme with eucalyptus greens and warm ochre accents
- **Fonts**: Plus Jakarta Sans (body), Playfair Display (headings), Fira Code (mono)

## Pages
- `/` - Home: Hero section, concept overview, value propositions
- `/characters` - Character profiles for all 8 characters with images, traits, and game roles
- `/story` - 8 episodic story breakdowns with gameplay elements and interactive threads
- `/game-design` - Genre analysis, gamification systems, multiplayer modes, narrative design
- `/audience` - Target audience & demographics: biodiversity messaging, Indigenous culture, age segments, market insights, engagement strategies
- `/platform` - Platform comparison (PC/Console/Mobile/Web), engine/language recommendations
- `/style` - Art direction, animation style, sound design, camera systems, visual references

## Key Components
- `client/src/components/app-sidebar.tsx` - Navigation sidebar
- `client/src/components/theme-provider.tsx` - Light/dark theme support
- `client/src/components/theme-toggle.tsx` - Theme toggle button
- `client/src/pages/*` - All page components

## Generated Images
Character illustrations and hero landscape stored in `client/public/images/`
