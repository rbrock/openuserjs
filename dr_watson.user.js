// ==UserScript==
// @namespace    https://openuserjs.org/users/rbrock
// @name         Dr. Watson
// @description  Pequenas contribuições para auxiliar as Sherlock Holmes da Auditoria Médica
// @author       Rodolpho Brock
// @copyright    2019, rbrock (https://openuserjs.org/users/rbrock)
// @license      AGPL-3.0-or-later
// @version      0.1.014
// @match        https://topsaudev12.sistemas.centralnacionalunimed.com.br/TSNMVC/TSNMVC/Home/AreaLogada
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js
// @resource     jConfirm https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author rbrock
// ==/OpenUserJS==

console.log("Dr. Watson is here...");

GM_addStyle(GM_getResourceText("jConfirm"));

function extendHome() {
    // jumpToNext
    $.confirm({
        title: 'Dr. Watson',
        content: 'Deseja abrir a próxima GUIA de AUDITORIA MÉDICA?',
        columnClass: 'medium',
        icon: 'fa fa-notes-medical',
        type: 'green',
        draggable: true,
        theme: 'supervan',
        escapeKey: 'cancel',
        buttons: {
            confirm: {
                text: "Sim",
                btnClass: 'btn-green',
                action: function () {
                    document.querySelector("#dropdown-lvlATD22 > div > ul > li:nth-child(10) > a").click();
                }
            },
            cancel: {
                text: "Não",
                action: function () {
                //
                }
            }
        }
    });
}

function extendGuia(){
    var num_pedido = principal2.querySelector("#num_pedido")

    GM_addStyle(`
        table#tbAnexo {
            position: fixed;
            display: block;
            top: 10px;
            left: 10px;
            background-color: rgb(0, 79, 114);
        }

        th.grid_cabecalho {
            font-family: sans-serif;
            font-size: xx-small;
        }
    `);
}
 
$(document).ready(function(){
    'use strict';
    console.log("Dr. Watson is ready", $(document));
    
    $("#iframeasp").on("load", function() {
        console.log("Dr. Watson is ready", $("#iframeasp"));
        var iframeaspSrc = $("#iframeasp")[0].src;
        console.log("Dr. Watson current", iframeaspSrc);
        
        
        
            //var currentFrame = $('#principal2').context.activeElement.src;
            //console.log(currentFrame);

//        $("#principal2").on("load", function() {
//            console.log("Dr. Watson is ready", $("#principal2"));
//            var currentFrame = $('#principal2').context.activeElement.src;
//            console.log(currentFrame);
//            extendHome();
//        });
    });
    
    //if (principal2.src.lastIndexOf("ace003d") === 62) extendHome();
    //else if (principal2.src.lastIndexOf("atd0198") === 66) extendGuia();
    
    console.log("Dr. Watson is done.");
});

console.log("Dr. Watson is ready!");
