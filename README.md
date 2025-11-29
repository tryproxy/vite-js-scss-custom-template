### 📦 Template Overview

A custom **Vite** + **JS** + **SASS** starter template that loosely follows FSD methodology.  
With a lightweight UI kit, custom DOM renderer event broker, theming, i18n, route-disptacher and persistent state management.

1. `app` — application entry point (_layout router context global styles_)
2. `page` — page level view composition (_with draft screens for the app: start, settings, stats etc_)
3. `feature` — isolated application features (_theme switcher lang switcher_)
4. `shared` — reusable utilities UI kit with style blocks and UI components, storage and infrastructure code

The `shared` layer includes (`uikit` `utils` `storage` `dom` `event`):

- Modular SCSS architecture [**components**]
- Typography tokens color themes and font system [**theme**]
- Core mixins tokens spacing grid helpers [**core**]
- Atomic utility classes (Tailwind like) [**atomic**]
- LocalStorage wrapper for persistent feature states [**storage**]
- DOM helpers (`createElement` `render`) [**dom**]
- CustomEvent based event broker (`on` `emit` `all`) [**event**]
- General utilities (_various helpers_) [**utils**]

Additional features:

- Minimal i18n system with runtime language switching (`en` `fr`)
- Global keyboard event layer (`key:down` `key:up`)
- UIModal & UIButton components built on top of custom DOM renderer
- Router with modal support and screen based context

### 📦 Start

```bash
pnpm i          # install deps
pnpm dev        # dev server (port 4444)
pnpm build      # build to dist
pnpm prev       # preview build (port 5555)
```

> [!NOTE]
> This template has environment variables.
> Don't forget to remove the `.example` part from the provided `.env` files if needed.

**Version:** 0.1.0 - this is second iteration
