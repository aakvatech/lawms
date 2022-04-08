from unittest import async_case
import frappe

# @frappe.whitelist()
# # def get_case_judges(case):
# #     judges = frappe.db.sql(f''' SELECT judge from `tabJudge Table` where parenttype = "Case" and parent = "{case}" ORDER BY idx
# #  ''', as_dict = True)
# #     return judges

# # def get_case_appellants(case):
# #     appellants = frappe.db.sql(f''' SELECT appellant from `tabAppellant Table` where parenttype = "Case" and parent = "{case}" ORDER BY idx
# #  ''', as_dict = True)
# #     return appellants


@frappe.whitelist()
def get_case_info(case):   
         judges = frappe.db.sql(f''' SELECT judge from `tabJudge Table` where parenttype = "Case" and parent = "{case}" ORDER BY idx
         ''', as_dict = True)
         appellants = frappe.db.sql(f''' SELECT appellant from `tabAppellant Table` where parenttype = "Case" and parent = "{case}" ORDER BY idx
         ''', as_dict = True)
         respondents = frappe.db.sql(f''' SELECT respondent from `tabRespondent Table` where parenttype = "Case" and parent = "{case}" ORDER BY idx
         ''', as_dict = True)
         info = [judges, appellants, respondents]
         return info

