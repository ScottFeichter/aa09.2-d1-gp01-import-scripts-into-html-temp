const addElement = () => {
  const newElement = document.createElement("h1")
  newElement.setAttribute("id", "sleeping-giant");
  const newContent = document.createTextNode("Jell-O, Burled!");
  newElement.appendChild(newContent);
  document.body.appendChild(newElement)
  console.log("addElement ran");
}


addElement();
addElement();
addElement();
