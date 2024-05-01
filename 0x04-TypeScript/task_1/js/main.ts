interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}
interface Directors extends Teacher {
    numberOfReports: number
}



// ----------------------------


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);


function printTeacher(firstName: string, lastName: string) {
    const first = firstName[0]
    console.log(first + ". " + lastName)

}
interface printTeacherFunction {
    (firstname: string, lastname: string): void;
}

printTeacher("John", "Doe")