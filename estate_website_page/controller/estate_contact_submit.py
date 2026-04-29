from tokenize import String
from odoo import http
from odoo.http import request
from odoo.orm.models import Char


class EstateContactController(http.Controller):

    @http.route('/estate/contact/submit', type='http', auth='public', website=True, csrf=False)
    def estate_contact_submit(self, **post):
        request.env['crm.lead'].sudo().create({
            'name': post.get('name'),
            'email_from': post.get('email_from'),
        })

        return request.redirect('/estate')
