from flask import Blueprint
from app.models import Song

song_routes = Blueprint("songs", __name__)

# this is more of an example of how to build a CRUD feature with
# a blueprint... more of a demo sort of feature!


@song_routes.route("/")
def get_all_songs():
    songs = Song.query.all()
    # dont forget to convert this to dict to make sure we
    # we can jsonify it automatically
    return {"songs": [song.to_dict() for song in songs]}
