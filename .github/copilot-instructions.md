# Copilot / AI Agent Instructions

**Purpose:** Short, actionable guidance to help an AI coding agent be immediately productive in this repository.

## Quick project summary
- Small single-page React app bootstrapped with Create React App (see `README.md`).
- All UI logic currently lives in `src/App.js` (three game modules: `TicTacToe`, `RockPaperScissors`, `NumberGuess`).
- No backend or APIs; state is local (React `useState`).
- Build & test via `npm` scripts in `package.json`: `npm start`, `npm test`, `npm run build`.

## Where to look first (high value files)
- `src/App.js` — main arena lobby and game modules (examples of component patterns).
- `src/index.js` — app bootstrap and `reportWebVitals` usage.
- `public/index.html` — host page and meta.
- `src/*.css` — simple global CSS files used for styling.
- `package.json` — dev scripts and dependencies (React, react-scripts).

## Typical code patterns and conventions
- Use function components and React hooks (`useState`). Follow patterns in `src/App.js`.
- Keep each new game as a self-contained component that accepts an `onExit` callback.
  - Example: `export default function MyGame({ onExit }) { /* local state, UI, onExit() */ }`
- Prefer small, focused files: if adding complexity, place components under `src/components/` or `src/games/`.
- Styling is simple CSS files imported per component; use descriptive class names (see `.ttt-board`, `.rps-buttons`).
- Tests use React Testing Library. Name test files `*.test.js` and keep them next to implementation where reasonable.

## How to add a new game (practical steps)
1. Create `src/games/MyGame.js` exporting a React component that takes `{ onExit }`.
2. Add styles in `src/games/MyGame.css` and import into the component.
3. Update lobby in `src/App.js`: add a card in `.card-container` and conditionally render the component.
4. Add simple unit/UI tests (`src/games/MyGame.test.js`) to verify basic behavior (render, exit button works).

Example lobby update (conceptual):

- Add card: `<div className="card" onClick={() => setActiveGame('my')}>My Game</div>`
- Add renderer: `{activeGame === 'my' && <MyGame onExit={() => setActiveGame(null)} />}`

## Build / Test / Debug tips
- Start dev server: `npm start` → opens at `http://localhost:3000` and hot-reloads changes.
- Run tests: `npm test` (interactive watch mode).
- Build for production: `npm run build` → output in `build/`.
- There are no additional linters or CI configs present in the repo — run tests locally before PRs.

## Integration points & external deps
- No external HTTP APIs or services are used in the codebase.
- Dependencies are minimal: React, `react-scripts`, and testing libraries. Check `package.json` before adding new packages.

## Things NOT to change without verification
- Do not replace `react-scripts` tooling without discussing; the project is CRA-based and relies on default scripts.
- Avoid moving all games into a new architecture without tests and a small migration plan.

## For PRs and edits by an AI agent
- Make small, focused changes with one logical subject per PR.
- Include or update tests when behavior changes.
- Update `README.md` or this file when adding new developer-facing scripts or commands.

---

If anything above is unclear or you'd like specific templates (component + test + style), tell me which game pattern to mirror and I will add a concrete starter example. ✅
