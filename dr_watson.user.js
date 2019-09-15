// ==UserScript==
// @namespace    https://openuserjs.org/users/rbrock
// @name         Dr. Watson
// @description  Pequenas contribuições para auxiliar as Sherlock Holmes da Auditoria Médica
// @author       Rodolpho Brock
// @copyright    2019, rbrock (https://openuserjs.org/users/rbrock)
// @license      AGPL-3.0-or-later
// @version      0.1.016
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
                    $("#btn-menu").click()
                    $("#dropdown-lvlATD22 > div > ul > li:nth-child(10) > a").click();
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
    if($('#num_pedido').length) {
        /* GUIA CARREGADA */
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
    } else {
        /* TELA DE PESQUISA */
        $("#chk_pendente").click();
    }
}
 
$(document).ready(function(){
    'use strict';
    console.log("Dr. Watson is ready", $(document));
    
    $("#iframeasp").on("load", function() {
        console.log("Dr. Watson is ready", $("#iframeasp"));
        var currentFrame = $("#iframeasp")[0].src;
        console.log("Dr. Watson current", currentFrame);
        
        if (currentFrame.lastIndexOf("ace003d.asp") === 85) extendHome();
        else if (currentFrame.lastIndexOf("atd0198a.asp") === 89) extendGuia();
    });
    
    console.log("Dr. Watson is done.");
});

console.log("Dr. Watson is ready!");
