const SECRET_COUNT = 2;

export function getSecretId(val) {
    switch (val) {
        case '1': {
            return ("Hello this is a test note. Thanks for read bye bye!");
        }
        case '2': {
            return ("saturday or sunday?");
        }
        default: {
            return ("Secret with ID: " + val + " doesn't exist!");
        }
    }
}

export function countSecrets() {
    return SECRET_COUNT;
}