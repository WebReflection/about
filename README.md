# Andrea Giammarchi

*Principal Software Engineer · core web platform, performance, security, and the full stack · 25+ years hands-on*

**Italy (CET) · remote 100%** · [GitHub](https://github.com/WebReflection/) · [LinkedIn](https://www.linkedin.com/in/andrea-giammarchi-465bb61/) · [X](https://x.com/WebReflection) · [Blog](https://webreflection.medium.com/)

---

## Summary

I have been building software professionally for over 25 years, across databases, backends, frontends, and several languages. I work on core infrastructure, performance, and hard problems — the platform underneath the product rather than the visual UI, though I am comfortable across the full stack when a project needs it.

Today I am a Principal Software Engineer and core developer at [Kilo](https://kilo.ai/), the open-source AI coding agent. Before that I co-led [PyScript](https://pyscript.net/) for three years at Anaconda, was tech lead for Nokia's online Maps, and shipped web software at Facebook, Twitter, and Adblock Plus (Eye/o).

## Experience

**Kilo — Principal Software Engineer, core developer** · YYYY–present · Remote

- Core developer of the open-source AI coding agent, working on the product and the platform behind it. The codebase is written entirely in TypeScript.
- Agent-style integration: MCP servers, tool routing, and related protocols that connect models to applications and backends without leaning on heavy frameworks.

**Anaconda — PyScript co-lead** · YYYY–YYYY · Remote

- Co-led [PyScript](https://pyscript.net/) for three years: codebase, community, and technical direction.
- The work was runtime architecture, not UI: Python in the browser on WebAssembly (CPython and MicroPython), Worker-backed interpreters, `SharedArrayBuffer`, and a `Proxy`-based foreign-function boundary between JavaScript and Python.
- Contributed to IoT-related projects with Tufts University (Bluetooth, WebSockets, serial) for robotics.

**Nokia — Tech lead, online Maps** · YYYY–YYYY · Berlin

- Led the online Maps product; two patents filed during development.
- A web-native stack that, at the time, delivered one of the fastest map experiences available.

**Facebook** · YYYY–YYYY · Menlo Park

- Desktop and mobile: PHP backend, JavaScript frontend. Collaborated with engineers who later created React.

**Twitter** · YYYY–YYYY · San Francisco

- Mobile: Ruby backend, JavaScript frontend, with UI built alongside dedicated designers.
- Contributed to an early high-performance mobile web experience, before "PWA" was a common term.

**Eye/o — Core developer, Adblock Plus** · YYYY–YYYY · Germany

- Core developer on Adblock Plus; introduced [hyperHTML](https://github.com/WebReflection/hyperHTML) to the extension ecosystem.
- Web-platform work, including collaboration with Igalia on the CSS `:has()` selector.

## Open Source & Standards

- **TC39 / ECMAScript** — contributions to the JavaScript standard.
- **Python standards** — contributed to [PEP 750](https://peps.python.org/pep-0750/#acknowledgements), including creating the first version of [tdom](https://github.com/t-strings/tdom), and to [PEP 818](https://peps.python.org/pep-0818/#acknowledgments).
- **Libraries** — author of open source used widely in production, including [hyperHTML](https://github.com/WebReflection/hyperHTML) and [flatted](https://github.com/WebReflection/flatted), which also has a PHP port: [![Downloads](https://img.shields.io/npm/dm/flatted.svg)](https://www.npmjs.com/package/flatted)
- **SQLite in WASM** — I maintain a WASM module for client-side persistence, shipped in production across web backends, IoT devices, and desktop applications.

## AI & Local Inference

- [DS4 Chat](https://github.com/WebReflection/ds4-chat) — a minimal, reactive take on the usual llama.cpp-style UI: generator queues, persistent JSON storage, async streaming, highlighting, and related plumbing following current best practices; a live Web UI toggle for reasoning vs. direct answers; and a small **OpenAI-compatible orchestrator** built from vanilla JavaScript and Web platform primitives.
- Contributed to [DwarfStar 4](https://github.com/antirez/ds4/pull/94) _(PR mentioned [in here](https://github.com/espentrydal/ds4/commit/f66101181f4cee828830d749d939b3765db7cf14))_ so models can run on a machine or as an intranet service, on local hardware including multiple **DGX Spark** and **AMD Ryzen AI MAX+ 395** machines.
- **In-browser AI** — the [Chrome built-in AI APIs](https://developer.chrome.com/docs/ai/built-in/overview), streaming and worker patterns, and how those pieces fit alongside runtimes such as [PyScript](https://pyscript.net/).

## Showcases

Hands-on demos at the intersection of the web platform, IoT, and embedded UIs:

- **PyScript + MicroPython (WASM)** driving a LEGO Spike Prime over Web Bluetooth — remote API orchestration I wrote end to end, with a Three.js view tracking the device axes in near real time: [video](https://www.youtube.com/watch?v=T_6Oh5VjX68)
- **Electron kiosk on Raspberry Pi** — bootstrapping a kiosk via simple, configurable CLI commands ([B.E.N.J.A.](https://x.com/WebReflection/status/759868175534157824))

![B.E.N.J.A. Bootable Electron NodeJS Application](./assets/images/benja.jpeg)

- **Raspberry Pi Zero + LCD** — a display driven from a web UI over an intranet: [demo](https://x.com/WebReflection/status/1678762388538155013)

## Skills

### Languages

- **JavaScript** — long-time work in the language, including contributions to the TC39/ECMAScript standard. I care about performance, minimal overhead, and understanding the runtime (GC, Workers, `SharedArrayBuffer`, `Proxy`, WASM) rather than piling on abstractions.
- **TypeScript** — effectively an extension of my JS workflow: JSDoc, `.d.ts` authoring, and TS where it earns its keep. I reach for it when types help; I also know where the type system hits its limits (e.g. Proxies).
- **PHP** — Zend Certified Engineer (through 5.x), many years of production use, and still current on modern PHP.
- **Python** — studied in a CS context, then deepened over three years at Anaconda across CPython and MicroPython.
- Also shipped production Java, without claiming deep expertise; comfortable reading and writing C, C++, and Rust but would not lead with them.

### Databases

- **SQLite** — I maintain a WASM module for client-side persistence; shipped in production across web backends, IoT devices, and desktop applications.
- **PostgreSQL** — used extensively in production; also taught during freelance training engagements.
- **MySQL** — production experience in the financial sector (PHP stack).
- Solid grasp of SQL security (including injection prevention), schema design, indexing, joins, aggregates, constraints, and production-grade functions. I have built wrappers and tooling to sanitize queries, improve performance, and simplify common database workflows in multiple languages.

### Backend, Linux & infrastructure

- Linux as my daily driver for 12+ years; kiosk-style applications on SBCs such as Raspberry Pi; comfortable with nginx, Cloudflare Workers, Deno, Bun, Node, PHP, and other web-server stacks.
- Load balancing, threading, connection pools, concurrency, async pipelines, HTTP semantics, cookies, sessions, headers, CORS, cross-origin isolation, Content Security Policy.

### Frontend & desktop

- HTML, CSS, and client-side JavaScript since before "full stack" was a job title: libraries, frameworks, performance tuning, architectural patterns, and client security.
- My strength on the client is the platform underneath the page — runtimes, isolation, messaging, and APIs most application work never reaches.
- Desktop applications with **Electron**, **Tauri**, **Positron**, and similar stacks: process models, renderer/main IPC, packaging, updates, and wiring the client to local or remote backends.

## Certifications & languages

- Zend Certified Engineer (PHP, through 5.x)
- Italian (native) · English (professional)