import {
    marks,
    addMark,
    getMarksOver60,
    increaseMarksBy5,
    getTotalMarks,
    findFirstMarkOver80,
    sortMarksLowestToHighest,
    runTasks
} from '../script.js';

const expect = globalThis.expect || (typeof window !== 'undefined' && window.expect) || chai.expect;

describe("Component 1 - Array Methods", function () {

    beforeEach(function () {
        marks.splice(0, marks.length, 45, 60, 85, 30, 95);

        const output = document.getElementById("outputElement");
        if (output) {
            output.innerHTML = "";
        }
    });

    it("Task 1: addMark() should add 70 to the end of the marks array", function () {
        addMark();
        const expectedArray = [45, 60, 85, 30, 95, 70];

        expect(marks).to.deep.equal(expectedArray);
    });

    it("Task 2: getMarksOver60() should return only marks greater than 60", function () {
        const result = getMarksOver60();

        expect(result).to.deep.equal([85, 95]);
    });

    it("Task 3: increaseMarksBy5() should return every mark increased by 5", function () {
        const result = increaseMarksBy5();

        expect(result).to.deep.equal([50, 65, 90, 35, 100]);
    });

    it("Task 4: getTotalMarks() should return the total of all marks", function () {
        const result = getTotalMarks();

        expect(result).to.equal(315);
    });

    it("Task 5: findFirstMarkOver80() should return the first mark greater than 80", function () {
        const result = findFirstMarkOver80();

        expect(result).to.equal(85);
    });

    it("Task 6: sortMarksLowestToHighest() should sort marks from lowest to highest", function () {
        const result = sortMarksLowestToHighest();

        expect(result).to.deep.equal([30, 45, 60, 85, 95]);
    });

    it("Browser output: runTasks() should display task results on the browser page", function () {
        runTasks();

        const outputText = document.getElementById("outputElement").textContent;

        expect(outputText).to.include("Task 1");
        expect(outputText).to.include("Task 2");
        expect(outputText).to.include("Task 3");
        expect(outputText).to.include("Task 4");
        expect(outputText).to.include("Task 5");
        expect(outputText).to.include("Task 6");
    });

});
