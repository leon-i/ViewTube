json.extract! user, :id, :username, :email, :first_name, :last_name
json.subscriberCount user.format_subscriber_count
json.subscriptions({})
json.subscriptions do
    user.subscriptions.each do |subscription|
        json.set! subscription.channel_id do
            json.extract! subscription, :id, :subscriber_id, :channel_id
        end
    end
end