//js context keep this 

playerOverlay = () => {
  let vArray = getFromDatabase("player_tokens");
  document.getElementsByTagName("BODY")[0].innerHTML += "<table id='playerOverlay'></table>";
  
  var token, hp, hpMax, name, image, 
  text, count, player;
  
  for(let id in vArray) {
    count++
    player = "player" + count;
    token = MapTool.tokens.getTokenByID(id);  
    hp = token.getProperty("hp");
    hpMax = token.getProperty("hp");
    name = token.getName();
    image = MTScript.execMacro(`[r:getTokenImage("", "${id}")]`);
    
    text = `<div class="img_border"><div class="tok_img">${image}</div></div>`;
    text += `<div class="tok_name">${name}</div>`;
    text += `<div class="hp_max"><p class="hp_txt">${hp} / ${hpMax}</p><div name="${player}" class="hp_cur"></div></div>`;
    text += `<div class="mana_max"><p></p><div name="${player}" class="mana_cur"></div></div><div class="icons"></div>`;
    document.getElementById("playerOverlay").innerHTML += `<tr><td class="players">${text}</td></tr>`;

    document.querySelector(`div.hp_cur[name=${player}]`).style.width = hp/hpMax + "%";  
  }
}