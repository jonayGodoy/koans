let assert = chai.assert;

describe("5. Functions and scope", function(){

    it("function", function(){

        let name = generateName();

        function generateName(){
            return "David";
        }

        assert.equal(name, "Anna");
    });

    it("function flow", function(){

        let var1 = "Var 1";
        let var2 = "Var 2";

        let result = returnVariable(var1);

        function returnVariable(var2){
            return var2;
        }

        assert.equal(result, "Var 2");
    })
});