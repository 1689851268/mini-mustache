/**
 * @desc 用于折叠 tokens, 将 `#` 和 `/` 之间的 tokens 整合起来
 * @param {Array} tokenArr 需要被折叠的 tokens
 * @returns 折叠后的 tokens
 */
export default function nestTokens(tokenArr) {
    const nestTokens = []; // 结果数组
    const sections = []; // 栈, 用于存放小 tokenArr
    let collector = nestTokens; // 收集器; 收集器的指向会变化, 当遇见 # 时, 收集器会指向这个 token 下标为 2 的新数组元素

    for (const token of tokenArr) {
        switch (token[0]) {
            case "#":
                collector.push(token); // 将 token 放入收集器中
                sections.push(token); // 将 token 入栈
                token[2] = []; // 创建子数组, 以收集子元素
                // 更新收集器为当前 token 下标为 2 的新元素
                collector = token[2];
                break;
            case "/":
                sections.pop(); // 出栈
                // 更新收集器:
                // 如果栈非空, 则更新为栈顶元素, 即上一层 tokenArr
                // 如果栈为空, 则更新为结果元素
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
                break;
            default:
                collector.push(token);
                break;
        }
    }

    return nestTokens;
}
