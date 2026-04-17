from odoo import http
from odoo.http import request


class EstateContactController(http.Controller):

    @http.route('/estate/contact/<int:property_id>', type='http', auth='public', website=True)
    def estate_contact_form(self, property_id, **kwargs):
        property_rec = request.env['estate.property'].sudo().browse(property_id)

        return request.render('estate_website_page.contact_form_template', {
        'property': property_rec,
    })
