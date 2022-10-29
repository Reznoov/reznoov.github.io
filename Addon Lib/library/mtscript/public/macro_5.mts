[h: vArray = js.getFromDatabase("player_tokens")]
[h: abort(json.length(vArray))]

[h: vBody = ""]
[h: vText = ""]
[h, foreach(id, vArray), code: {
  [h: hp = getProperty("curhp", id)]
  [h: hpMax = getProperty("maxhp", id)]
  [h: player = "player"+roll.count]
   
  [h: vText = strformat('%{vText}<tr><td class="players"><div class="img_border"><div onclick="submitForm(this)" class="tok_img"><a href="%s"><img class="player_img" src="%s"></a></div></div>', macroLinkText("gotoToken@Lib:Prime", "none", id), getTokenImage("", id))]
  [h: vText = strformat('%{vText}<div class="tok_name">%s</div>', getName(id))]
  [h: vText = strformat('%{vText}<div class="bars"><div class="hp_max"><p name="%{player}" class="hp_txt">%{hp} / %{hpMax}</p><div name="%{player}" class="hp_cur"></div></div>')]
  [h: vText = strformat('%{vText}<div class="mana_max"><p class="mana_txt">mana</p><div name="%{player}" class="mana_cur"></div></div>')]

  [h: vList = getTokenStates("json", "Conditions", id)]
  [h: vState = ""]
  [h, foreach(var, vList), code: {
  	[h: vTag = var + id]
  	[h: vTooltip = js.formatStateText(js.textMatch(var), js.getDescription(var, "stateObj"))]
  	[h: vState = strformat('%{vState}<img onmouseover="showTooltip(this, 1)" onmouseout="showTooltip(this, 0)" name="%{vTag}" class="states" src="%s">', getStateImage(var))]
  	[h: vBody = strformat('%{vBody}<div class="tooltips" id="%{vTag}">%{vTooltip}</div>')]
  }]
  [h: vText = strformat('%{vText}<div class="icons">%{vState}</div></div>')]
  [h, if(getProperty("TempHP", id)): vText = strformat('%{vText}<div class="thp"></div>')]
  [h: vText = vText + "</td></tr>"]
}]
[h: vBody = strformat("<table id='playerOverlay'>%{vText}</table>%{vBody}")]

[overlay("playerOverlay"): {
<html>
<head>
<link rel="stylesheet" type="text/css" href="playerOverlay.css@Lib:Prime">
</head>
<body>
[r:vBody]
</body>
<script>
[r, token(getMacroLocation()): getMacroCommand(number(getMacroIndexes("playerOverlay.js")))]
</script>
</html>  

}]