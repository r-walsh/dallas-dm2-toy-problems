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

/////////////////////////

function longest(s1, s2) {
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

//////////////////////////

function createTemplate( template ) {
  return function( obj ) {
    return template.replace(/{{(\w+)}}/g, function( matchedString, submatch ) {
    	return obj[submatch] || '';
    });
  }
}


///////////////////////////

function sortList ( sortBy, list ) {
  return list.sort(function( a, b ){
    return a[sortBy] < b[sortBy];  
  });
}

///////////////////////////

// recursive
function arraySum( arr ) {
  var output = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( typeof(arr[i]) === 'number') {
      output += arr[i];
    }
    if ( Array.isArray(arr[i])) {
      arraySum( arr[i] );
    }
  return output;
}

// non recursive
function arraySum(arr) {
  return arr.toString()
            .split(',')
            .reduce( function( previousValue, currentValue ) {
              if ( parseFloat(currentValue) ) {
                return parseFloat(currentValue) + previousValue;
              }
              return previousValue;
             }, 0);
}

/////////////////////////////
function triangle() {
	var txt = '#######'
	for (var i = txt.length; i >= 0; i--){
	  console.log(txt.slice(i))
	}
}

function triangle(num) {
  var str = '';
  for (var i = num; i >= 1; i--) {
    str += '#';
    console.log(str);
  } 
  
}

//////////////////////////////

function isIsogram(str){
  let splitted = str.toLowerCase().split('');
  for ( let i = 0; i < splitted.length; i++ ) {
    if ( splitted.lastIndexOf(splitted[i]) !== i ) {
      return false;
    }
  }
  return true;
}


function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

//////////////////////////////

function chain(x, fns) {
  return fns.reduce(function(x, fn) {
    return fn(x)
  }, x)
}

//////////////////////////////

Array.prototype.square = function() {
  return this.map( item => Math.pow(item, 2) );
}

Array.prototype.cube = function() {
  return this.map( item => Math.pow(item, 3) );
}

Array.prototype.sum = function() {
  return this.reduce( ( pv, cur ) => pv + next );
}

Array.prototype.average = function() {
  if ( this.length === 0 ) return NaN;
  
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  return this.filter( item => item % 2 === 0 );
}

Array.prototype.odd = function() {
  return this.filter( item => item % 2 !== 0 );
}

// es5

Array.prototype.square = function() {
	return this.map(function( item ) {
		return Math.pow(item, 2);
	});
}

Array.prototype.cube = function() {
	return this.map(function( item ) {
		return Math.pow(item, 3);
	});
}

Array.prototype.sum = function() {
	return this.reduce(function( pv, cur ) {
		return pv + cur;
	});
}

Array.prototype.average = function() {
	if ( this.length === 0 ) return NaN;

	return this.sum / this.length;
}

Array.prototype.even = function() {
	return this.filter(function( item ) {
		return item % 2 === 0;
	});
}

Array.prototype.odd = function() {
	return this.filter(function( item ) {
		return item % 2 !== 0;
	});
}

//////////////////////////////

function three( cb ) {
	if ( !cb ) return 3;

	return cb( 3 );
}

function five( cb ) {
	if ( !cb ) return 5;

	return cb( 5 );
}

function times( numOne ) {
	return function( numTwo ) {
		return numOne * numTwo;
	}
}

function plus( numOne ) {
	return function( numTwo ) {
		return numOne + numTwo;
	}
}

//////////////////////////////

function order(words) {
  if (!words) return '';
  var wordsArr = words.split(' ');
  var orderedArr = [];

  for (var i = 0; i < wordsArr.length; i++) {
    var letters = wordsArr[i].split('');
    for (var j = 0; j < letters.length; j++) {
      if (parseInt(letters[j])) {
        orderedArr[parseInt(letters[j])] = wordsArr[i];
      }
    }
  }
  return orderedArr.join(' ');
}

//////////////////////////////

// oh my god please do this
function rotate(array, n) {
  n = n % array.length
  return array.slice(-n).concat(array.slice(0, -n))
}

// more likely
function rotate(array,n){
  if ( n === 0 ) return array;
  var arr = array.slice();
  if ( n > 0 ) {
    for ( var i = 0; i < n; i++ ) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  for ( var i = 0; i > n; i-- ) {
    arr.push(arr.shift());
  }
  return arr;
}

//////////////////////////////

// non regex:
function doubleCheck(str){
  str = str.toLowerCase().split('');

  for ( let i = 0; i < str.length; i++ ) {
    if ( str[i] === str[i + 1] ) {
      return true;
    }
  }
  return false;
}

// with regex:
function doubleCheck(str){
  return /(.)\1/i.test(str);
}

//////////////////////////////


function nestSetter(obj, changed) {
  for (var prop in obj) {
    if (changed.hasOwnProperty(prop) && typeof obj[prop] !== 'object') {
      obj[prop] = changed[prop];
    } else if (changed.hasOwnProperty(prop) && typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      nestSetter(obj[prop], changed[prop]);
    } else if (changed.hasOwnProperty(prop) && Array.isArray(obj[prop])) {
      obj[prop] = obj[prop].concat(changed[prop]);
    }
  }
  return obj;
}

//////////////////////////////

function flatten( ...args ) {
  let returnArray = [];
  for ( let i = 0; i < args.length; i++ ) {
    if (Array.isArray(args[i])) {
      returnArray.push(...flatten(...args[i]));
    } else {
      returnArray.push(args[i]);
    }
  }
  return returnArray;
}

//////////////////////////////

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

//////////////////////////////

Array.prototype.nestedFilter = function( cb ) {
  let ret = [];
  for ( let i = 0; i < this.length; i++ ) {
    if ( Array.isArray(this[i]) ) {
      ret.push(this[i].nestedFilter( cb ));
    } else {
      if ( cb( this[i], i, this ) ) {
        ret.push(this[i]);
      }
    }
  }
  return ret;
}

//////////////////////////////

function formatter( input ) {
  function innerFormatter( string, arr ) {
    if ( string ) {
      let   strArr = string.split('/')
          , curr = strArr.shift();
      for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i].name === curr ) {
          return innerFormatter( strArr.join('/'), arr[i].children );
        }
      }
      arr.push({
          name: curr
        , children: []
      });
      return innerFormatter(strArr.join('/'), arr[arr.length - 1].children)
    }
    return arr;
  }
  let returnArr = [];
  input.forEach( string => returnArr.push(innerFormatter( string.name, returnArr )) );

  return returnArr.filter( element => element.length !== 0 );
}

//////////////////////////////

function humanReadable(seconds) {
  var hours = parseInt( seconds / 3600 ) ;
  var minutes = parseInt( seconds / 60 ) % 60;
  var seconds = seconds % 60;

  var pad = function(val){
    return val < 10 ?"0"+val:val;
  }

  return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

//////////////////////////////

Math.round = function(number) {
  if ( number.toString().indexOf('.') === -1 ) return number;

  if ( parseFloat('.' + number.toString().split('.')[1]) >= .5 ) {
    return Math.ceil(number);
  }

  return Math.floor(number);
};

Math.ceil = function(number) {
  if ( number.toString().indexOf('.') === -1 ) return number;

  return parseInt(number.toString().split('.')[0]) + 1;
};

Math.floor = function(number) {
  return parseInt(number.toString().split('.')[0]);
};

//////////////////////////////

Array.prototype.groupBy = function( fn ) {
  let grouped = {};

  if ( !fn ) {
    this.forEach( item => grouped.hasOwnProperty( item ) ? grouped[item].push( item ) : grouped[item] = [item]);
  } else {
    this.forEach( item => grouped.hasOwnProperty( fn( item ) ) ? grouped[fn( item )].push( item ) : grouped[ fn( item )] = [item]);
  }

  return grouped;
}

Array.prototype.groupBy = function(fn) {
  if (fn == null) fn = function(x) { return x }
  return this.reduce(function(groups, val) {
    var key = fn(val)
    groups[key] ? groups[key].push(val) : groups[key] = [val]
    return groups
  }, {})
}

//////////////////////////////

function nouveau ( Constructor, ...args ) {
  let instance = Object.create( Constructor.prototype );
  let ret = Constructor.apply( instance, args );

  return ret === Object( ret ) ? ret : instance;
}

//////////////////////////////

function format(text, width) {
  let textArr = text.split(' ');
  let currentLineLength = 0;
  let formatted = [[]];
  let formattedIndex = 0;

  for ( let i = 0; i < textArr.length; i++ ) {
    if ( (textArr[i].length + currentLineLength) > width ) {
      formatted[formattedIndex] = formatted[formattedIndex].join(' ');
      formatted.push([]);
      formattedIndex++;
      currentLineLength = 0;
    }
    formatted[formattedIndex].push(textArr[i]);
    currentLineLength += textArr[i].length + 1;
  }

  if ( Array.isArray(formatted[formattedIndex]) ) {
    formatted[formattedIndex] = formatted[formattedIndex].join(' ');
  }
  return formatted.join('\n');
}

//////////////////////////////

function max( arr, iteratee ) {
  
    let value, computed, result = -Infinity, lastComputed = -Infinity;
    if (!iteratee) {
      for (let i = 0, length = arr.length; i < length; i++) {
        value = arr[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      for ( let i = 0, length = arr.length; i < length; i++ ) {
         computed = iteratee(arr[i]);
        if ( iteratee(arr[i]) > lastComputed ) {
           result = arr[i];
           lastComputed = computed;
        }
      }
   }
    return result;
  }