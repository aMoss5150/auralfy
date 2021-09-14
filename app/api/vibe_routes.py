from flask import Blueprint, request
from flask_login import current_user
from app.models import Vibe, VibeMember
from app.models import db

vibe_routes = Blueprint("vibes", __name__)

# this is more of an example of how to build a CRUD feature with
# a blueprint... more of a demo sort of feature!


@vibe_routes.route("/")
def get_all_vibes():
    vibes = Vibe.query.all()
    # dont forget to convert this to dict to make sure we
    # we can jsonify it automatically
    return {"vibes": [vibe.to_dict() for vibe in vibes]}


@vibe_routes.route("/", methods=["POST"])
def create_vibe():
    vibe_name = request.json
    new_vibe = Vibe(name=vibe_name, user_id=current_user.id)
    db.session.add(new_vibe)
    db.session.commit()
    return {"vibe": new_vibe.to_dict()}


@vibe_routes.route("/", methods=["DELETE"])
def delete_vibe():
    id = request.json
    vibe = Vibe.query.filter(Vibe.id == id and Vibe.user_id == current_user.id).first()
    db.session.delete(vibe)
    db.session.commit()
    return {"success": "success"}


@vibe_routes.route("/", methods=["PATCH"])
def add_song_to_vibe():
    songId = request.json["songId"]
    vibeId = request.json["vibeId"]
    vibe = VibeMember(vibe_id=vibeId, song_id=songId)
    db.session.add(vibe)
    db.session.commit()
    return {"success": "success"}
