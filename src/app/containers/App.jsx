import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import NewHeader from '../components/NewHeader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  getStyles() {
    const styles = {
      header: {
        width: '100%',
        height: '100',
        backgroundColor: grey900,
        textAlign: 'center'
      }
    };
    return styles;
  }

  render() {
    const styles = this.getStyles();

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NewHeader/> {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
