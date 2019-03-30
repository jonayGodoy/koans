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

    it("position array", function(){
        let array = ["bananas","pineapple","water melon"];
        array.pop();
        array.push("pear");
        array.push("orange");

        let result = array[0];

        assert.equal(result, "orange");
    });


    it("Loop, For", function(){
        let lastGenerateMessage = "";
        for(let i = 0; i <=20; i++){
            lastGenerateMessage = "Walking east "+i+" step";
        }

        assert.equal(lastGenerateMessage, "Walking east 3 step");
    });

    it("Loop, While", function(){
        let lastGenerateMessage = "";
        let steps = 0;
        while(steps <20){
            steps = steps + 1;
            lastGenerateMessage = 'Walking east '+steps+' step';
        }

        assert.equal(lastGenerateMessage, "Walking east 0 step");
    });
});