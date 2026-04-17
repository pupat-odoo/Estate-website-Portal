from odoo import fields, models


class ResUsers(models.Model):
    _inherit = "res.users"

    property_ids = fields.One2many(
        "estate.website",
        "salesman_id",
        string="Available Properties",
    )
