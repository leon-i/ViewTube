class Api::ViewsController < ApplicationController
    def create
        @view = View.create(view_params)
    end

    private

    def view_params
        params.require(:view).permit(:viewer_id, :video_id)
    end
end
