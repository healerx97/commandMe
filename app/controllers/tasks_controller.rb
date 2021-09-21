class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    skip_before_action :authorize, only: [:index]

    def index
        tasks = Task.all
        
        render json: tasks
    end

    def show
        task = Task.find(params[:id])
        render json: task
    end

    def create
        task = Task.create(task_params)
        render json: task, status: :created
    end


    private

    def render_not_found
        render json: {error: "Not Found"}, status:404
    end

    def raffle_params
        params.permit(:host_id, :remaining_funding, :purpose)
    end
    
end