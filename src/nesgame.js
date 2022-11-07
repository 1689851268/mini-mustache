/**
 * 用于去除标签之间的空格
 * @param {String} words 需要去除空格的字符串
 * @returns 去除空格后的字符串
 */
export default function stripBlank(words) {
    let InTheLabel;
    let resultStr = "";

    [...words].forEach(char => {
        // 判断是否在标签内
        if (char === "<") {
            InTheLabel = true;
        } else if (char === ">") {
            InTheLabel = false;
        }

        // 去除标签外的空格和换行符
        if (!InTheLabel && (char === " " || char === "\n")) {
            resultStr += "";
        } else {
            resultStr += char;
        }
    });

    return resultStr;
}
