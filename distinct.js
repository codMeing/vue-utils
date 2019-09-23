/**
 * 数组去重
 * @param {*} arr 必传，要去重的数组
 * @param {*} field 对象数组需指定根据某个字段来去重
 */
function distinct(arr, field) {
    if (!!field) {
        let temp = {};
        return arr.reduce((cur, next) => {
            let by = next[field];
            temp[by] ? "" : temp[by] = true && cur.push(next);
            return cur;
        }, []);
    } else {
        return Array.from(new Set([...arr]));
    }
}