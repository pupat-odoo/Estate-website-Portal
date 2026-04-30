import { Interaction } from "@web/public/interaction";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";

export class PropertyListingSnippet extends Interaction {
    static selector = ".s_property_listing_snippet";
    setup() {
        this.properties = [];
    }
    async willStart() {
        const data = await this.waitFor(rpc('/get_estate_property'));
        this.properties = data.properties;
    } 
    start() {
    this._renderProperties();
}
    _renderProperties() {
        const container = this.el.querySelector('.js_property_container');
        if (!this.properties.length) {
            container.innerHTML = "<p>No properties found.</p>";
            return;
        }
        container.innerHTML = this.properties.map(prop => `
            <div class="col-12 col-md-3 mb-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img class="card-img-top img-fluid" 
                        src="/web/image/estate.property/${prop.id}/image" 
                        style="height:200px; object-fit:cover;" 
                        onerror="this.src='/web/static/img/placeholder.png'"/>
                    <div class="card-body">
                        <h5 class="fw-bold">${prop.name}</h5>
                        <p class="text-muted small">${prop.expected_price || ''}</p>
                        <a t-att-href="'/estate/bid/${prop.id}'" class="btn btn-primary">
                            Bid
                        </a>
                                
                                
                    </div>
                </div>
            </div>
        `).join('');
    }
}
registry.category("public.interactions").add("estate_website_page.s_property_listing_snippet", PropertyListingSnippet);
