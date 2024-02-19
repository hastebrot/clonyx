# onyx-react

**setup:**

- `❯ git clone https://github.com/hastebrot/clonyx`
- `❯ cd clonyx/onyx-react/`
- `❯ bun install`
- `❯ bunx --bun playwright install`

**usage:**

- `❯ cd onyx-react/`
- `❯ bun run dev --port 6020`
- `❯ open -a safari --url "http://localhost:6020/"`
- `❯ bunx --bun playwright test --project=safari --update-snapshots`
- `❯ bunx --bun playwright test --project=safari`

---

**initial setup:**

vite frontend tooling

- `❯ bun create vite onyx-react --template react-swc-ts`
- `❯ cd onyx-react/`
- `❯ bun install`
- `❯ bun run dev --port 6020`
- `❯ open -a safari --url "http://localhost:6020/"`
- `❯ bun vite build`
- more: https://bun.sh/guides/ecosystem/vite

tailwind css

- `❯ bun add -d tailwindcss postcss autoprefixer`
- `❯ bun tailwindcss init --postcss --esm`
- more: https://tailwindcss.com/docs/guides/vite

react clsx utility

- `❯ bun add -d clsx`

react svg icons

- `❯ bun add -d lucide-react`

react aria components

- `❯ bun add -d react-aria-components`

react routing

- `❯ bun add -d react-router-dom`
- more: https://reactrouter.com/en/main/start/tutorial

react testing

- `❯ bun add -D @types/bun vitest`
- `❯ bun add -D happy-dom @testing-library/react @testing-library/user-event`

browser testing

- `❯ bun add -d @types/node @playwright/test`
- more: https://playwright.dev/docs/intro
