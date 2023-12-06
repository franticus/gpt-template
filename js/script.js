var currentDomain = window.location.hostname;

function replaceTextContent(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(/ambientia\.com/g, currentDomain);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      replaceTextContent(node.childNodes[i]);
    }
  }
}

replaceTextContent(document.body);