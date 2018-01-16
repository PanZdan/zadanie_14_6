var Counter = React.createClass({
  getInitialState() {
    // console.log('Metoda - getInitialState okreslamy poczatkowy stan naszego komponentu');
    return {
      counter: 0
    };
  },

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentWillMount() {
    console.log('Metoda - componentWillMount wywołuje się przed metoda render - montujcej komponent w drzewie DOM');
  },
  componentDidMount() {
    console.log('Metoda - componentDidMount wywołuje się po zakończeniu metody reneder - w tym momencie nasz komponent jest już zamontowany w drzewie DOM - możemy manipulować drzewem DOM');
  },
  componentWillReceiveProps() {
    console.log('Metoda - componentWillReceiveProps zostanie wywołana jeżeli komponent otrzyma nowe własciwosci - pozwala aktualizować stan na podstawie nadchodzcych własciwosci');
  },
  shouldComponentUpdate() {
    console.log('Metoda - shouldComponentUpdate uruchamia się przed metoda render i sprawdza czy zaszły zmiany i czy trzeba przerysować komponent');
    return true;
  },
  componentWillUpdate() {
    console.log('Metoda - componentWillUpdate zostanie uruchomiona, kiedy metoda - shouldComponentUpdate zwróci wartosc true - komponent przygotowany do aktualizacji');
  },
  componentDidUpdate() {
    console.log('Metoda - componentDidUpdate zostanie uruchomiona, po metodzie render - możemy manipulować drzewem DOM');
  },
  componentWillUnmount() {
    console.log('Metoda - componentWillUnmount, służy do odmontowania komponentu');
  },
  render() {
    return React.createElement('div', {},
      React.createElement('button', {onClick: this.increment}, 'Increment'),
      React.createElement('button', {onClick: this.decrement}, 'Decrement'),
      React.createElement('span', {}, 'Licznik: ' + this.state.counter)
    );
  }
});

var element =
  React.createElement('div', {},
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, )
  );

ReactDOM.render(element, document.getElementById('app'));