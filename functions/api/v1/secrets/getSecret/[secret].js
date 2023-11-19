export function onRequest(ctx) {
    switch (ctx.params.secret) {
        case '1': {
            return new Response("Hello this is a test note. Thanks for read bye bye!");
        }
        case '2': {
            return new Response("saturday or sunday?");
        }
        default: {
            return new Response("Secret with ID: " + val + " doesn't exist!");
        }
    }
}