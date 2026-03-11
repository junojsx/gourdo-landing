## 🎨 Visual & UX Design

### Design Direction: **Modern Minimalism with Playful Interactions**

The app should feel **intentional and focused** (minimalist foundation) while maintaining **delightful micro-interactions** (key unlock animation, smooth transitions). The aesthetic is clean, typography-forward, with strategic use of color and motion.

#### Color Palette (WCAG 2.1 AA)

All pairings below meet **WCAG 2.1 Level AA**: ≥ 4.5:1 for normal text and ≥ 3:1 for large text / UI components on the stated backgrounds.

| Role | Name | Hex | Usage | Contrast on background-light |
|------|------|-----|--------|------------------------------|
| Primary | Purple | `#690dab` | Buttons, active tab, progress, key earned, primary actions | 8.7:1 ✓ |
| Background (light) | Off-white | `#f7f6f8` | Main screen background | — |
| Background (dark) | Dark purple | `#1a1022` | Dark surfaces, alternate sections | — |
| Text / UI | Graphite | `#151118` | Primary text, icons | 17.3:1 ✓ |
| Success / Active | Forest green | `#1a6b1a` | Success state, “Productivity boost active” badge, checkmarks | 6.2:1 ✓ |
| Muted / Inactive | Slate gray | `#6b6b6b` | Secondary text, dividers, disabled state | 5.0:1 ✓ |

- **primary**: `#690dab` — Primary actions, active session, progress fill, CTA buttons. White text on primary: 9.4:1 ✓
- **background-light**: `#f7f6f8` — Default app background
- **background-dark**: `#1a1022` — Dark cards or secondary background. White text: 18.4:1 ✓
- **graphite**: `#151118` — Headings, body text, icons
- **forest-green**: `#1a6b1a` — Success and active indicators (darkened from `#228b22` to pass 4.5:1 on light background)
- **slate gray**: `#6b6b6b` — Muted text and UI; do not use lighter grays for body text on `background-light`.

**Contrast requirements (WCAG 2.1):** Normal text needs ≥ 4.5:1, large text (14pt+ bold or 18pt+) and UI components ≥ 3:1. When introducing new colors, check foreground/background pairs (e.g. with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)).

### Dark Mode Color Palette
- Primary    Accessible Purple    #A855F7    Buttons, active tab, progress bars, key earned    
- Background (main)    Midnight Purple    #120A18    Main screen background    —
- Background (surface)    Dark Violet    #1E1328    Cards, panels    —
- Background (raised)    Soft Plum    #2A1C36    Elevated UI, modals    —
- Text (primary)    Soft White    #F4F0FF    Main text, icons    
- Text (secondary)    Lavender Gray    #C4B8D6    Secondary text    
- Success / Active    Accessible Green    #34C759    Success badges, checkmarks    
- Muted / Inactive    Slate Lavender    #8E869C    Disabled text, dividers    

#### Typography
- **Display**: "Syne" (Bold, geometric) - Headers, task titles
- **Body**: "Inter" (Refined, neutral) - Instructions, descriptions
- **Monospace**: "JetBrains Mono" - Timer displays

#### Key Visual Elements
- Minimalist padlock icon (stroke-based, not filled)
- Animated key rotating and sliding into lock
- Smooth fade transitions between screens
- Generous whitespace
- Soft shadows for depth
- Rounded corners (16pt default radius)

---

