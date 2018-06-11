
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
   
getDefaultProps: function() {
    console.log('getDefaultProps - ustawiam domyślne wartości propsów');
}, 
    
componentWillMount: function() {
    console.log('componentWillMount - jestem wykonywana przed renderem');
},
    
componentDidMount: function() {
    console.log('componentDidMount - jestem wykonywana po renderze');
},
    
componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps - jestem wywoływana, gdy zmieniają się propsy');
},
    
shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate - mogę być wykorzystana do optymalizacji aplikacji');
    return true;
},
    
componentWillUpdate: function() {
    console.log('componentWillUpdate - jestem wywoływana przed metodą render');
},
    
componentDidUpdate: function() {
    console.log('componentDidUpdate jestem wywoływana po renderze');
},
    
componentWillUnmount: function() {
    console.log('componentWillUnmount - jestem wywoływana przed usunięciem komponentu z drzewa DOM');
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

ReactDOM.render(element, document.getElementById('app'));