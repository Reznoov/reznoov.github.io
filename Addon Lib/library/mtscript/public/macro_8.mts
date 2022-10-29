[h: assert(isGM(),"<b>" + getMacroName() + "</b> is a GM only macro.", 0)]

[h: vArray = getSelected("json")]
[h: assert(json.length(vArray), strformat("(%s) Error, no tokens selected", getMacroName()), 0)]

[h: vText = ""]
[h, foreach(id, vArray): vText = listAppend(vText, "<li>"+getName(id)+"</li>", "")]

[h: vText = strformat("<html><b style='font-size:10px;'>The following tokens will be used for the player overlay.<br> Please press OK to confirm:</b><br><ol>%{vText}</ol></html>")]
[h: vText = "junk | "+vText+" | This is the tooltip | LABEL | SPAN=TRUE"]
[h: abort(input(vText))]


[h: setLibProperty("player_tokens", vArray)]
[h: execFunction("playerOverlay", "[]", 0, "all")] 

