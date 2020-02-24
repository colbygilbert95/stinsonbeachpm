function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

$(document).ready(function () {
    var picker = new Lightpick({
        inline: true,
        singleDate: false,
        numberOfMonths: 2,
        field: document.getElementById('datepicker'),
    });

})