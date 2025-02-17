// references for buttons
    //numbers reference start --------------------------------------------
    let nineEl = document.getElementById("nine");
    let eightEl = document.getElementById("eight");
    let sevenEl = document.getElementById("seven");
    let sixEl = document.getElementById("six");
    let fiveEl = document.getElementById("five");
    let fourEl = document.getElementById("four");
    let threeEl = document.getElementById("three");
    let twoEl = document.getElementById("two");
    let oneEl = document.getElementById("one");
    let zeroEl = document.getElementById("zero");
    let piEl = document.getElementById("pi");
    // Numbers end --------------------------------------------
    let decimalEl = document.getElementById("dot");
    let clearEl = document.getElementById("clear");
    let equalsEl = document.getElementById("equal");
    let BackEl = document.getElementById("back");

    let divideEl = document.getElementById("divide");
    let multiplyEl = document.getElementById("multiply");
    let subtractEl = document.getElementById("minus");
    let addEl = document.getElementById("plus");

    let openBracketEl = document.getElementById("openBracket");
    let closeBracketEl = document.getElementById("closeBracket");
    let powerEl = document.getElementById("power");
    let SaveEl = document.getElementById("save");

    let degRadEl = document.getElementById("degRad");

    let displayEl = document.getElementById("input");
// ---------------------------------------------------------------------------------------

    let clickedEquals = false;
    let clickedOperator = false;
    let clickedSquare = false;
    let expression = "";
    let result = 0;
    let items = localStorage.length;

// ---------------------------------------------------------------------------------------

    nineEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    eightEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    sevenEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    sixEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    fiveEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    fourEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    threeEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    twoEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    oneEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})
    zeroEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;
        clickedOperator = false;})

    // ----------------- NUMBERS END -----------------

    piEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;})

    // ----------------- OPERATORS -----------------
    decimalEl.addEventListener("click", function(){clear()
        if(clickedOperator === false)
            {
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + this.textContent;
            }}) 
    addEl.addEventListener("click", function(){clear() 
        if(clickedOperator === false)
            {
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + this.textContent;
            }})
    subtractEl.addEventListener("click", function(){clear() 
        if(clickedOperator === false)
            {
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + this.textContent;
            }})
    multiplyEl.addEventListener("click", function(){clear() 
        if(clickedOperator === false)
            {
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + this.textContent;
            }})
    divideEl.addEventListener("click", function(){clear() 
        if(clickedOperator === false)
            {
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + this.textContent;
            }})
    powerEl.addEventListener("click", function(){clear()
        if(clickedOperator === false)
            {
                clickedSquare = true;
                clickedOperator = true;
                displayEl.textContent = displayEl.textContent + '**';
            }})

    // ----------------- OPERATORS END -----------------

    loadHistory();

    equalsEl.addEventListener("click", function(){console.log(1)
            expression = displayEl.textContent;
            result = eval(expression);
            displayEl.textContent = result;
            clickedEquals = true;
            let finalExpression = expression + " = " + result;

            localStorage.setItem(items, finalExpression);
            items++;
        });

    SaveEl.addEventListener("click", function(){
        loadHistory();
    });

    openBracketEl.addEventListener("click", function(){clear() 
        displayEl.textContent = displayEl.textContent + this.textContent;})
    closeBracketEl.addEventListener("click", function(){clear()
        displayEl.textContent = displayEl.textContent + this.textContent;})
    BackEl.addEventListener("click", function(){ remove()})

    clearEl.addEventListener("click", function(){ displayEl.textContent = ""})

    degRadEl.addEventListener("click", function(){localStorage.clear(); items = localStorage.length; loadHistory();})
// ---------------------------------------------------------------------------------------

    function clear(){
        if(clickedEquals){
            displayEl.textContent = "";
            clickedEquals = false;
        }
    }

    function remove()
    {
        displayEl.textContent = displayEl.textContent.slice(0, -1);
        if(clickedSquare)
        {
            displayEl.textContent = displayEl.textContent.slice(0, -1);
            clickedSquare = false;
        }
        if(clickedOperator)
        {
            clickedOperator = false;
        } 
    }

    function loadHistory()
    {
        let historyEl = document.getElementById("history");
        historyEl.textContent = "";
        for(let i = 0; i < items; i++)
        {
            historyEl.innerHTML += `<li>${localStorage.getItem(i)}</li>`;
        }
    }
 
// --------------------------------------------------------------------------------------