
//Converts dangerous characters into their safe entity counterpart. Also converts underlines into blank spaces for easy display

const escaper = text => {
  text = text.replace(`'`, "&apos");
  text = text.replace(`"`, "&quot;");
  text = text.replace(`_`, " ");
  return text;
}

//returns a string of a number with a position suffix
const numString = number => {
  var x;
  number = String(number);
  let y = number.length - 1;
  switch(Number(number.substring(y))) {
    case 1: x = "st";
      break;
    case 2: x = "nd";
      break;
    case 3: x = "rd";
      break;
    default: x = "th";
 }
  if(number.substring(number.length - 2, y) == 1) {x = "th";}
  return number + x;
}

//Emulate the default style of the chat output. Parameter one is a required string that you wish to output. Parameter two is optional and takes in either a number, a string containing the name of a color, or a hex code. If a number is used for one of the preset colors, 1 is for black, 2 is for green, 3 is for red, and 4 is for yellow. IMPORTANT: This function should only be use to emulate, NOT mimic the chat output exactly since this function can make it easier for players to fake an output or a roll.

const boxText = (text, color, outputType) => {
  if(typeof text === "undefined") {text = ""}
  if(typeof color === "undefined") {color = 1;}
  if(typeof outputType === "undefined") {outputType = "all";}
  
 if(!isNaN(color)) { color = Number(color);}
  switch(color) {
    case 1: color = "black";
      break;
    case 2: color = "#11e517";
      break;
    case 3: color = "red";
      break;
    case 4: color = "#fcc50c";
      break;
    }
  let x = `border-spacing:0;border-left: 3px solid ${color};padding-left:2px;margin:2px;`;
  text = `<table style='${x}'><tr><td>${text}</td></tr></table>`;
  if(outputType.search(/GM/gi) === -1) {
  	MapTool.chat.broadcastToGM(text);
  } else {
    MapTool.chat.broadcast(text);
  }
}

//Checks a string with a set of predefined values to see if they match. If they match then the matched result is returned instead of the original string. Parameter one is required and takes in the string that will be checked. Parameter two is optional and takes in a number 1-3 for the set of values to be checked against. 1 is for name of conditions, 2 is for name of resources, 3 is for name of spells. Defaults to 1.

const textMatch = (text, config) => {
  if(text === undefined) {MTScript.mtsAssert(0, "Function must have at least one argument");}
  if(config === undefined) {config = 1;}
  
  switch(Number(config)) {
    case 1:
      if(text.search(/^(exhaust(ion|ed)?\d?)/gi) !== -1) {text = "Exhaustion";}
      else if(text.search(/^(charm(ed)?)/gi) !== -1) {text = "Charmed";}
      else if(text.search(/^(deaf(en(ed)?)?)/gi) !== -1) {text = "Deafened";}
      else if(text.search(/^(confus(ed|ion|e))/gi) !== -1) {text = "Confused";}
      else if(text.search(/^(shaken(ed)?)/gi) !== -1) {text = "Shakened";}
      else if(text.search(/^(frighten(ed)?)/gi) !== -1) {text = "Frightened";}
      else if(text.search(/^(stunn?(ed)?)/gi) !== -1) {text = "Stunned";}
      else if(text.search(/^(panick(ing|ed)?)/gi) !== -1) {text = "Panicked";}
      else if(text.search(/^(restrain(ed)?)/gi) !== -1) {text = "Restrained";}
      else if(text.search(/^(proned?)/gi) !== -1) {text = "Prone";}
      else if(text.search(/^(unconscious(ed)?)/gi) !== -1) {text = "Unconscious";}
      else if(text.search(/^(blind(ed)?)/gi) !== -1) {text = "Blinded";}
      else if(text.search(/^(dying\d?)/gi) !== -1) {text = "Dying";}
      else if(text.search(/^(grapple?d?)/gi) !== -1) {text = "Grappled";}
      else if(text.search(/^(sick(en(ed)?)?\d?)/gi) !== -1) {text = "Sicken";}
      break;
    case 2:
      if(text.search(/^(balm.?(court|summer)?|summer.?court|court.?summer)/gi) !== -1) {text = "Balm of the Summer Court";}
      else if(text.search(/^(fight.{0,4}spirit|spirit.?fight(ing)?)/gi) !== -1) {text = "Fighting Spirit";}
      else if(text.search(/^(heal(ing)?.?light|light.?heal(ing)?)/gi) !== -1) {text = "Healing Light";}
      else if(text.search(/^(loh|lay.{0,4}?hands?)/gi) !== -1) {text = "Lay on Hands";}
      else if(text.search(/^(wrath.?(of)?.?(the)?.?storm|storm.?wrath)/gi) !== -1) {text = "Wrath of the Storm";}
      else if(text.search(/^(bard(ic)?.?(insp(ration)?)?)/gi) !== -1) {text = "Bardic Inspiration";}
      else if(text.search(/^(sentinel|death('s)?.?door)/gi) !== -1) {text = "Sentinel at Death's Door";}
      else if(text.search(/^(Embold(en(ing)?)?.?bond)/gi) !== -1) {text = "Emboldening BOnd";}
      else if(text.search(/^(dr?ead.?form|form.{0,4}dr?ead)/gi) !== -1) {text = "Form of Dread";}
      else if(text.search(/^(blades(o|i)ng(ing)?)/gi) !== -1) {text = "Bladesong";}
      else if(text.search(/^(sorc(ery)?\W*(points?|p))/gi) !== -1) {text = "Sorcery Points";}
      else if(text.search(/^(wails?.?(from)?.?(the)?.?grave)/gi) !== -1) {text = "Wails from the Grave";}
      else if(text.search(/^(divine.?sense|sense.?divine)/gi) !== -1) {text = "Divine Sense";}
      else if(text.search(/^(war.?priest|priest.?war)/gi) !== -1) {text = "War Priest";}
      else if(text.search(/^(ward(ing)?.?flare|flare,?(ward(ing)?)?)/gi) !== -1) {text = "Warding Flare";}
      else if(text.search(/^(tentacle.?(of)?.?(the)?.?deeps?|deeps?.?tentacle)/gi) !== -1) {text = "Tentacle of the Deeps";}
      else if(text.search(/^(mark(ed)?.?foes?|foe.?mark(ed)?)/gi) !== -1) {text = "Marked Foe";}
      else if(text.search(/^(eyes?.?(of)?.?night|night.?eyes?)/gi) !== -1) {text = "Eyes of Night";}
      else if(text.search(/^((second|2nd).?wind)/gi) !== -1) {text = "Second Wind";}
      else if(text.search(/^(giant'?s?.?might|might.?giant)/gi) !== -1) {text = "Giant's Might";}
      else if(text.search(/^(runes?)/gi) !== -1) {text = "Runes";}
      else if(text.search(/^(run(e|ic).?shield|shield.?rune)/gi) !== -1) {text = "Runic Shield";}
      else if(text.search(/^(arcan(e|a).?shoo?t|shot.?arcane)/gi) !== -1) {text = "Arcane Shot";}
      else if(text.search(/^(superiority.?(die|dice)?)/gi) !== -1) {text = "Superiority Dice";}
      else if(text.search(/^(action.?surge|surge.?action.?)/gi) !== -1) {text = "Action Surge";}
      break;
    case 3:
      if(text.search(/^burning.?hands?/gi) !== -1) {text = "Burning Hands";}
      else if(text.search(/^counter.?spells?/gi) !== -1) {text = "Counterspell";}
      else if(text.search(/^inflict.?wounds?/gi) !== -1) {text = "Inflict Wounds";}
      else if(text.search(/^legend(ary)?.?lure/gi) !== -1) {text = "Legend Lure";}
      else if(text.search(/^healing.?words?/gi) !== -1) {text = "Healing Word";}
      else if(text.search(/^cure.?wounds?/gi) !== -1) {text = "Cure Wounds";}
      else if(text.search(/^Green.?Flame.?Blade/gi) !== -1) {text = "Green-Flame Blade";}
      else if(text.search(/^colou?r.?spray/gi) !== -1) {text = "Color Spray";}
      else if(text.search(/^colou?r.?spray/gi) !== -1) {text = "Counterspell";}
      
      text = text.replace(/tash'?s?/gi, "Taha's");
      break;
    case 4:
      break;
  }
return text;
}

//gets big objects from present lib token property. does not make.
const getFromDatabase = (propName, objName) => {
  
  let map = JSON.parse(MTScript.evalMacro(`[r:getTokenMap("Lib:Prime", "json")]`))[0];
  let id = MTScript.evalMacro(`[r:findToken("Lib:Prime", "${map}")]`);
  var vObj = JSON.parse(MapTool.tokens.getTokenByID(id).getProperty(propName));
  
  if(typeof objName !== "undefined") {
  	objName = textMatch(objName, 1);
    vObj = vObj[objName];
    return vObj;
  } else {
    return vObj; 
  }
}


//get the distance between two tokens factoring elevation and rounding the final result to the nearest 5 base. Parameter 2 is optional and defaults to current token.
const getDistance = (target, source) => {
  if(target === undefined) {MTScript.mtsAssert(0, "Function must have at least one argument");}
  if(source === undefined) {source = MTScript.evalMacro("[r:getImpersonated()]");}
  source = MTScript.evalMacro(`[r:findToken("${source}")]`);
  var sourceToken = MapTool.tokens.getTokenByID(source);
  
  target = MTScript.evalMacro(`[r:findToken("${target}")]`);
  var targetToken = MapTool.tokens.getTokenByID(target);
  
  var distance = MTScript.evalMacro(`[r:getDistance("${target}", 1, "${source}")]`);
  
  var targetV = targetToken.getProperty("Elevation");
  if(!targetV || targetV == "null") {targetV = 0;}
  var sourceV = sourceToken.getProperty("Elevation");
  if(!sourceV || sourceV == "null") {sourceV = 0;}
  
  distance = Math.sqrt(Math.pow(distance, 2) + Math.pow(targetV - sourceV, 2));
  distance = (Math.round(distance/5) * 5);
  
  return distance;
}

//format the spell info
const formatSpell = spellName => {
  let vObj = JSON.parse(MTScript.evalMacro(`[r:database("SpellObj","${spellName}")]`));
  let level = vObj.Level, text = vObj.Text;
 
  var descript = `<h2><u>${spellName}</u></h2>`;
  if(Number.isInteger(level)) {
    descript += `<i>${numString(level)}-Level ${vObj.School}</i>`;
  } else {
    descript += `<i>${vObj.School} ${level}</i>`;
  }
  descript += `<br><b>Casting Time:</b> ${vObj.Casting_Time}<br><b>Range:</b> ${vObj.Range}<br><b>Components:</b> ${vObj.Components}<br><b>Duration:</b> ${vObj.Duration}<hr>`;
  
  for (let x of text.match(/\.\w/g)) {
    text = text.replace(x, `${x[0]}<br><br>${x[1]}`);
  }
  text = text.replace(/At Higher Levels./gi, "<b>At Higher Levels.</b>");
  descript = `<html><div style='width:350px;'>${descript}${text}</div></html>`;
  return descript;
}

//Output a word with a tooltip containing its description. Parameter 2 is optional config for function. If set to true then stylize the text with coloring and underline. Defaults to true.

const infoTooltip = (text, config) => {
  if(text === undefined) {MTScript.mtsAssert(0,"Function must have at least one argument");}
  if(config === undefined) {config = 1;}
  text = textMatch(text);
  let vObj = getFromDatabase("stateObj", text);
  var description = vObj.Description;
  description = `<html><div style='width:175px;padding:3px;margin:0px;'><u><b>${text}</b></u><br>${description}</div></html>`;
  if(config) {
    var color = vObj.Color;
    if(!color) {color = "#000";} 
    text =  `<span style="color:${color};text-decoration:underline;font-weight:bold;" title="${description}">${text}</span>`;
  } else {
    text = `<span title="${description}">${text}</span>`;
  }
  return text;
}


//short display of information from resource property
const displayResources = id => {
  if(id === undefined) {id = MTScript.evalMacro("[r:getImpersonated()]");}
  let vObj = JSON.parse(MapTool.tokens.getTokenByID(id).getProperty("Resources"));
  if(!vObj) {MTScript.mtsAssert(0, `Resource property not found wihtin token`);} 
  
  var vOutput = "";
  for(let x in vObj) {
     var max = vObj[x].Max;
     if(!Number.isInteger(max)) {
        max = MTScript.execMacro(max);
     }
     if(vOutput) {vOutput += " | ";}
     vOutput += `<b>${x}:</b> ${vObj[x].Value}/${max}`;
  }
  return vOutput;
}

const getDescription = (vName, propName) => {
  if(vName === undefined) {MTScript.mtsAssert(0, "Function needs at least one argument");}
  if(propName === undefined) {propName = "stateObj";}
  switch(propName) {
    case "stateObj": vName = textMatch(vName, 1);
      break;
    case "abilityObj": vName = textMatch(vName, 2);
      break;
    case "spellObj": vName = textMatch(vName, 3);
      break;
  }
  let describe = getFromDatabase(propName, vName).Description;
  return describe;
}

const formatStateText = (vName, vText) => {
  var text = "";
  for (let x of vText.match(/["’]?[A-Z][^.?!]+((?![.?!][’"]?\s["’]?[A-Z][^.?!]).)+[.?!’"]+/g)) {
  	text += `<li>${x}</li>`;
  }
  if(vName == "Exhaustion") {
    text = `<ol>${text}</ol>`;
  } else {
    text = `<ul>${text}</ul>`;
  }
  text = `<table><tr><th>${vName}</th></tr><tr><td>${text}</td></tr></table>`;
  return text;
}

//Argument 1 takes in an array containing names of states. Spelling and case matters. Argument 2 takes in an array containing token ids. This parameter is optional and defaults to current token if empty. Returns nothing.

const applyState = (sArray, vArray) => {
  if(sArray === undefined) {MTScript.mtsAssert(0, "Function needs at least one argument");}
  if(vArray === undefined) {
    vArray = `["${MTScript.execMacro('[r:getImpersonated()]')}"]`;
  }
  let zArray = getFromDatabase("player_tokens");
  sArray = JSON.parse(sArray);
  vArray = JSON.parse(vArray);
  
  var check, state;
  for(let x in vArray) {
    if(zArray.includes(vArray[x])) {check = true;}
    for(let y in sArray) {
      state = Number(MTScript.execMacro(`[r:getState("${sArray[y]}", "${vArray[x]}")]`));
      if(state) {
        MTScript.execMacro(`[r:setState("${sArray[y]}", 0, "${vArray[x]}")]`);
      } else {
        MTScript.execMacro(`[r:setState("${sArray[y]}", 1, "${vArray[x]}")]`);
      }
    }
  }
  if(check) {
    MTScript.evalMacro("[r:playerOverlay()]");
  }
}

const testing = vObj => {
  vObj = JSON.parse(vObj);
  return vObj[0];
}

MTScript.registerMacro("testing", testing);
MTScript.registerMacro("applyState", applyState);
MTScript.registerMacro("formatStateText", formatStateText);
MTScript.registerMacro("getDescription", getDescription);
MTScript.registerMacro("escaper", escaper);
MTScript.registerMacro("getFromDatabase", getFromDatabase);
MTScript.registerMacro("displayResources", displayResources);
MTScript.registerMacro("infoTooltip", infoTooltip);
MTScript.registerMacro("formatSpell", formatSpell);
MTScript.registerMacro("getDistance", getDistance);
MTScript.registerMacro("boxText", boxText);
MTScript.registerMacro("numString", numString);
MTScript.registerMacro("textMatch", textMatch);
