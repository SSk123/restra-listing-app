class WebappController < ApplicationController

  layout :choose_layout

  def choose_layout
    'consumer_webapp'
  end

  def init
    render text: "", layout: true
  end
end