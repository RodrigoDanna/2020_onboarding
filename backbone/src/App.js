define([
    'jquery',
    'core_bundle',
    'Collections/ResultsCollection',
    'Views/MainView'
], ($, Core, ResultsCollection, MainView) => {

    const results = new ResultsCollection();

    const mainView = new (MainView())({
        el: $('#root')
    })

    window.addEventListener('requestResultsList', (e) => {
        let inputSearch = e.detail.inputSearch;

        Core.default.getData(inputSearch).then((response) => {
            results.reset(response.data)

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