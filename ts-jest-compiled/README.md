# ts-jest compiled

This is an attempt to run typescript tests against the compiled javascript, to speed up a CI pipeline.

However, it seems that tests that pass with typescript and `ts-jest` do not
pass with javascript and pure jest, when they have calls to `jest.mock()`.

## Install

`npm install`

## Run

```bash
# Run tests with ts-jest
# This passes.
npm test

# Run tests with jest against compiled code (via tsc)
# Issue: This does not pass.
npm run build && npm run test:compiled

# Run tests with jest against compiled code (via ttsc)
# Issue: This does not pass.
npm run build2 && npm run test:compiled
```
