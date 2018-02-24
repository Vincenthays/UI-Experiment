let settingsArea = $('#settings-panel');
let contentArea = $('#content');
let card = $('.card');
let scriptDetails = $('#script-details');
let scriptDetailsContent = $('#script-details > .content');
let background = $('#background');

settingsArea.click(() => settingsArea.addClass('active'));
contentArea.click(() => settingsArea.removeClass('active'));
card.click(() => {
    $(scriptDetails).addClass('active');
    background.addClass('active');
});
scriptDetails.click(e => {
    if (e.target.id == 'script-details') {
        scriptDetails.removeClass('active');
        background.removeClass('active');
    }
});