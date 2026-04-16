from odoo import  fields, models

class EstateWebsite(models.Model):
    _inherit = 'estate.property'

    image = fields.Image(String="Add Image")
    
    bid_ids = fields.One2many(
        'estate.website.bid',
        'property_id',
        string="Bids"
    )
