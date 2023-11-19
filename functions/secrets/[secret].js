import {getSecretId} from "../api/v1/getsecretid";
export function onRequest(ctx) {
    res = 'Secret #' + ctx.params.secret + '\nData:\n' + getSecretId(ctx.params.secret);

    return new Response(res);
}