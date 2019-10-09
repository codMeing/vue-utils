export function isString(o) { // 是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}

export function isNumber(o) { // 是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
}

export function isBoolean(o) { // 是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}

export function isFunction(o) { // 是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
}

export function isNull(o) { // 是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
}

export function isUndefined(o) { // 是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
}

export function isObject(o) { // 是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

export function isArray(o) { // 是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
}

export function isDate(o) { // 是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
}

export function isRegExp(o) { // 是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
}

export function isError(o) { // 是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
}

export function isSymbol(o) { // 是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
}

export function isPromise(o) { // 是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
}

export function isSet(o) { // 是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
}

export function isFalse(o) { // 是否为false
    if (!o || o === 'null' || o === 'undefined' || o === 'NaN') {
        return true;
    }
    return false;
}

export function isTrue(o) {  // 是否为true
    return !isFalse(o);
}
