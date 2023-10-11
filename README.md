# Dais

A minimal starter template for Deno libraries that can be converted and published to NPM. To use, clone and `rm -r .git`

## Scripts

### Test
```
deno test 
```
### NPM
Ensure the NPM configuration is correct in `scripts/build.ts`.
```
deno run -A ./scripts/build.ts 0.0.1
```