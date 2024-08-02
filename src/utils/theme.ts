const themeDark = 'dark'
const themeLight = 'light'
function switchTheme(status: Boolean) {
	if (status) {
		localStorage.setItem('theme', themeDark)
	} else {
		localStorage.setItem('theme', themeLight)
		//localStorage.removeItem('theme')
	}
}

const getTheme = () => localStorage.getItem('theme') ?? themeLight

export { switchTheme, getTheme }
