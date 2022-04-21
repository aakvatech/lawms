// website_script.js
frappe.ready(() => {
    frappe.call('erpnext_com.utils.get_country').then(r => {
        let data = r.message;
        let show_india = !data.country || data.country == 'India'
        
        $('[data-country="India"]').toggle(show_india);
        $('[data-country="Non-India"]').toggle(!show_india);
    })
    
    let pathname = window.location.pathname.slice(1);
    if (pathname) {
        $('a[href="/pricing"]').prop('href', '/pricing?via=' + pathname);
    }
    
    let params = frappe.utils.get_query_params();
    if (params.via) {
        $('a[href="https://frappecloud.com/signup"]')
            .prop('href', 'https://frappecloud.com/signup?via=' + params.via);
    }
});





	if (navigator.doNotTrack != 1 && !window.is_404) {
		frappe.ready(() => {
			let browser = frappe.utils.get_browser();
			frappe.call("frappe.website.doctype.web_page_view.web_page_view.make_view_log", {
				path: location.pathname,
				referrer: document.referrer,
				browser: browser.name,
				version: browser.version,
				url: location.origin,
				user_tz: Intl.DateTimeFormat().resolvedOptions().timeZone
			})
		})
	}