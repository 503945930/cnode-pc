import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddTopicBtn from './AddTopicBtn'; //发帖

import UserProfile from './UserProfile'; //用户简介
import Login from './Login';
import TopicDetail from './TopicDetail'; //帖子详情
import Message from './Message';
import * as loginaction from '../actions/loginaction';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openLogin = this.openLogin.bind(this);
  }
  componentWillMount() {
    if (window && typeof window.getloginconfig === 'function') {
      const config = window.getloginconfig();
      if (config.islogin === true) {
        const getAccessSuccess = loginaction.getAccessSuccess(config.user);
        this.props.dispatch(getAccessSuccess);
      }
    }
  }
  openLogin() {
    const openLogin = loginaction.openLogin();
    this.props.dispatch(openLogin);
  }
  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      },
      nodeIcon: {
        width: '120px',
        display: 'block',
        float: 'left',
        marginTop: '6px',
        marginRight: '10px'
      },
      searchText: {
        width: '230px',
        height: '45px',
        color: '#fff'
      }

    };
    return styles;
  }
  render() {
    const styles = this.getStyles();
    const islogin = this.props.islogin;
    const leftPart = (
      <div style={styles.hTagWrapper}>
        <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" style={styles.nodeIcon}/>
      </div>
    );
    const rightPart = islogin
      ? (
        <div>
          <UserProfile style={{
            marginTop: '6px',
            float: 'left'
          }}/>
          <AddTopicBtn style={{
            marginTop: '6px',
            float: 'left'
          }}/>
          <Message/>
        </div>
      )
      : (
        <div>
          <FlatButton label="登录" keyboardFocused={true} onTouchTap={this.openLogin} style={{
            marginTop: '6px',
            float: 'left'
          }}/>
        </div>
      );
    return (
      <div>
        <TopicDetail/>
        <AppBar style={styles.appBar} title="" iconElementLeft={leftPart} iconElementRight={rightPart}/>
        <Login/>
      </div>
    );
  }

}

Header.propTypes = {}

function mapStateToProps(state) {
  return {islogin: state.login.islogin};
}

export default connect(mapStateToProps)(Header);
