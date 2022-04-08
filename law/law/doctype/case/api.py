import frappe

@frappe.whitelist()
def get_precedence(practice_area = None,case_type = None):
    cases = frappe.db.sql(f''' SELECT name,case_details_title from `tabCase` WHERE header_practice_area = '{practice_area}'  OR  header_case_type = '{case_type}' ''', as_dict=True)
    return cases


