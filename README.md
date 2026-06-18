# no-bs-nestjs

What if we removed all the silly bits from nestjs?

A pnpm workspace monorepo. Apps live under `apps/*` and shared packages under `packages/*`.

## Prerequisites

- Node.js >= 24
- pnpm 10 (`corepack enable` will pick up the pinned version)

## Install

```sh
pnpm install
```

## Running tests

Tests run with [Vitest](https://vitest.dev). The root scripts fan out to every workspace package that defines them:

```sh
pnpm test         # run all tests once across the workspace
pnpm test:cov     # run all tests with coverage
pnpm test:watch   # run tests in watch mode
```

To run tests for a single package, scope it with a filter:

```sh
pnpm --filter @repo/api test
```
