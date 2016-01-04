import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import { soundcloudItemClass } from '../../classes';
import { Image } from '../ui';
import { soundActions } from '../../actions';

class SoundCloudItem extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    history: PropTypes.object
  }

  static propTypes = {
    soundActions: PropTypes.object,
    sound: PropTypes.shape(soundcloudItemClass)
  }

  handleClick = () => {
    this.props.soundActions.addSound('soundcloud', this.props.sound.scId);
    this.context.history.push('/');
  }

  render() {
    return (
      <div className="soundcloud-item" onClick={this.handleClick}>
        <div className="thumbnail">
          <div className="user-avatar">
            <Image img={this.props.sound.userAvatar}/>
          </div>
          <Image img={this.props.sound.img}/>
          <span className="duration">
            {this.props.sound.duration}
          </span>
        </div>
        <span className="title">
          {this.props.sound.name}
          <span className="view-count">
            <FormattedNumber value={this.props.sound.viewCount}/> <FormattedMessage id="soundcloud.plays"/>
          </span>
        </span>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  soundActions: bindActionCreators(soundActions, dispatch)
});

export default injectIntl(connect(() => ({}), mapDispatchToProps)(SoundCloudItem));
