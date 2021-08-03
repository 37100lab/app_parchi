   // let's put upper case every word's first char
  const titleCase=(str)=>{
    if(typeof str === 'undefined')
      return undefined;

    var splitStr = str.toString().toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' ').trim(); 
  }


const stringManager = {titleCase};

export default stringManager;