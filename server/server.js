const express = require( 'express' );
const app = express ();
const bodyParser = require( 'body-parser' );
const calculate = require( './modules/calculator' );


app.use( express.static( './server/public' ) );
app.use( bodyParser.urlencoded( {extended:true} ) );
app.use( '/calculator', calculate ); 

const port = 5001;

app.listen( port, ()=>{
    console.log( 'Server up on:', port );
})