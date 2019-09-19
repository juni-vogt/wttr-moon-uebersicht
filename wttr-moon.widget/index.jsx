//
// Shows the current wttr.in forecast on your desktop
//

const options = {
	lang: 'en' // country code
}

export const refreshFrequency = 1000 * 60 * 30; // 30min

export const className = `
	// position on screen
	right: 100px;
	top: 209px;

	position: fixed;
	-webkit-font-smoothing: antialiased; // nicer font rendering
	color: #efefef;

	pre
		font: 7px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;

`;

export const command = `
	cd wttr-moon.widget &&
	curl -s wttr.in/moon?lang=${ options.lang } |
	./terminal-to-html
`;

// see https://github.com/chubin/wttr.in for API
// uses https://github.com/buildkite/terminal

export const render = props => props.error ? props.error :
	<div>
			<link rel="stylesheet" href="wttr-moon.widget/terminal-colors.css" />
			<pre dangerouslySetInnerHTML={{
				__html: props.output.split('\n').slice(0, 24).join('\n')
			}} />
	</div>
