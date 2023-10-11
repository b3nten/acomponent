import esbuild from "npm:esbuild"
import webplugin from "https://raw.githubusercontent.com/B3nten/esbuild-plugin-web/main/mod.ts"

Deno.serve({
  port: 8000,
}, async function (request) {
	console.log(request.url)
	switch (new URL(request.url).pathname) {
		case '/': {
			return new Response(await Deno.readTextFile("./index.html"), {
				headers: {
					"content-type": "text/html",
				}
			});
		}
		case '/app.tsx':
		case '/mod.tsx': {
			const result = await esbuild.build({
				entryPoints: [`./${new URL(request.url).pathname}`],
				bundle: true,
				jsxFactory: "h",
				jsxFragment: "Fragment",
				jsxImportSource: "https://esm.sh/preact",
				plugins: [webplugin()],
				write: false,
			});
			return new Response(result.outputFiles[0].text, {
				headers: {
					"content-type": "application/javascript",
				}
			});
		}
		case '/favicon.ico': {
			return new Response(await Deno.readFile("./assets/favicon.ico"), {
				headers: {
					"content-type": "image/x-icon",
				}
			});
		}
		default: {
			return new Response("Not found", {
				status: 404,
			});
		}
	}
});
