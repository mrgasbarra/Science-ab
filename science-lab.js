/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
/*
const participant = {
    name: "Jim",
    age: 22,
    studyField: "Biology",
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
/*
const participantDetails = {
    ...participant, displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Study: ${this.studyField}`);
    }
};

participantDetails.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*

const participant = {
    name: "Jim",
    age: 22,
    studyField: "Biology",

    participantDetails: () => {
        console.log(this.name, this.age, this.studyField);
    }
};

participant.participantDetails();

/*
 * Observations:
 * TODO: Explain here: Arrow functions can’t use this the way regular functions do because they don’t have their own this. Instead, they inherit this from the surrounding scope, so when used as object methods, this does not refer to the object. This makes arrow functions unsuitable for methods that rely on the object’s context.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

let participant = {
    name: "Jim",
    age: 22,
    studyField: "Biology",
};

function updateParticipantInfo(participant, propName, propValue) {
    return { ...participant, [propName]: propValue };
}

let update = updateParticipantInfo(participant, "name", "John");

console.log(update);