---
name: Execora site build
description: Environment-specific build requirement for the Execora web artifact.
---

The Execora web artifact's Vite build requires `PORT` to be set explicitly in the shell, using the workflow's port when running a production build.

**Why:** Running the package build without `PORT` fails while loading the Vite config before any source compilation begins.

**How to apply:** Use the configured workflow port when invoking the build manually; the normal workflow already supplies it.