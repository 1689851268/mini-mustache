import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

/**
 * @desc 处理数组 token; 结合 renderTemplate 实现递归
 * @param {Array} token 数组 token; eg: ["#", "students", [……]]
 * @param {Object} data 需要渲染的数据
 * @returns {String} 对应的 dom 字符串
 */
export default function parseArr(token, data) {
    let resStr = "";

    // 获取数组 token 需要渲染的数据
    const exactData = lookup(data, token[1]);
    // 根据数据, 循环渲染数组 token
    exactData.forEach(info => {
        resStr += renderTemplate(token[2], info);
    });

    return resStr;
}
