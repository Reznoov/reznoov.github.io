miniSheet = () => {
  let token = MapTool.tokens.getSelected(); 
  if(token === null) {MTScript.abort();}
  let id = token.getId();
  let isPC = MTScript.execMacro(`[r:isPC("${id}")]`);
  let isGM = MTScript.execMacro(`[r:isGM()]`);
  
  
//first get the image for all token type
  let size = JSON.parse(MTScript.execMacro(`[r:getInfo("client")]`))["portrait size"];
  let image = MTScript.execMacro(`[r:getTokenImage("${size}", "${id}")]`);
  document.body.innerHTML += `<table><tr><td><img src="${image}"></td></tr></table><table class="properties">`;
  
  var text;
  
  //first distance
  text += `<tr><td class="lables">Distance</td><td>${getDistance(
  
  
  
  if(!isPC && !isGM) {MTScript.abort();}
  
 
  let vArray = [Distance,Movement,SpellSlot,Power,Health,AC,Information];
  
  var val, prop
  for(let x in vArray) {
    val = token.getProperty(x);
    if(Var
  }
}