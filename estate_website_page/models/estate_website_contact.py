from tokenize import String
from odoo import  fields, models

class EstateWebsiteContact(models.Model):
    _name='estate.website.contact'
    _description='Estate Website contact Model'

    property_id=fields.Many2one("estate.property", string="property")
    name = fields.Char(string="Name")
    email_from=fields.Char(string="Email")
