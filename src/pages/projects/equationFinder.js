import React from 'react'
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import { MathComponent } from 'mathjax-react'
import "../Pages.css";


const EquationFinder = () => {
    return (
        <>
        <h1>Reverse Equation Finder</h1>
        <p>I occasionally found myself in the situation where I had a problem and the solution, but 
            could not remember how I had originally solved it. To overcome this, I wrote a program in C++ that 
            exhaustively checks possible equations until the correct one is found.
        </p>
        <p>The program takes in the units and value of the givens and solution to a problem, then recursively 
            structures equations until a valid answer is found. As an example, take this simple inelastic collision 
            story problem:</p>
        <p class="ml-16 mr-16"><i>Joe has a mass of 17kg and is sliding down a snowy hill with a velocity of 5m/s. 
            His brother has a mass of 23kg and is sliding down the same hill with a velocity of 3m/s. 
            The two boys collide and slide down the hill together. 
            Calculate the resulting velocity of the two boys.</i></p>

        <p>If we know the solution is 3.85m/s, we can plug in the values and units to get the original equation. 
            In this case, the program computed 166,093 possible equations in ~1 second until it verified the equation:
        </p>
        <MathComponent tex={String.raw`3.85=\frac{23*3+17*5}{17+23}`} />
        <p>
            Which you may recognize from this Physics I momentum equation:
        </p>
        <MathComponent tex={String.raw`V=\frac{M_1V_1+M_2V_2}{M_1+M_2}`} />
        
        
        <br></br>

        <p>To make the creation of new equations simple, the equations are represented as binary trees. 
            This makes combining and evaluating equation efficient. Below is a simplified outline of the equation class.</p>
            <CodeSnippet language="c"code={equationCode}/>
        <br></br>
        <p>View the full project here: <a href="https://github.com/ecranston405/EquationFinder" target="_blank">https://github.com/ecranston405/EquationFinder</a></p>
        </>
    );
};

export default EquationFinder


let equationCode = '\
class Equation {\n\
    MathOperator _operation;\n\
    Equation* _eq1; // right side of operator\n\
    Equation* _eq2; // left side of operator\n\
    double _value;\n\
    int _order;\n\
    double _unit;\n\
}'