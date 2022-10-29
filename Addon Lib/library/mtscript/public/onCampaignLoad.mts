[h: var = replace(getMacroLocation(),"(?i)^lib:", "")]
[h: js.evalURI("starter", "lib://"+var+"/macro/library.js")]

[h: defineFunction("playerOverlay", "playerOverlay@"+getMacroLocation(), 0)]