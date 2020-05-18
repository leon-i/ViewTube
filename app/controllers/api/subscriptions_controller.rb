class Api::SubscriptionsController < ApplicationController
    def create
        @subscription = Subscription.create(subscription_params)
        render :show
    end

    def destroy
        @subscription = Subscription.find(params[:id])
        @subscription.destroy
        render :show
    end

    private

    def subscription_params
        params.require(:subscription).permit(:subscriber_id, :channel_id)
    end
end
