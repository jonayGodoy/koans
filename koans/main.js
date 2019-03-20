let assert = chai.assert;

describe("koans",function(){
    it("test green", function(){
        assert.equal(true, false);
    });

    describe("Basic Programming", function(){

        describe("1. What is it javascript?", function(){
            it("concatenate string",function(){
                let text1 = "Hi,";
                let text2 = "David";

                let result = text1text2;

                assert.equal(result, "Hi,David");
            });

            it("add number",function(){
                let number1 = 1;
                let number2 = 2;

                let result = number1-number2;

                assert.equal(result, 3);
            });
        });


    });
});