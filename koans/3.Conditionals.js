let assert = chai.assert;

describe("3. Conditional operators + Case statements, Data types [Bools]", function(){

    it("type bool", function(){
        let boolean = false;

        assert.equal(boolean, true);
    });

    it("Structure if", function(){
        let execute = false;

        let result = "";
        if(execute){
           result = "Hello"
        }

        assert.equal(result, "Hello");
    });

    it("Equal operator", function(){
        let result = "javascript" === "java";

        assert.equal(result, true);
    });

    it("Structure if...else ", function(){
        let age = 15;
        let hasLegalAge = false;

        if(age >= 18){
            hasLegalAge = true;
        }

        assert.equal(hasLegalAge, true);
    });

    it("Nested if...else", function(){
        let greeting = "";
        let time = "evening";
        if( time === "morning" )
        {
            greeting ="Good morning";
        }
        else
        {
            if (time === "evening" )
            {
                greeting = "Good evening";
            }
            else
            {
                greeting = "Good night";
            }
        }

        assert.equal(greeting, "Good night");
    });

    it("switch", function(){
        let note = "";
        let examenResult = 8;

        switch (examenResult) {
            case 4:
                note = "suspended";
                break;
            case 5:
                note = "Sufficient";
                break;
            case 6:
                note = "Fine";
                break;
            case 7:
                note = "Great";
                break;
            case 8:
                note = "Notable";
                break;
            case 9:
                note = "Excellent";
                break;
            case 10:
                note = "Outstanding";
                break;
            default:
                note = "this exam result is impossible";
                break;
        }

        assert.equal(note, "Fine");
    });

    it("&& AND operator", function(){
        //In this exercise you can change the assert

        let result1 = true && true;
        let result2 = false && true;
        let result3 = true && false;
        let result4 = false && false;

        assert.equal(result1, false);
        assert.equal(result2, false);
        assert.equal(result3, true);
        assert.equal(result4, true);
    });

    it("&& OR operator", function(){
        //In this exercise you can change the assert

        let result1 = true || true;   // true
        let result2 = false || true;  // false
        let result3 = true || false;  // false
        let result4 = false && false; // false

        assert.equal(result1, false);
        assert.equal(result2, true);
        assert.equal(result3, false);
        assert.equal(result4, true);
    });

});