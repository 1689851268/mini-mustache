import mustache from "../utils/mustache";
import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.CR_mustache = {
    /**
     * 用于生成 dom 字符串供页面渲染
     * @param {String} templateStr 待渲染的模板字符串
     * @param {Object} data 需要渲染的数据
     * @returns 可以直接渲染的 dom 字符串
     */
    render(templateStr, data) {
        // 模板字符串  -→  tokens
        const tokens = parseTemplateToTokens(templateStr);
        // tokens + 数据  -→  dom 字符串
        const domStr = renderTemplate(tokens, data);
        return domStr;
    },
};

window.mustache = mustache;
