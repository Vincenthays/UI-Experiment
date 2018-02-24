let settingsArea = $('#settings-panel');
let contentArea = $('#content');
let card = $('.card');
let scriptDetails = $('#script-details');
let background = $('#background');

settingsArea.click(() => settingsArea.addClass('active'));
contentArea.click(() => settingsArea.removeClass('active'));
card.click(() => {
    if (!settingsArea.hasClass('active')) {
        $(scriptDetails).addClass('active');
        background.addClass('active');
    }
});
scriptDetails.click(e => {
    if (e.target.id == 'script-details') {
        scriptDetails.removeClass('active');
        background.removeClass('active');
    }
});