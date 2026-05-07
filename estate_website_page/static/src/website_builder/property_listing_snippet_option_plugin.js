import { BaseOptionComponent } from "@html_builder/core/utils";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

export class PropertyListingSnippetOption extends BaseOptionComponent {
    static template = "estate_website_page.PropertyListingSnippetOption";
    static selector = "section.s_property_listing_snippet";
    static applyTo = ":scope  .row";
}

export class PropertyListingSnippetOptionPlugin extends Plugin{
    static id ="propertyListingSnippetOption";
    resources = {
        builder_options : [PropertyListingSnippetOption],
    };
}

registry.category("website-plugins").add(
    PropertyListingSnippetOptionPlugin.id,
    PropertyListingSnippetOptionPlugin
);
