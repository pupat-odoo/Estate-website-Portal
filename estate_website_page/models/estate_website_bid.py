from odoo import  fields, models

class EstateWebsiteBid(models.Model):
    _name='estate.website.bid'
    _description='Estate Website Bid Model'

    
    property_id=fields.Many2one("estate.property", string="property" , store=True)
    price=fields.Float(string="Amount" , store=True)
    name = fields.Char()
    email = fields.Char()
    