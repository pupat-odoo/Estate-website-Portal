from odoo import  fields, models

class EstateWebsite(models.Model):
    _inherit = 'estate.property'

    
    image = fields.Image(string="Add Image")
    email_from = fields.Char(string="Email")
    
    bid_ids = fields.One2many(
        'estate.website.bid',
        'property_id',
        string="Bids"
    ),

    contact_ids = fields.One2many(
        'estate.website.contact',
        'property_id',
        string="Contact"
    )
