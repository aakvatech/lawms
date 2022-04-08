frappe.pages['law'].on_page_load = function(wrapper) {
	new MyPage(wrapper)
}

//page contents
MyPage = Class.extend({
	init: function(wrapper) {

		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Law Dashboard',
			single_column: false
		});
	}
})

