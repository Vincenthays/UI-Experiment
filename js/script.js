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
    }
});
scriptDetails.click(e => {
    if (e.target.id == 'script-details') {
        scriptDetails.removeClass('active');
    }
});

// live search
$('input[data-live-search]').keyup(function() {
    let search = $(this).val().toUpperCase();
    // console.log(search);
    
    $(this)
        .parent()
        .children('[data-items]')
        .children()
        .each(function() {
            if ($(this).text().toUpperCase().indexOf(search) == -1)     $(this).hide();
            else                                                        $(this).show();
        }
    );
})