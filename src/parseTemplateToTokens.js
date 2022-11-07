import Scanner from "./Scanner";
import nestTokens from "./nestTokens";
import stripBlank from "./nesgame";

/**
 * @desc 将模版字符串变为 tokens 数组
 * @param {*} templateStr 模板字符串
 * @returns tokens 数组
 */
export default function parseTemplateToTokens(templateStr) {
    const tokens = [];

    // 创建扫描器
    const scanner = new Scanner(templateStr);
    // 使用扫描器
    let words;
    while (!scanner.eos()) {
        // 处理 `{{`
        words = scanner.scanUtil("{{");
        if (words != "") {
            tokens.push(["text", stripBlank(words)]);
        }
        scanner.scan("{{");

        // 处理 `}}`
        words = scanner.scanUtil("}}");
        if (words != "") {
            if (words[0] === "#") {
                tokens.push(["#", words.substring(1)]);
            } else if (words[0] === "/") {
                tokens.push(["/", words.substring(1)]);
            } else {
                tokens.push(["name", words]);
            }
        }
        scanner.scan("}}");
    }

    return nestTokens(tokens);
}
