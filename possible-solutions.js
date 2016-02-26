function sum( numOne, numTwo ) {
	if ( numTwo !== undefined ) {
		return numOne + numTwo;
	}

	return function( num ) {
		return numOne + num;
	}
}

/////////////////////////

Array.prototype.sum = function() {
	var count = 0;

	this.forEach( function( element ) {
		count += element;
	});

	return count;
}

///////////////////////////

function nextPal( num ) {
	do {
		num++;
	} while( num !== parseInt(num.toString().split('').reverse().join('') ));

	return num;
}

//////////////////////////
// recursive
function amazonCounting( num ) {
	switch ( num ) {
		case 0:
			return ''
		case 1:
			return 'anane'
		case 2:
			return 'adak'
		default:
			return 'adak ' + amazonCounting( num - 2 )
	}
}
// non recursive
function countArara(n) {
    var count = [];

    for ( var i = 2; i <= n; i += 2 ) {
      count.push("adak");
    }

    if (n % 2 !== 0) {
    	count.push("anane");
    }
    
    return count.join(" ");
}

/////////////////////////

function delayLog() {
	var counter = 1;

	function logger() {
		if ( counter <= 5 ) {
			setTimeout( function() {
				console.log( counter++ );
				logger();
			}, counter * 1000);
		}
	}
	logger();
}

////////////////////////

function ordered( arr ) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}