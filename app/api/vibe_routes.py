from flask import Blueprint, request
from app.models import Vibe
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
    new_vibe = Vibe(name=vibe_name)
    db.session.add(new_vibe)
    db.session.commit()
    return {"vibe": new_vibe.to_dict()}


@vibe_routes.route("/", methods=["DELETE"])
def delete_vibe():
    id = request.json
    vibe = Vibe.query.filter(Vibe.id == id and Vibe.user_id == current_user.id).first()
    db.session.delete(vibe)
    db.session.commit()
    return {"id": id}
