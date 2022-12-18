@-moz-document domain("o3o.ca"), domain("alive.bar"), domain("nebula.moe"), domain("slashine.onl"), domain("wxw.moe") {
    
/* ==UserStyle==
@name        Mastodon 去除猫耳
@description Add cat ears to user avatars
@version     1.0.0
@namespace   ca.o3o.mastodon-remove-cat-ears
@author      O3O
@match       https://mstdn.hw2k.com/*
==/UserStyle== */
 
/* 去除猫耳 */
 
.status__avatar::before {
  opacity: 0;
}
 
.status__avatar::after {
  opacity: 0;
}
 
.status__avatar:hover::before {
  opacity: 0;
}
 
.status__avatar:hover::after {
  opacity: 0;
}
 
.account__avatar {
  border-radius: 0%;
  z-index: 1;
}
 
}
