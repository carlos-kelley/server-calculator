const express = require( 'express' );
const router = express.Router();

let history = [];
let solutionOut = {};

function add( number1, number2 ){
    let solution = Number( number1 ) + Number( number2 );
    return solution;
}
function subtract( number1, number2 ){
    let solution = Number( number1 ) - Number( number2 );
    return solution;
}
function multiply( number1, number2 ){
    let solution = Number( number1 ) * Number( number2 );
    return solution;
}
function divide( number1, number2 ){
    let solution = Number( number1 ) / Number( number2 );
    return solution;
}

router.post ( '/', (req,res) =>{ //working
    let equation = {};
    equation.number1 = req.body.number1;
    equation.symbol = req.body.symbol;
    equation.number2 = req.body.number2;

    if( req.body.symbol === '+' ){
    let solution = add( req.body.number1, req.body.number2);
    solutionOut.solution = solution;
    equation.solution = solution;
    } 
    else if( req.body.symbol === '-' ){
        let solution = subtract( req.body.number1, req.body.number2);
        solutionOut.solution = solution;
        console.log(solutionOut);
        equation.solution = solution;
    } 
    else if( req.body.symbol === '*' ){
        let solution = multiply( req.body.number1, req.body.number2);     
        solutionOut.solution = solution;
        console.log(solutionOut);
        equation.solution = solution;
    } 
    else if( req.body.symbol === '/' ){
        let solution = divide( req.body.number1, req.body.number2);
        solutionOut.solution = solution;
        console.log(solutionOut);
        equation.solution = solution;
    }
    history.push( equation );
    console.log('back from POST:', req.body, solutionOut); 
})


router.get( '/', (req, res)=>{
    res.send( solutionOut );
})

router.get( '/history', (req, res)=>{

    res.send( history );
})


module.exports = router;