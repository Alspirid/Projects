class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    @errors = []
    if @bench.save
      render :show
    else
      @errors += @bench.errors.full_messages
      render json: {errors: @errors}, status: 401
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
