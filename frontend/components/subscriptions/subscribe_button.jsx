import React from 'react';
import { connect } from 'react-redux';
import { createSubscription, deleteSubscription } from '../../actions/subscription_actions';
import { openModal } from '../../actions/modal_actions';

const SubscribeButton = ({ currentUser, subscriptions, channelId, createSubscription, deleteSubscription, openModal }) => {
    let buttonText;
    let buttonAction;
    let subscription;
    if (!currentUser) {
        buttonText = 'SUBSCRIBE';
        buttonAction = () => openModal('signInMenu');
    } else if (subscriptions[channelId]) {
        buttonText = 'UNSUBSCRIBE';
        subscription = subscriptions[channelId];
        buttonAction = () => deleteSubscription(subscription);
    } else {
        buttonText = 'SUBSCRIBE';
        subscription = { subscriber_id: currentUser.id, channel_id: channelId };
        buttonAction = () => createSubscription(subscription);
    };

    return (
        <button className='subscribe-btn' onClick={buttonAction}>{buttonText}</button>
    );
}

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    const currentUser = users[session.currentUserId];
    const subscriptions = currentUser ? currentUser.subscriptions : null;
    
    return {
        channelId: ownProps.channelId,
        currentUser,
        subscriptions
    }
};

const mapDispatchToProps = dispatch => ({
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: subscription => dispatch(deleteSubscription(subscription)),
    openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeButton);