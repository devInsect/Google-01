---
name: Execora site build
description: Environment-specific build requirement for the Execora web artifact.
---

The Execora web artifact's Vite build requires both `PORT` and `BASE_PATH` to be set explicitly in the shell, using the workflow's port and `/` base path when running a production build.

**Why:** Running the package build without either variable fails while loading the Vite config before any source compilation begins.

**How to apply:** Use `PORT=18714 BASE_PATH=/` for the current artifact when invoking the build manually; the normal workflow already supplies both values.