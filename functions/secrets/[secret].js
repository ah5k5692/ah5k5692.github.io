export function onRequest(ctx) {
    return new Response(ctx.params.secret);
}