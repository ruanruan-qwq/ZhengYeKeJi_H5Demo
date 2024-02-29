// app.js
App({
	getCurrentTabbar(selected, that) {
    if (typeof that.getTabBar === 'function' &&
        that.getTabBar()) {
        that.getTabBar().setData({
            selected: selected
        })
    }
}
})
