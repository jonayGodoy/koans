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
    describe("2. Variables", function(){
        it("different between let and const",function(){
            let text1 = "Hi";
            text1 = "Bye";
            const text2 = "Bye";
            text2 = "Hi";

            assert.equal(text1, "Hi");
            assert.equal(text2, "Bye");
        });

        it("Calculate the operation without parenthesis", function(){
            let result = 2+5+4-1*(2+3);

            assert.equal(result, 12);
        });

        it("module 12 and 3", function(){
            let result = 12 % 3;

            assert.equal(result, 4);
        });

        it("increment and decrement", function(){
            let number1 = 1;
            let number2 = 2;

            number1++;
            number2--;

            assert.equal(number1, 1);
            assert.equal(number2, 2);
        });

    });

});