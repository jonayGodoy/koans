let assert = chai.assert;

describe("5. Functions and scope", function(){

    it("function", function(){
        function generateName(){
            return "David";
        }

        let name = generateName();

        assert.equal(name, "Anna");
    });

    it("function flow", function(){
        function returnVariable(var2){
            return var2;
        }
        let var1 = "Var 1";
        let var2 = "Var 2";

        let result = returnVariable(var1);

        assert.equal(result, "Var 2");
    });

    it("arguments", function(){
        function sayHi(name){
            return "Hi, i'm "+ name;
        }
        let name = "David";

        let result = sayHi();

        assert.equal(result, "Hi, i'm David");
    })
});