import {getSecretId, countSecrets} from "../getSecretId.internal";

export function onRequest(ctx) {
    let secrets = new Array(countSecrets());
    secrets[0] = null;
    for (let i = 0; i < countSecrets(); i++) {
        secrets[i] = {id: i, data: getSecretId(i)};
    }
    return new Response(JSON.stringify(secrets));
}