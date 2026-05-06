from odoo import http
from odoo.http import request

class DynamicPropertySnippetController(http.Controller):

    @http.route('/get_estate_property', type='jsonrpc', auth='public', website=True)
    def properties_listing(self, **kwargs):
        properties = request.env['estate.property'].sudo().search_read(
            [], 
            ['id', 'name', 'expected_price', 'description']
        )
        return {
            "properties": properties
        }
