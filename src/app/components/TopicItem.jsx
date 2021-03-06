/**
 * 帖子列表
 */
import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {cyan500} from 'material-ui/styles/colors';
import * as topicaction from '../actions/topicaction';
import {connect} from 'react-redux';
import moment from 'moment';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class TopicItem extends React.Component {
  constructor(props) {
    super(props);
  }
  getStyles() {
    return {
      item: {
        float: 'left',
        marginRight: '20px',
        marginBottom: '20px',
        width: '330px'
      },
      subtitle: {
        width: 220,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }
  }
  openDetail(topicid) {
    const accesstoken = this.props.accesstoken;
    const gettopicdetail = topicaction.getTopicDetail(topicid, accesstoken);
    this.props.dispatch(gettopicdetail);
    /* const opentopicdetail = topicaction.openTopicDetail();
        this.props.dispatch(opentopicdetail);*/

  }
  tabMap(tab) {
    switch (tab) {
      case 'share':
        return '分享';
        break;
      case 'job':
        return '招聘';
        break;
      case 'ask':
        return '问答';
        break;
      default:
        return '';
        break;
    }
  }
  render() {
    const styles = this.getStyles();
    const {topic} = this.props;
    const topcontent = topic.top
      ? '置顶'
      :(topic.good ? '精华' : this.tabMap(topic.tab));
    let lastreply = new moment(topic.last_reply_at).startOf('day').fromNow().replace('ago', '前').replace('hours', '小时').replace('days', '天');
    let content = '(' + topic.reply_count + '/' + topic.visit_count + ')';
    let desc = '最近回复于' + lastreply;
    let avatar = topic.author.avatar_url.replace(/^\/\//g, 'http://');
    return (
      <div>
        <List>

          <ListItem leftAvatar={< Avatar src = {
            avatar
          } />} primaryText={topic.title + " " + content} secondaryText={desc}
           rightIcon={
            <Badge badgeContent = { topcontent } style={{top:0}} badgeStyle={{width:28,height:28,top: -5, right: 0}}
           secondary = {true} >
           <CommunicationChatBubble/>
           </Badge>
         }
          onTouchTap={this.openDetail.bind(this, topic.id)}/>
          <Divider inset={true}/>
        </List>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {accesstoken: state.login.user.accesstoken};
}

export default connect(mapStateToProps)(TopicItem);
