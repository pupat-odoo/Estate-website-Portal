from odoo import  fields, models

class EstateWebsite(models.Model):
    _inherit = 'estate.property'

    image = fields.Image(String="Add Image" , options="{'size': [150, 150]}")
