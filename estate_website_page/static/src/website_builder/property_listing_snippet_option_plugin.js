import { BaseOptionComponent } from "@html_builder/core/utils";
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

export class PropertyListingSnippetOption extends BaseOptionComponent {
    static template = "estate_website_page.PropertyListingSnippetOption";
    static selector = "section.s_property_listing_snippet";
}

export class PropertyLayoutAction extends BuilderAction {
    static id = "propertyLayout";
    apply({ editingElement, params: { mainParam } }) {
        const container = editingElement.querySelector(":scope .container");
        container.classList.toggle("is-list-view", mainParam === "list");
        container.classList.toggle("is-card-view", mainParam === "card");
    }

    isApplied({ editingElement, params: { mainParam } }) {
        const container = editingElement.querySelector(":scope .container");
        return container.classList.contains(`is-${mainParam}-view`);
    }
}

export class PropertyTypeAction extends BuilderAction {
    static id = "propertyType";
    getValue({ editingElement }) {
        const propertyTypeId = editingElement.dataset.propertyTypeId;
        if (!propertyTypeId) {
            return undefined;
        }
        return propertyTypeId;
    }

    async apply({ editingElement, value }) {
        if (value) {
            editingElement.dataset.propertyTypeId = value;
        } else {
            delete editingElement.dataset.propertyTypeId;
        }
        editingElement.dispatchEvent(new Event("property_type_changed",));
    }
}

export class PropertyListingSnippetOptionPlugin extends Plugin {
    static id = "propertyListingSnippetOption";
    resources = {
        builder_options: [PropertyListingSnippetOption],
        builder_actions: { 
            propertyLayout: PropertyLayoutAction,
            propertyType: PropertyTypeAction,
        },
    };
}

registry.category("website-plugins").add(
    PropertyListingSnippetOptionPlugin.id,
    PropertyListingSnippetOptionPlugin
);
