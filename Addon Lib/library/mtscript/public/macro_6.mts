
* {
  font-family: "Times New Roman";
  cursor: default;
  font-size: 14px;
}

body {
  margin: 0px;
  display:flex;
}

table#playerOverlay {
  table-layout: fixed;
  border-spacing: 0;
  min-width: 250px;
  width: 330px;
  margin: 5px;
}

td.players {
  height: 92px;
}

div {
  float: left;
  margin: 0px;
  position: relative;
}


img.player_img {
  z-index: 4;
  width: 82px;
  object-position: -4px -4px;
  cursor: pointer;
}

.img_border {
  width: 75px;
  height: 75px;
  border: 5px outset black;
  border-radius: 50%;
  z-index: 2;
  background-color: #fff;
  display:block;
  justify-content: center;
    overflow: hidden;
}

.tok_name {
  min-width: 100px;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; 
  font-weight: bolder;
  font-size: 14px;
  font-family: monospace;
  background-color: rgba(221,	221,	221, .85);
  padding: 0px 15px 2px 27px;
  right: 35px;
  top: 1px;
  border: 2px groove #222020;
  border-radius: 0px 50px 0px 0px;
}

div.bars {
  width: 210px;
  right: 9px;
  overflow: visible;
}

.hp_max {
  width: 200px;
  height: 18px;
  position: relative;
  border: 2px groove #222020;
  background-color: rgba(86,	80,	73, .8);
  color: #fff;
}

.hp_txt {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.hp_cur {
 height: 100%;
 background-color: green;
 width:50%;
}

.thp {
  width: 30px;
  height: 26px;
  border: 1px solid #eab923;
  position: relative;
  right: 42px;
  bottom: 3px;
  background-color: rgba(236,	192, 58, .6);
  -ms-transform: rotate(180deg);
}

.mana_max {
  width: 180px;
  height: 14px;
  background-color: #2d86c9;
  border: 2px groove #222020;
  border-top: 0px;
}

.mana_txt {
  margin: 0;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: none;
}

.mana_cur {
  height: 100%;
  width: 100%;
}

.icons {
  width: 100px;
  height: 25px;
  left: 8px;
  padding-top: 2px;
}

.states {
  width: 25px;
  padding-left: 2px;
}


.tooltips {
  width: 215px;
  background-color: #fff;
  border: 3px groove #444;
  z-index: 5;
  position: absolute;
  display: none;
}

.tooltips table {
  table-layout: fixed;
  border-spacing: 0;
}

.tooltips th {
  color: white;
  font-size:14px;
  background-color: #000;
  padding: 4px;
}

.tooltips ul,
.tooltips ol {
  position: relative;
  right: 10%;
  width: 90%;
  margin: 4px 0px 10px 2px;
  
}

.tooltips * {
  font-size: 13px;
}
