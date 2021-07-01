from flask import Blueprint
from app.models import Vibe

vibe_routes = Blueprint("vibes", __name__)

# this is more of an example of how to build a CRUD feature with
# a blueprint... more of a demo sort of feature!


@vibe_routes.route("/")
def get_all_vibes():
    vibes = Vibe.query.all()
    # dont forget to convert this to dict to make sure we
    # we can jsonify it automatically
    return {"vibes": [vibe.to_dict() for vibe in vibes]}
