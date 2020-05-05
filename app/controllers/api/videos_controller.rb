class Api::VideosController < ApplicationController
    def index
        @videos = Video.with_attached_thumbnail.all
    end

    def show
        @video = Video.with_attached_video.find(params[:id])
    end

    def create
        @video = Video.new(video_params)
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 401
        end
    end

    def update
        @video = Video.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 401
        end
    end

    def destroy
        video = Video.find(params[:id])
        video_owner = video.uploader
        if current_user === video_owner
            video.destroy;
            render :index
        else
            render json: ['Only the uploader can delete a video.'], status: 401
        end
    end

    def search
        query = params[:query]
        @videos = Video.with_attached_thumbnail
            .with_attached_video
            .joins(:uploader)
            .where("title ILIKE ? OR username ILIKE ?", "%#{query}%", "%#{query}%")
        render :index
    end

    private

    def video_params
        params.require(:video).permit(:uploader_id, :title, :description, :video, :thumbnail)
    end
end
