define([
    'jquery',
    'core_bundle',
    'Collections/ResultsCollection',
    'Views/HomeView'
], ($, Core, ResultsCollection, HomeView) => {

    const results = new ResultsCollection();

    const homeView = new(HomeView())({
        el: $('#root')
    })

    window.addEventListener('requestResultsList', (e) => {
        let inputSearch = e.detail.inputSearch;

        Core.default.getData(inputSearch).then((response) => {
            results.reset(response)

            window.dispatchEvent(
                new CustomEvent('setResultsItems', {
                    detail: {
                        results: results.toJSON(),
                        inputSearch: inputSearch
                    },
                })
            )
        })
    })

    return this
})