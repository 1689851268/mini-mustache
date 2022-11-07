/**
 * 扫描器类
 */
export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr; // 模版字符串
        this.pos = 0; // 指针; 用于扫描模版字符串
        this.tail = templateStr; // 尾部字符串; 用于扫描模版字符串
    }

    /**
     * 用于扫描指定内容; 没有返回值
     * @param {*} tag
     */
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            this.pos += tag.length; // tag 有多长, 指针就移动多长
            this.tail = this.templateStr.substring(this.pos); // 更新尾部字符串
        }
    }

    /**
     * 用于扫描指定内容, 并获取扫过的内容
     * @param {String} stopTag 一直扫到 stopTag 之前, 不包括 stopTag
     * @returns 扫过的内容
     */
    scanUtil(stopTag) {
        const start = this.pos; // 开始扫描的位置
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++; // 移动指针
            this.tail = this.templateStr.substring(this.pos); // 更新尾部字符串
        }
        return this.templateStr.substring(start, this.pos);
    }

    /**
     * 用于判断指针是否已到头
     * @returns true / false
     */
    eos() {
        return this.pos >= this.templateStr.length;
    }
}
