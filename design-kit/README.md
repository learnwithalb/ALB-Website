# ALB Design Kit

Design tokens and components extracted directly from the live website (`src/styles/globals.css`).

## Files

| File | What it is | Use in Figma |
|------|------------|--------------|
| `ALB-Design-Kit.svg` | A full design-kit board (colours, type scale, buttons, cards, foundations) | **Drag the file into a Figma canvas** — it imports as editable vector layers/frames. |
| `alb-tokens.json` | Design tokens in **Tokens Studio** format | Import via the **Tokens Studio for Figma** plugin to get real colour/type/shadow variables. |

## How to get this into Figma

### Option A — Visual board (fastest)
1. Open any Figma file.
2. Drag `ALB-Design-Kit.svg` from your file explorer onto the canvas (or **File ▸ Place image**).
3. It lands as a group you can ungroup and edit. Right-click ▸ *Flatten* / *Outline* as needed.

### Option B — Real tokens / variables (recommended for a working library)
1. In Figma, install the free plugin **"Tokens Studio for Figma"** (Plugins ▸ search "Tokens Studio").
2. Run it ▸ **Settings** isn't needed for local import.
3. In the plugin, open the **⋯ menu ▸ Import ▸ choose `alb-tokens.json`** (or paste its contents into the JSON tab).
4. Click **Apply to document** — colours, font sizes, radii, and shadows become Figma styles/variables you can attach to layers.

> Combine both: import tokens (Option B) for a maintainable library, then keep the SVG board (Option A) as a one-page visual reference / cover.

## Why no native `.fig`
Figma's `.fig` is a closed binary format that can only be produced by the Figma editor itself — it can't be generated outside the app. SVG + Tokens Studio JSON are the standard, fully-supported way to hand off a kit into Figma, and both are editable once imported.

## Tokens at a glance

- **Primary:** `royal-500 #3b5bdb` (full 50–950 scale)
- **Accent:** `sky-300/400/500`; **highlight:** `amber-400/500` (stars only)
- **Text:** ink `#0e1733`, body `#46506e`, muted `#737d9c`
- **Surfaces:** white, mist `#f3f6ff`, haze `#e9efff`; dark sections navy `#02072a`
- **Type:** Satoshi (UI/body), Cormorant Garamond (display/signature)
- **Radius:** unified `8px` · **Shadows:** `soft`, `lift`
- **Gradients:** text `120° #3b5bdb→#6d8bff→#0ea5e9`, primary button `135° #3b5bdb→#5f80f5→#2f49c0`

_Fonts: Satoshi (Fontshare) and Cormorant Garamond (Google Fonts) are free — install them in Figma so text renders correctly; otherwise Figma substitutes a default._
