import { BaseOptionComponent } from "@html_builder/core/utils";
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

export class PropertyListingSnippetOption extends BaseOptionComponent {
    static template = "estate_website_page.PropertyListingSnippetOption";
    static selector = "section.s_property_listing_snippet";
    static applyTo = ":scope  .row";
}

export class PropertyLayoutAction extends BuilderAction {
    apply({ editingElement, params: { mainParam } }) {
        editingElement.classList.toggle("is-list-view", mainParam === "list");
        editingElement.classList.toggle("is-card-view", mainParam === "card");
    }
    isApplied({ editingElement, params: { mainParam } }) {
        return editingElement.classList.contains(`is-${mainParam}-view`);
    }
}

export class SortPropertyTypeAction extends BuilderAction {
    setup() {
        this.reload = {};
    }
    isApplied({ editingElement, property_type_id }) {
        return editingElement.dataset.defaultSort === property_type_id;
    }
    apply({ property_type_id }) {
        return rpc("/shop/config/website", { shop_default_sort: property_type_id });
    }
}

export class PropertyListingSnippetOptionPlugin extends Plugin{
    static id ="propertyListingSnippetOption";
    resources = {
        builder_options : [PropertyListingSnippetOption],
        builder_actions: [PropertyLayoutAction],
        builder_actions: [SortPropertyTypeAction],
    };
}

registry.category("website-plugins").add(
    PropertyListingSnippetOptionPlugin.id,
    PropertyListingSnippetOptionPlugin
);
