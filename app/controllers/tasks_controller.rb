class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    skip_before_action :authorize, only: [:index, :create]

    def index
        tasks = Task.all
        render json: tasks
    end

    def show
        task = Task.find(params[:id])
        render json: task
    end

    def create
        task = Task.create!(task_params)
        render json: task, status: :created

    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def received
        user = User.find(session[:user_id])
        tasks = Task.where(receiver_id: user.id)
        render json: tasks
    end

    def sent
        user = User.find(session[:user_id])
        tasks = Task.where(commander_id: user.id)
        render json: tasks
    end

    def accept
        task = Task.find(params[:id])
        task.update!(accepted: true)
        render json: task
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def notAccept
        task = Task.find(params[:id])
        task.update!(accepted: false)
        render json: task
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def review
        task = Task.find(params[:id])
        task.update!(reviewed: true)
        render json: task
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def render_not_found
        render json: {error: "Not Found"}, status:404
    end

    def task_params
        params.permit(:due_date, :title, :accepted, :reviewed, :commander_id, :receiver_id)
    end
    
end