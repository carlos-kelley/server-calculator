$( document ).ready( onReady );

function onReady(){
    $( '#calculateButton' ).on( 'click', equation );
    $( '#clearButton' ).on( 'click', clear );
    getHistory();
}

let symbol = '';

function getSolution(){
    console.log('in getSolution');
    $.ajax({
        method:'GET',
        url: '/calculator'
    }).then( function( response ){
        console.log('back from solution GET', response);
        const el = $( '#output' );
        el.empty();
        el.append('Solution: ', String( response.solution ) );
    }).catch( function( err ){
        console.log( err );
        alert( 'nope in solution' );
    })
}   
function getHistory(){
    console.log('in getHistory');
    $.ajax({
        method: 'GET',
        url: '/calculator/history'
    }).then( function( response ){
        console.log( 'back from History GET', response);
        let el = $( '#historyOutput' );
        el.empty();
        for( let i=0; i< response.length; i++ ){
            el.append( `<li>${response[i].number1} ${response[i].symbol} ${response[i].number2} = ${response[i].solution}</li>`)
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'nope in history' );
    })
}
function clear(){
    console.log( "in  clear" );
   $( '#number1Input' ).val( '' );
   $( '#number2Input' ).val( '' );
} 

function equation(){
    console.log( "in equation" );
    let equationInput = {
        number1: $( '#number1Input' ).val(),
        symbol: $('#symbolSelect').val(),
        number2: $( '#number2Input' ).val(),
    }
    console.log('equationInput:', equationInput);
    

    $.ajax({
        method: 'POST', 
        url: '/calculator',
        data: equationInput
    }).then( function( response ){
        console.log( 'back from POST:', response );
        getSolution();
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    })
    getHistory();
    getSolution();
    clear();
} 



