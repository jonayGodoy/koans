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
        array[0] = "bananas";
        array[1] = "pineapple";
        array[2] = "water melon";

        assert.equal(array.length, 2);
    })
});