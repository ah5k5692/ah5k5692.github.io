import pagesPluginStaticForms from "@cloudflare/pages-plugin-static-forms";

export const onRequest = pagesPluginStaticForms({
    respondWith: ({formData, name}) => {
        const name = formData.get('name');
        return new Response("Hello " + name + "! I hope you are having a great day!");
    }
});