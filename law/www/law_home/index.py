import frappe

def get_context(context):
    context.practice_area = frappe.db.sql(f""" SELECT name from `tabPractice Area`; """)