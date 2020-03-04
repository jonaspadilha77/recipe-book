export class Ingredient {

    constructor(
        public name: string,
        public amount: number,
        public type?: string,
        public bought?: boolean,
        public added?: boolean
    ) {
    }
}
