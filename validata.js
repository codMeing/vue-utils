/**
 * @desc 校验数据合法性
 * @param {*} opts
 *  opts.value: String 待校验数据
 *  opts.noValNotValid: Boolean 待校验数据为空是否校验，默认true：无值不校验
 *  opts.rules: [{rule: RegEXP, level: String, message: String}] 校验规则；rule-必须为正则表达式，level-报错等级：'error'|'warning'，message-报错信息
 */
export default function validata(opts = {}) {
    if (!opts.rules.length) {
        return new Error('未检测到校验规则!');
    }
    return validataByRules(opts);
}

/**
 * @desc 根据校验规则在列表中的顺序循环校验，若有一条校验不通过则终止校验并返回报错信息
 * @param {*} opts
 */
function validataByRules(opts) {
    try {
        const value = opts.value || '';
        const rules = opts.rules || [];
        let noValNotValid = opts.noValNotValid === undefined ? true : opts.noValNotValid;
        let result = {
            isInvalid: false,
            status: '',
            message: '',
        };

        if (value === '' && noValNotValid) {
            return result;
        }

        for (let i = 0, len = rules.length; i < len; i++) {
            let item = rules[i];
            if (!item.rule.test(value)) {
                result.isInvalid = true;
                result.status = item.level || '';
                result.message = item.message || '';
                return result;
            }
        }

        return result;
    } catch (error) {
        return new Error('请确认校验规则是否为正则表达式!');
    }
}