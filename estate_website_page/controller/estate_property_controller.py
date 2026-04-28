from odoo import http
from odoo.http import request


class EstatePropertyController(http.Controller):

    @http.route('/estate', type='http', auth='public', website=True)
    def properties_listing(self, **kwargs):
        properties = request.env['estate.property'].sudo().search([])
        return request.render(
            "estate_website_page.properties_listing",
            {
                "properties": properties,
                
            },
        )
