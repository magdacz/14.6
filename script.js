
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('h2', {}, 'Licznik: ' + this.state.counter),
            
            React.createElement('div', {className: 'btns'},
                React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
                React.createElement('button', {onClick: this.increment}, 'Dodaj')  
            )
        );
    }
});

var element = React.createElement('div', {},
                                  
    React.createElement('div', {},
        React.createElement('h1', {}, '1'),
        React.createElement(Counter)
    ),
    React.createElement('div', {},
        React.createElement('h1', {}, '2'),
        React.createElement(Counter)
    ),                               
    React.createElement('div', {},
        React.createElement('h1', {}, '3'),
        React.createElement(Counter)
    ),
    React.createElement('div', {},
        React.createElement('h1', {}, '4'),
        React.createElement(Counter)
    )

);

/*
getDefaultProps: function() {
    console.log('Metoda ustawia domyślne wartości propsów');
},
componentWillMount: function() {
    console.log('Metoda wykonywana przed wykonaniem metody render, przed zamontowaniem komponentu');
},
componentDidMount: function() {
    console.log('Metoda wywoływana po wykonaniu render, nadaje się do wczytania danych z serwera');
},
componentWillReceiveProps: function() {
    console.log('Metoda wywoływana, gdy zmieniają się propsy');
},
shouldComponentUpdate: function() {
    console.log('Metoda może być wykorzystana do optymalizacji aplikacji');
},
componentWillUpdate: function() {
    console.log('Metoda wywoływana po metodzie render, można robić zmiany w DOM');
},
componentDidUpdate: function() {
    console.log('Metoda wywoływana po render(), gdy komponent został zaktualizowany, możemy wykonać manipulacje w DOM');
},
componentWillUnmount: function() {
    console.log('Metoda wywoływana przed usunięciem komponentu z drzewa DOM');
},
 */ 

ReactDOM.render(element, document.getElementById('app'));