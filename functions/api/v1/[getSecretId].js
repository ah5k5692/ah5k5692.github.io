export function getSecretId(ctx, id) {
    if (id == null) {
        val = ctx.params.secret;
    } else if (ctx == null) {
        var val = id;
    } else {
        return ("both args null");
    }
    switch (val) {
        case '1': {
            return ("Hello this is a test note. Thanks for read bye bye!");
        }
        case '2': {
            return ("saturday or sunday?");
        }
        default: {
            return ("Secret with ID:" + id + " doesn't exist!");
        }
    }
}