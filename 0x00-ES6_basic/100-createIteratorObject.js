export default function createIteratorObject(report) {
    let arr = []
    for (let i = 0; i < report.length; i++) {
        arr.push(report[i])

    }
    return arr
}