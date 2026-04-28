from odoo import http
from odoo.fields import Char
from odoo.http import request


class EstateBidController(http.Controller):

    @http.route('/estate/bid/submit', type='http', auth='user', website=True, csrf=False)
    def estate_bid_submit(self, **post):

        request.env['estate.property.offer'].create({
            'price' : float(post.__getitem__('amount')),
            'property_id' : int(post.__getitem__('property_id')),
            'partner_id' : request.env.user.partner_id.id,
        })

        request.env['estate.website.bid'].create({
            'price': post.get('amount'),
            'property_id': post.get('property_id')
        })
        return request.redirect('/estate')
