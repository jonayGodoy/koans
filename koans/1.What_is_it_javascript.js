let assert = chai.assert;

describe("1. What is it javascript?", function(){

    it("test green", function(){
        let bool = false;
        assert.equal(bool, true);
    });

    it("concatenate string",function(){
        let text1 = "Hi,";
        let text2 = "David";

        let result = text1text2;

        assert.equal(result, "Hi,David");
    });

    it("add number", function(){
        let number1 = 1;
        let number2 = 2;

        let result = number1-number2;

        assert.equal(result, 3);
    });
});
