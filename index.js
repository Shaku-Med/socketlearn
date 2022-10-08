const express = require( 'express' );
const app = express();
const http = require( 'http' ).createServer( app );
const { Server } = require( "socket.io" );
const io = new Server( http );

app.get( "/", ( req, rs ) =>
{
      rs.sendFile( __dirname + "/file.html" );
} );

io.on( 'connection', ( socket ) =>
{
      socket.on( 'chat message', ( msg ) =>
      {
            io.emit( 'chat message', msg );
      } );
} );

http.listen( 3001, () =>
{
      console.log( "Running" );
} );