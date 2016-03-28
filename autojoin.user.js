// ==UserScript==
// @name		SteamGroupAutoJoiner
// @namespace	http://steamcommunity.com/id/Rooney_10
// @description	Autojoins steam groups
// @version		0.1
// @author		Pepperooney
// @include		http://steamcommunity.com/groups/*
// @grant window.close
// ==/UserScript==


var content = document.body.textContent || document.body.innerText;
var hasText = content.indexOf("Join Group")!==-1;
if(hasText){

    javascript:document.forms['join_group_form'].submit();
}
//костыль
var hasTextru = content.indexOf("Присоединиться")!==-1; 
if(hasTextru){

    javascript:document.forms['join_group_form'].submit();
}



setTimeout (window.close, 5000);