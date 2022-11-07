import lookup from "./lookup";
import parseArr from "./parseArr";

/**
 * @desc 让 tokenArr 数组变为 dom 字符串
 * @param {Array} tokenArr 模版字符串解析成的 tokens
 * @param {Object} data 需要渲染的数据
 * @returns {String} dom 字符串
 */
export default function renderTemplate(tokenArr, data) {
    let resultStr = "";

    for (const token of tokenArr) {
        if (token[0] === "text") {
            // 直接获取 token
            resultStr += token[1];
        } else if (token[0] === "name") {
            // 获取 token 对应的数据
            resultStr += lookup(data, token[1]);
        } else if (token[0] === "#") {
            // 递归处理数组 token
            resultStr += parseArr(token, data);
        }
    }

    return resultStr;
}
