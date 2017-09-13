
export let findStringInNode = (HTMLnode, subString) => {

  let nodeToString = (HTMLnode) => {
    let makeDivNode = document.createElement("div");
    makeDivNode.appendChild( HTMLnode.cloneNode(true));
    return makeDivNode.innerHTML;
  };

  return (() => {
    let convertToRegx = new RegExp(subString);
    let check = (convertToRegx.test(nodeToString(HTMLnode)));
    return check;
  })();

};
