export const validator = {
    isMobileTerminal: /Android|webOS|iPhone|iPod|BlackBerry/i, // 是否为移动端
    isEmail: /^[\.A-Za-z0-9\u4e00-\u9fa5_\.\-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, // 校验邮箱
    isPhoneNumber: /^1[3456789]\d{9}$/, // 大陆手机号码验证-不含区号
    isZHPhoneWithCode: /^(\+86|86)?1[0-9]{10}$/, // 大陆手机号验证-含区号
    isHKPhoneWithCode: /^(5|6|9)\d{7}$/, // 香港号码验证-不含区号
    isTWPhoneWithCode: /^0?9\d{8}$/, // 台湾号码验证-不含区号
    isMobileNumber: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话号码验证
    isIdCard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/, // 身份证号码验证
    isMoney: /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/, // 金额格式验证(最大金额99999999.99)
    isCreditCard: /^[0-9]*$/, // 银行卡号验证
    isZHENUserName: /^([\U0002A700-\U0002B73F\U00020000-\U0002A6DF\u3400-\u4DBF\u4e00-\u9fa5·]{1,30}|[a-zA-Z\.\s]{1,30})$/, // 中英姓名验证
    isZHUserName: /^([\U0002A700-\U0002B73F\U00020000-\U0002A6DF\u3400-\u4DBF\u4e00-\u9fa5·]{1,30})$/, // 大陆居民姓名验证，少数民族含·
    isENUserName: /^([a-zA-Z\.\s]{1,30})$/, // 英文姓名验证
    isEmoJi: /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/, // 表情验证
    isChinese: /[^\U0002A700-\U0002B73F\U00020000-\U0002A6DF\u3400-\u4DBF\u4e00-\u9fa5]+$/, // 汉字校验--数字也会返回true
    isDecimalTwo: /^[0-9]+(.[0-9]{2})?$/, // 两位小数正实数校验
    isDecimalOneOrTwo: /^[0-9]+(.[0-9]{1,2})?$/, // 1~2位小数正实数校验
    isEnSpecialChar: /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im, // 英文特殊字符校验
    isCnSpecialChar: /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im, // 中文特殊字符校验
    isHighPassword: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/;'[\]])[a-zA-Z\d`~!@#$%^&*()_+<>?:"{},.\/;'[\]]{8,16}/i, // 8-16位由数字字母或英文特殊字符(三者都要有)的密码校验
    isPassword: /^[A-Za-z0-9`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+$/, // 由数字字母英文特殊字符任意组合的密码校验
    isUrl: /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/ //是否为url链接
};
