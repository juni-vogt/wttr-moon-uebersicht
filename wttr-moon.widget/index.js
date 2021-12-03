//
// Shows the current wttr.in forecast on your desktop
//

options: {
	lang: 'en', // country code
},

refreshFrequency: 1000 * 60 * 30, // 30min

style: `
	// position on screen
	left: 939px;
	top: 209px;

	position: fixed;
	-webkit-font-smoothing: antialiased; // nicer font rendering
	color: #efefef;

	pre
		font: 7px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;

`,

command: function(cb) {
	// this part is unnecessarily complicated because I wanted to have an
	// options property

	const cmd = `
		cd wttr-moon.widget &&
		curl -s wttr.in/moon?lang=${this.options.lang} |
		./terminal-to-html-3.6.1-darwin-arm64
	`;
	// see https://github.com/chubin/wttr.in for API
	// uses https://github.com/buildkite/terminal

	this.run(cmd, (err, data) => {
		cb(this.render({ err, data }))
	})
},

render: out => `
	<link rel="stylesheet" href="wttr-moon.widget/terminal-colors.css" />
	<pre>${out.err || out.data.split('\n').slice(0, 24).join('\n')}</pre>
`
