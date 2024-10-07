export function formatValue(num: number): string {
    const strNum = num.toString();
    const len = strNum.length;

    if (len <= 2) {
        return strNum;
    }

    return strNum.slice(0, len - 2) + ',' + strNum.slice(len - 2);
}