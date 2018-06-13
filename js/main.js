'use strict';

function onLoadModal(elFolio) {
    var elFolioId = elFolio.id;
    showModal(elFolioId);
}

function showModal(folioId) {
    var folioModalId = `portfolioModal-${folioId}`;
    $('.proj-modal').attr('id', folioModalId);
    $('#' + folioModalId).html(fillProjModal(folioId));
    $('#' + folioModalId).modal('show');
}
function onSubmit(){
    setUserDetails();
}

function fillProjModal(projId) {
    var proj = getProjById(projId);
    var strHtml = `
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${proj.name}</h5>
            <img src="projs/img/${proj.id}.png" />
            </button>
        </div>
        <div class="modal-body">
           ${fillModalBody(proj)}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>`;
    return strHtml;
}
function fillModalBody(proj) {
    var strHtml;
    strHtml = `<div class ="${proj.id}">
        <div class="proj-details-container">
       <span> name: ${proj.name}</span>
       <span> title: ${proj.title}</span>
       <span> desc: ${proj.desc}</span>
       <span> desc: ${proj.url}</span>
       
       <span> published at: ${proj.publishedAt}</span>
       <span> labels: ${proj.labels}</span>`;

    return strHtml;
}
function getProjById(projId) {
    var wantedProj = gProjs.filter(function (proj) {
        return (proj.id === projId)
    })
    return wantedProj[0];
}

function renderPortFolios() {
    var renderedFolios = gProjs.map(function (proj) {
        var folioHtml =
            `<div class="col-sm-4 portfolio-item">
            <a id="${proj.id}" class=" portfolio-link" data-toggle="modal" href="#portfolioModal-${proj.id}" onclick="onLoadModal(this)">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>    
                    </div>
                </div>
                ${proj.img}
                    </a>
                <div class="portfolio-caption">
                    <h4>${proj.name}</h4>
                    <p class="text-muted">${proj.desc}</p>
                </div>
                </div>`;
        return folioHtml;
    })
    $('.folio-row').html(renderedFolios.join(' '));
}
renderPortFolios();