export const fetchSearchResults = query => (
    $.ajax({
        method: 'GET',
        url: 'api/search',
        data: { query }
    })
);