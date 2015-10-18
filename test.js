/**
 * Created by shenshijun on 15/10/18.
 */
function toJsonReplacer(key, value) {
    console.log(key);
    console.log(value);
    //var val = value;
    //
    //if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
    //    val = undefined;
    //} else if (isWindow(value)) {
    //    val = '$WINDOW';
    //} else if (value && document === value) {
    //    val = '$DOCUMENT';
    //} else if (isScope(value)) {
    //    val = '$SCOPE';
    //}
    //
    //return val;
    return value;
}
function toJson(obj, pretty) {
    if (typeof obj === 'undefined') return undefined;
    return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
}

toJson(10);
toJson("sss");
toJson(true);
toJson([10101, 10192, 1019]);
toJson({
    test: 10,
    test2: "ssss"
});

toJson(new Date());
toJson(/ete/g);