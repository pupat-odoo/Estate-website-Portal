import { Interaction } from "@web/public/interaction";
import { registry } from "@web/core/registry";

export class PropertyListingSnippet extends Interaction {
    static selector = ".s_property_listing_snippet";

    setup() {
        this.properties = [];
        }
        
    async willStart() {
        await this.loadProperties();
        this.el.addEventListener("property_type_changed", async () => {
            await this.loadProperties();
        });
    }

    async loadProperties() {
        const propertyTypeId = this.el.dataset.propertyTypeId;
        const domain = [];
        if (propertyTypeId) {
            domain.push([
                "property_type_id",
                "=",
                parseInt(JSON.parse(propertyTypeId).id, 10)]
            );
        }
        this.properties = await this.services.orm.searchRead(
            "estate.property",
            domain,
            ["name", "property_type_id", "expected_price", "description"]
        );
    }

    start() { 
        const container = this.el.querySelector(".property_container");
        if (!container) {
            console.error("property_container not found");
            return;
        }
        this.renderAt(
            "estate_website_page.property_cards_template",
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
