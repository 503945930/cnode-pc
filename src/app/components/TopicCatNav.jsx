import React from 'react';
import { connect } from 'react-redux';
import RadioButton from 'material-ui/RadioButton';
import * as topicaction from '../actions/topicaction';

class TopicCatNav extends React.Component {
    constructor(props) {
        super(props);
    }
    getStyle() {
        return {
            radioButton: {
                marginBottom: 16,
                float: 'left',
                width: 100,
            },
        }
    }
    getTopic(type) {
        const gettopiclist = topicaction.getTopicList({tab:type,page:1});
        this.props.dispatch(gettopiclist);
    }
    render() {
        const styles = this.getStyle();
        return(
            <div style={{position:'fixed',top: 84,left:10}}>
                <div>
                    <RadioButton
                        value="all"
                        label="全部"
                        style={styles.radioButton}
                        onTouchTap = {this.getTopic.bind(this,'all')}
                    />
                    <RadioButton
                        value="good"
                        label="精华"
                        style={styles.radioButton}
                        onTouchTap = {this.getTopic.bind(this,'good')}
                    />
                    <RadioButton
                        value="share"
                        label="分享"
                        style={styles.radioButton}
                        onTouchTap = {this.getTopic.bind(this,'share')}
                    />
                    <RadioButton
                        value="ask"
                        label="问答"
                        style={styles.radioButton}
                        onTouchTap = {this.getTopic.bind(this,'ask')}
                    />
                    <RadioButton
                        value="job"
                        label="招聘"
                        style={styles.radioButton}
                        onTouchTap = {this.getTopic.bind(this,'job')}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(TopicCatNav);
