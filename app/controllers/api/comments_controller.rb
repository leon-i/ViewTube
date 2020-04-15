class Api::CommentsController < ApplicationController
    def index
        video = Video.find(params[:video_id])
        @comments = video.comments
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if !@comment.update
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :commentable_type, :commentable_id, :body)
    end
end
