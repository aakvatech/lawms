# Copyright (c) 2022, aakvatech and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Case(Document):
	def before_save(self):
		self.case_details_title = f"{self.header_case_type} No. {self.header_case_number} of {self.header_case_year}"
