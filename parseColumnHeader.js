function parseColumnHeader(columnText) {
  if(!columnText) { throw 'Value columnText cannot be empty'; }
  var results = header.match(/(.+)\s\((.+)\)/);
  // the results array will have 3 entries, name and type are in index 1 and 2.
  if(results && results[1] && results[2]) {
    return { name: results[1].trim(), type: results[2].trim() };
  } else {
    throw 'The columnText did not match the format "Name (type)": '+columnText;
  }
}
