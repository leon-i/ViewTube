export const createSubscription = subscription => (
    $.ajax({
        method: 'POST',
        url: 'api/subscriptions',
        data: { subscription }
    })
);

export const deleteSubscription = subscription => (
    $.ajax({
        method: 'DELETE',
        url: `api/subscriptions/${subscription.id}`,
    })
);