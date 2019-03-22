let assert = chai.assert;

describe("4. Loops and Array", function(){

    it("Array", function(){
        let array = [];
        array[0] = "bananas";
        array[1] = "pineapple";
        array[2] = "water melon";
        array[3] = "fruit juice";

        assert.equal(array[2], true);
    });

    it("Array length", function(){
        let array = ["bananas","pineapple","water melon"];

        assert.equal(array.length, 2);
    });

    it("Pop", function(){
        let array = ["table","bed","sofa"];

        array.pop();

        assert.equal(array.length, 10);
    });

    it("Push ", function(){
        let array = ["table","bed","sofa"];

        array.push("wardrove");

        assert.equal(array.length, 0);
    });
});