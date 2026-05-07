import { Interaction } from "@web/public/interaction";
import { registry } from "@web/core/registry";

export class PropertyListingSnippet extends Interaction {
    static selector = ".s_property_listing_snippet";

    setup() {
        this.properties = [];
        }

    async willStart() {
        const data = await this.services.orm.searchRead("estate.property", [], ["name", "property_type_id", "expected_price", "description"]);
        this.properties = data || [];
    }

    start() { 
        const container = this.el.querySelector(".property_container");
        if (!container) {
            console.error("property_container not found");
            return;
        }

        this.renderAt(
            "estate_website_page.s_property_listing_snippet",
            {
                properties: this.properties || [],
            },
            container
        );
    }
}

registry.category("public.interactions").add(
    "estate_website_page.s_property_listing_snippet",
    PropertyListingSnippet
);
registry.category("public.interactions.edit").add("estate_website_page.s_property_listing_snippet", 
    {
        Interaction: PropertyListingSnippet,
    });
