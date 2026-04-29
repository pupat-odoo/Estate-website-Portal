from odoo import http
from odoo.http import request


class EstateBidController(http.Controller):

    @http.route('/estate/bid/<int:property_id>', type='http', auth='user', website=True)
    def estate_bid_form(self, property_id, **kwargs):
        property_rec = request.env['estate.property'].browse(property_id)
        return request.render('estate_website_page.bid_form_template', {
        'property': property_rec
    })
