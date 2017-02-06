//
// Shows imgur's daily top image for a search query
//

_: (() => this.options = {

	lang: '' // de

})(),

command: `
    cd ./wttr-moon.widget &&
	# echo 'loading…' &&
	{ # hide output

	  OPTIONS=${escape(JSON.stringify(this.options))} \
	  /usr/local/bin/node ./src/init-app;

	} &> npm-debug.log &&
	cat output.html
`,

refreshFrequency: 1000 * 60 * 20,

render: output => output,

style: `
	-webkit-font-smoothing: antialiased // nicer font rendering
	right: 60px;
	top: 20px;
	// bottom: 100px;
	color: #efefef;
	font: 9px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;
	z-index: 999;

	pre * // workaround for #1
		background: none !important

	a>*
		max-width: 200px
		max-height: 200px


`
