subscriptions.each do |subscription|
    json.set! subscription.channel_id do
        json.partial! '/api/subscriptions/subscription', subscription: subscription
    end
end