import {getSecretId, countSecrets} from "../getSecretId.internal";

export function onRequest(ctx) {
    for (let i = 0; i < countSecrets(), i++;) {
        return JSON.stringify({id: i, data: getSecretId(i)});
    }
}