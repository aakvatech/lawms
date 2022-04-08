frappe.ui.form.on('Case', {

	refresh: function(frm) {
		  frm.add_custom_button(__('Get Precedence'), function(){
			get_precedence()
		})

		function get_precedence() {

			let practice_area = frm.doc.header_practice_area
			let case_type = frm.doc.header_case_type

			if((case_type) || (practice_area)) {
		     
				frappe.call({
				method: "law.law.doctype.case.api.get_precedence",
				args: {
					practice_area: practice_area,
					case_type: case_type
				}
			}).done((r) => {
				frm.doc.precedence_table = [];
				$.each(r.message, function(_i, e) {
					  let entry = frm.add_child("precedence_table")
					  entry.case_id = e.name
					  entry.case_title = e.case_details_title
				  })
				  refresh_field("precedence_table")
				  frm.save()
			})
			  
		  }
		}
				
	  }

})