# SvelteBox

Fediverse for digital proles. SvelteBox provides a pleroma frontend designed to be fast and resource effecient for both the server and the client.

## Design

There are a few general design principles.

 - Fully exploits the SvelteKit application framework.
 - Light on dependencies to improve development speed and reduce attack surface.
 - Treats typescript as IDE tooling, used from comments.
 - Only targets the Pleroma backend (others may be supported by accident or if it is not much maintanence work). 
 - Exposes *all* functionality, avoiding the need for alternative frontends.
 - Works both in the browser and as a PWA on mobile.

> Note: SvelteBox is still very early in its development phase. Nothing is currently implemented.

## Developing

Only a few steps are required to get started with development:

```sh
git clone git@github.com:dykatz/sveltebox.git
cd sveltebox
npm install
npm run dev -- --open
```

It can be editied in any editor, but VS Code with the Svelte extension is recommended.

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```sh
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## License

SvelteBox is under the AGPLv3 license.
