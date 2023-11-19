import {getSecretId, countSecrets} from "../getSecretId.internal";

export function onRequest(ctx) {
    for (let i = 0; i < countSecrets(), i++;) {
        return new Response(JSON.stringify({id: i, data: getSecretId(i)}));
    }
}