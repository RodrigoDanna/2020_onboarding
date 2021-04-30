define([
    'jquery',
    'core_bundle',
    'Collections/ResultsCollection',
    'Views/HomeView'
], ($, Core, ResultsCollection, HomeView) => {

    const results = new ResultsCollection();

    const homeView = new (HomeView())({
        el: $('#root')
    })

    window.addEventListener('requestResultsList', (e) => {
        console.log('ouviu requestResultsList');
        let inputSearch = e.detail.inputSearch;

        Core.default.getData(inputSearch).then((response) => {
            results.reset(response.data)
            console.log('dispatch setResultsItems');

            window.dispatchEvent(
                new CustomEvent('setResultsItems', {
                    detail: {
                        results: {
                            total: response.total,
                            data: results.toJSON()
                        },
                        inputSearch: inputSearch
                    },
                })
            )
        })
    })

    return this
})