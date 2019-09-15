// ==UserScript==
// @namespace    https://openuserjs.org/users/rbrock
// @name         Dr. Watson
// @description  Pequenas contribuições para auxiliar as Sherlock Holmes da Auditoria Médica
// @author       Rodolpho Brock
// @copyright    2019, rbrock (https://openuserjs.org/users/rbrock)
// @license      AGPL-3.0-or-later
// @version      0.1.1
// @match        https://topsaudev12.sistemas.centralnacionalunimed.com.br/TSNMVC/TSNMVC/Home/AreaLogada
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js
// @resource     jConfirm https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author rbrock
// ==/OpenUserJS==

var jConfirm = GM_getResourceText("jConfirm");
GM_addStyle(jConfirm);

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

(function() {
    'use strict';

    // Your code here...
    $.confirm({
    title: 'Dr. Watson',
    content: 'Deseja abrir a próxima GUIA de AUDITORIA MÉDICA?',
    columnClass: 'medium',
    icon: 'fa fa-notes-medical',
    type: 'green',
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
})();
