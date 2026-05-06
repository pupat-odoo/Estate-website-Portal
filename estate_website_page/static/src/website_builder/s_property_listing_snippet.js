import { Interaction } from "@web/public/interaction";
import { registry } from "@web/core/registry";

export class PropertyListingSnippet extends Interaction {
    static selector = ".s_property_listing_snippet";

    setup() {
        this.properties = [];
    }

    async willStart() {
        const data = await this.services.orm.call("estate.property", "properties_listing");
        console.log("Property data:", data);

        this.properties = data.properties || [];
    }

    start() {
        const container = this.el.querySelector(".property_container");

        console.log("Container:", container);
        console.log("Property data:", this.properties);

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