from odoo import  fields, models

class EstateWebsiteBid(models.Model):
    _name='estate.website.bid'
    _description='Estate Website Bid Model'

    property_id=fields.Many2one("estate.property", string="property")
    price=fields.Float(string="Amount")
    name = fields.Char(string="Name")
