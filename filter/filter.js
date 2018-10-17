var Filter = React.createClass({

    displayName: 'Текстовый фильтр',

    propTypes: {
        wordsDefault: React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            words: this.props.wordsDefault.slice(),
            searchString: '',
            sort: false,
        }
    },

    sortStateSet: function(e) {
        e.target.checked? this.state.sort=true : this.state.sort=false;
        this.sortAndFilter();
    },

    filterStateSet: function(e) {
        this.state.searchString = e.target.value;
        this.sortAndFilter();
    },

    sortAndFilter: function() {
        let query = this.state.searchString;
        let tempArr = this.state.words;
        tempArr = this.props.wordsDefault.filter(function(item) {
            return item.indexOf(query) > -1;
        });
        if (this.state.sort) {
            tempArr.sort();
        }
        this.setState({words:tempArr, searchString:query});
    },

    render: function() {
        let wordsList = [];
        this.state.words.forEach( function(item, i) {
            wordsList[i] = React.DOM.div({className:'filter__single-word', key:i}, item)}
        );
        return React.DOM.div({className:'filter__main-block'},
            React.DOM.input({className:'filter__checkbox', type:'checkbox', onChange:this.sortStateSet}),
            React.DOM.input({className:'filter__search-input', type:'text', onChange:this.filterStateSet, value:this.state.searchString}),
            React.DOM.div({className:'filter__words-box'},
                wordsList
            )
        );
    }

});