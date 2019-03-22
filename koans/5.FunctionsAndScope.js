let assert = chai.assert;

describe("5. Functions and scope", function(){

    it("function", function(){

        let name = generateName();

        function generateName(){
            return "David";
        }

        assert.equal(name, "Anna");
    })
});