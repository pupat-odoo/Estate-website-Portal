{
    "name": "Real Estate Advertisement Website ",
    "version": "1.0",
    "depends": ["estate","website","crm"],
    "website": "https://www.odoo.com/app/estate/website",
    "summary": "This module is for Real estate advertisement website.",
    "category": "estate_website",
    "data": [
        "views/estate_menus.xml",
        "security/ir.model.access.csv",
        "views/estate_website_views.xml",
        "views/estate_property_template.xml",
        "views/estate_website_bid_template.xml",
        "views/estate_website_bid_views.xml",
        "views/estate_website_contact_views.xml",
        "views/estate_website_contact_template.xml",
        "views/snippets/s_property_snippet.xml",
        "views/snippets/snippets.xml", 
        "views/snippets/s_property_load_snippet.xml",
    ],
        'assets': {
        'web.assets_frontend': [
            'estate_website_page/static/src/website_builder/s_property_listing_snippet.js',
            'estate_website_page/static/src/website_builder/s_property_listing_snippet.xml',

        ],
        'website.website_builder_assets': [
            'estate_website_page/static/src/website_builder/property_snippet_option_plugin.js',
            'estate_website_page/static/src/website_builder/property_snippet_option.xml', 
        ],
        'web.assets_backend': [
            'web/static/src/core/network',
        ], 
    },
    "installation":True,
    "application" :True,
    "author": "odoo-pupat",
    "license": "LGPL-3",
}
