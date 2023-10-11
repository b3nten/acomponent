import webPlugin from "https://raw.githubusercontent.com/B3nten/esbuild-plugin-web/main/mod.ts";
import esbuild from "npm:esbuild"

await esbuild.build({
	entryPoints: [`./mod.tsx`],
	outfile: "./bundle.js",
	bundle: true,
	minify: true,
	jsxFactory: "h",
	jsxFragment: "Fragment",
	jsxImportSource: "https://esm.sh/preact",
	plugins: [webPlugin()],
});