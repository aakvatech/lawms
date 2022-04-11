// Copyright (c) 2022, aakvatech and contributors
// For license information, please see license.txt

frappe.ui.form.on('Court Proceeding', {
    
    case: function(frm) {
        let case_name = frm.doc.case;
        
        if(case_name) {
            frappe.call({
                method: "law.law.doctype.court_proceeding.api.get_case_info",
                args: {
                    case: case_name
                },
            }).done((r) => {
                frm.doc.judge_table = [];
                frm.doc.appellant_table = [];
                frm.doc.respondent_table = [];
				
				//[0] is judge array
                $.each(r.message[0], function(_i, e) {
                    let entry = frm.add_child("judge_table")
                    entry.judge = e.judge
                })
				//[1] is appellant array
                 $.each(r.message[1], function(_i, e) {
                    let entry = frm.add_child("appellant_table")
                    entry.appellant = e.appellant
                })
				//[2] is respondent array
                 $.each(r.message[2], function(_i, e) {
                    let entry = frm.add_child("respondent_table")
                    entry.respondent = e.respondent
                })
                refresh_field("judge_table")
                refresh_field("appellant_table")
                refresh_field("respondent_table")
            })
            
        }
    }
})