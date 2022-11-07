/**
 * @desc 通过 "X.X.X" 形式的字符串 key 获取对应的数据 value
 * @param {Object & String} data 数据
 * @param {String} keysStr 需要获取的数据的 key 值
 * @returns {*} 对应的数据 value
 */
export default function lookup(data, keysStr) {
    // 处理简单数组
    if (keysStr === ".") return data;

    // 处理复杂数组
    const keyArr = keysStr.split(".");
    return keyArr.reduce((res, item) => {
        return res[item] || ""; // 短路算法设置默认值; 当指定的属性不存在时, 返回空字符串
    }, data);
}
