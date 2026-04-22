import { BaseOptionComponent } from "@html_builder/core/utils";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

export class PropertySnippetOption extends BaseOptionComponent {
    static template = "estate_website_page.PropertySnippetOption";
    static selector = ".s_property_snippet";
    static applyTo = ":scope > .row";
}


export class PropertySnippetOptionPlugin extends Plugin{
    static id ="propertySnippetOption";
    resources = {
        builder_options : [PropertySnippetOption],
    };
}

registry.category("website-plugins").add(
    PropertySnippetOptionPlugin.id,
    PropertySnippetOptionPlugin
);
