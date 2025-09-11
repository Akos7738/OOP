function rndList(count: number, start: number, end: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * end) + start);
    }
    return numbers;
}

const rndNumbers = (count: number, start: number, end: number): number[] => (
    Array.from({length: count}, item => Math.floor(Math.random() * end) + start)
)
console.log(rndNumbers(10, 1, 20));
