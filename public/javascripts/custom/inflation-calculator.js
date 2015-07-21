// code your functions here

function fetchOptions() {

    var start = $('#startDate').val();
    var end = $('#endDate').val();
    var price = $('#startPrice').val();

    return {
        start: start,
        end: end,
        amount: price
    }
}

function addPriceToPage(price) {

    var price = price.slice(1, price.length);
    $('#endPrice').val(price);
    return price;
}

function priceFor(options) {


    var apiUrl = "http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?";

    $.getJSON(apiUrl, {
        country: 'united-states',
        start: options.start,
        end: options.end,
        amount: options.amount,
        format: true
    }).done(function (data) {
        addPriceToPage(data);
    });
}

function fetchEndPrice() {
    priceFor(fetchOptions());
}
