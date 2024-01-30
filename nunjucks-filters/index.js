import * as marked from "marked";

/**
 * Filters to extend Nunjucks environment
 */
const toUpper = string => string.toUpperCase();
const spaceToDash = string => string.replace( /\s+/g, "-" );
const condenseTitle = string => string.toLowerCase().replace( /\s+/g, "" );
const UTCdate = date => date.toUTCString( "M d, yyyy" );
const blogDate = string => new Date( string ).toLocaleString( "en-US", { year: "numeric", month: "long", day: "numeric" } );
const trimSlashes = string => string.replace( /(^\/)|(\/$)/g, "" );


const mdToHTML = mdString => {
  try {
    return marked.parse( mdString, {
      mangle: false,
      headerIds: false
    } );
  } catch ( e ) {
    console.error( "Error parsing markdown:", e );
    return mdString;
  }
};

const getSelections = ( list, selections ) => {
  const filterredList = [];
  for ( let i = 0; i < list.length; i++ ) {
    for ( let j = 0; j < selections.length; j++ ) {
      if ( list[ i ].id === selections[ j ].id ) {
        filterredList.push( list[ i ] );
      }
    }
  }
  return filterredList;
};

// turn a string of words into a unique array of words. For example used to create a unique list of categories
const toArray = ( string ) => {
  return [ ...new Set( string.trim().split( " " ) ) ].sort();
};

// turn a json object into a string
const objToString = ( obj ) => {
  return JSON.stringify( obj );
};

const dump = obj => {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return ( key, value ) => {
      if ( typeof value === "object" && value !== null ) {
        if ( seen.has( value ) ) {
          return;
        }
        seen.add( value );
      }
      return value;
    };
  };

  return JSON.stringify( obj, getCircularReplacer(), 4 );
};

const isRelated = ( post, selections ) => {
  const simpleArray = selections.map( obj => obj.item );
  if ( simpleArray.includes( post.item ) ) {
    return true;
  }
  return false;
};

export {
  toUpper,
  spaceToDash,
  condenseTitle,
  UTCdate,
  blogDate,
  trimSlashes,
  mdToHTML,
  getSelections,
  toArray,
  dump,
  isRelated,
  objToString
};