class FavoritesController < ApplicationController
  def index
    if params[:count_only]
      @count = current_user&.favorites&.count
      render(partial: "favorites/count")
    end
  end

  def create
    @favorite = Favorite.create(user: current_user, concert_id: params[:concert_id])
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
  end

  private def favorite_params
    params.require(:concert_id)
  end
end
