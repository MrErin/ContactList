const nuke = (hook) => {
	const contentHook = document.getElementById(hook)
	while (contentHook.firstChild) {
		contentHook.removeChild(contentHook.firstChild)
	}
}
module.exports = nuke