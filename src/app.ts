class NumberHandler {
    private _start: number;
    private _end: number;
    private _count: number;
    private _numbers: number[];
    private _stats: Record <number, number>;

    constructor(start: number, end: number, count: number) {
        this._start = start;
        this._end = end;
        this._count = count;
        this._numbers = this.rndList();
        this._stats = this.getStats();

    }

    private rndList(): number[] {
        const numbers: number[] = [];
        for (let i = 0; i < this._count; i++) {
            numbers.push(Math.floor(Math.random() * this._end) + this._start);
        }
        return numbers;
    }

    rndNumbers = (): number[] => (
        Array.from({ length: this._count }, item => Math.floor(Math.random() * this._end) + this._start)
    )

    getStats(): Record<number, number> {
        const statistics: Record<number, number> = {};
        for (let key of this._numbers) {
            statistics[key] = (statistics[key] ?? 0) + 1;
        }
        return statistics;
    }

    print = () => {
        for (let key in this._stats) console.log(`${key} szám: ${this._stats[key]} db`);
    }

    getSum(): number {
        return this._numbers.reduce((summa, item) => summa + item, 0)
    }

    filterNums(attr: number): number[] {
        return this._numbers.filter(item => item % attr === 0);
    }

    getNumber(value: number): number {
        return this._numbers.findIndex(item => item === value);
    }

    getNumber2(value: number): number {
        let i = 0;
        while (i < this._numbers.length && i !== value) {
            i++;
        }
        return i + 1;
    }
}