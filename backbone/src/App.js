define([
    'jquery',
    'core_bundle',
    'Collections/ResultsCollection',
    'Views/MainView',
    'react_bundle',
], ($, Core, ResultsCollection, MainView) => {

    const results = new ResultsCollection();

    const mainView = new (MainView());
    mainView.render();

    window.addEventListener('requestResultsList', (e) => {
        let inputSearch = e.detail.inputSearch;

        Core.default.getData(inputSearch).then((response) => {
            results.reset(response.data)

            window.dispatchEvent(
                new CustomEvent('setResultsItems', {
                    detail: {
                        inputSearch: inputSearch,
                        results: {
                            total: response.total,
                            data: results.toJSON()
                        }
                    },
                })
            )
        })
    })

    return this
})