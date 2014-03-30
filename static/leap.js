 	// Get the canvas DOM element 
    var canvas = document.getElementById('canvas');

    // Making sure we have the proper aspect ratio for our canvas
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Create the context we will use for drawing
    var c =  canvas.getContext('2d');



    // Save the canvas width and canvas height
    // as easily accesible variables
    var width = canvas.width;
    var height = canvas.height;

    // Creating a global Frame variable that we can access
    // throughout the program
    var frame;

    // Global keyTap and screenTap arrays
    var keyTaps = [];
    var KEYTAP_LIFETIME   =  .5;
    var KEYTAP_START_SIZE = 15;

    var screenTaps = [];
    var SCREENTAP_LIFETIME   = 1;
    var SCREENTAP_START_SIZE = 30;


    /*
      
      The leapToScene function takes a position in leap space 
      and converts it to the space in the canvas.
      
      It does this by using the interaction box, in order to 
      make sure that every part of the canvas is accesible 
      in the interaction area of the leap

    */

    function leapToScene( leapPos ){

      // Gets the interaction box of the current frame
      var iBox = frame.interactionBox;

      // Gets the left border and top border of the box
      // In order to convert the position to the proper
      // location for the canvas
      var left = iBox.center[0] - iBox.size[0]/2;
      var top = iBox.center[1] + iBox.size[1]/2;

      // Takes our leap coordinates, and changes them so
      // that the origin is in the top left corner 
      var x = leapPos[0] - left;
      var y = leapPos[1] - top;

      // Divides the position by the size of the box
      // so that x and y values will range from 0 to 1
      // as they lay within the interaction box
      x /= iBox.size[0];
      y /= iBox.size[1];

      // Uses the height and width of the canvas to scale
      // the x and y coordinates in a way that they 
      // take up the entire canvas
      x *= width;
      y *= height;

      // Returns the values, making sure to negate the sign 
      // of the y coordinate, because the y basis in canvas 
      // points down instead of up
      return [ x , -y ];

    }

    

    


    function onSwipe( gesture ){

      var startPos = leapToScene( gesture.startPosition );
      var pos      = leapToScene( gesture.position );
      
      // Setting up the style for the stroke
      c.strokeStyle = "#FFA040";
      c.lineWidth = 3;

      // Drawing the path
      c.beginPath();

      // Move to the start position
      c.moveTo( startPos[0] , startPos[1] );

      // Draw a line to current position
      c.lineTo( pos[0] , pos[1] );

      c.closePath();
      c.stroke();


    }
	function on1( gesture ){
	}
	
	



    
    
    


	$(function(){

		$('#slider').movingBoxes({
			/* width and panelWidth options deprecated, but still work to keep the plugin backwards compatible
			width: 500,
			panelWidth: 0.5,
			*/
			startPanel   : 1,      // start with this panel
			wrap         : false,  // if true, the panel will infinitely loop
			buildNav     : true,   // if true, navigation links will be added
			navFormatter : function(){ return "&#9679;"; } // function which returns the navigation text for each panel
		});

	});
