export class Person {
    id: number;
    name: string;
    age: number;
    sex: string;
    address: string;

    constructor(
        id: number,
        name: string,
        age: number,
        sex: string,
        address: string,
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
}