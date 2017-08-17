
export let findStringInNode = (HTMLnode, subString) => {

  let nodeToString = (HTMLnode) => {
    let tmpNode = document.createElement( "div" );
    tmpNode.appendChild( HTMLnode.cloneNode( true ) );
    var strng = tmpNode.innerHTML;
    return strng;
  };

  return (() => {
    let convertToRegx = new RegExp(subString);
    let check = (convertToRegx.test(nodeToString(HTMLnode)));
    return check;
  })();

};
