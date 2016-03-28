// ==UserScript==
// @name			SteamGroupAutoJoiner
// @namespace		SteamGroupAutoJoiner
// @description		Autojoins steam groups
// @version			0.1
// @author			Pepperooney
// @include			http://steamcommunity.com/groups/*
// @supportURL   	https://github.com/Pepperooney/SteamGroupAutoJoiner/issues
// @updateURL    	https://raw.githubusercontent.com/Pepperooney/SteamGroupAutoJoiner/master/autojoin.user.js
// @downloadURL  	https://raw.githubusercontent.com/Pepperooney/SteamGroupAutoJoiner/master/autojoin.user.js
// @grant 			window.close
// ==/UserScript==
var content = document.body.textContent || document.body.innerText;
var hasText = content.indexOf("Join Group")!==-1;
if(hasText){
    javascript:document.forms['join_group_form'].submit();
}
//to do
var hasTextru = content.indexOf("Присоединиться")!==-1; 
if(hasTextru){
    javascript:document.forms['join_group_form'].submit();
}
setTimeout (window.close, 5000);
