from odoo import  api,fields, models
from odoo import http
from odoo.http import request

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

    @api.model
    def properties_listing(self):
        
            properties = self.search([])
            return {
                'properties': [
                    {
                        'id': p.id,
                        'name': p.name,
                        'expected_price': p.expected_price,
                        'description': p.description,
                    } for p in properties
                ]
            }