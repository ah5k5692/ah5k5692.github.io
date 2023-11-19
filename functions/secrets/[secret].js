import {getSecretId} from "../api/v1/secrets/getSecretId.internal";
export function onRequest(ctx) {
    let res = 'Secret #' + ctx.params.secret + '\nData:\n' + getSecretId(ctx.params.secret);

    return new Response(res);
}