// ==UserScript==
// @name			SteamGroupAutoJoiner
// @namespace		sgaj
// @description		Autojoins steam groups
// @version			0.1
// @author			Pepperooney
// @include			http://steamcommunity.com/groups/*
// @supportURL   	https://github.com/Pepperooney/SteamGroupAutoJoiner/issues
// @updateURL    	https://github.com/Pepperooney/SteamGroupAutoJoiner/raw/master/autojoin.user.js
// @downloadURL  	https://github.com/Pepperooney/SteamGroupAutoJoiner/raw/master/autojoin.user.js
// @grant 			window.close
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
