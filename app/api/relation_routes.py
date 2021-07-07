from flask import Blueprint
from app.models import db, Song, Vibe, VibeMember

relation_routes = Blueprint("relations", __name__)

# this is more of an example of how to build a CRUD feature with
# a blueprint... more of a demo sort of feature!


@relation_routes.route("/")
def get_all_relations():

    # gives me all songs with a relation
    members = VibeMember.query.all()
    members_list = [member.to_dict() for member in members]
    songs = db.session.query(Song).join(VibeMember).all()
    songs = [song.to_dict() for song in songs]
    # dont forget to convert this to dict to make sure we
    # we can jsonify it automatically
    # loop through and normalize data to return
    # object with array with objects within
    return {"songs": songs, "relations": members_list}


@relation_routes.route("/", methods=["POST"])
def delete_a_relation():
    vibeId = request.json["vibeId"]
    songId = request.json["songId"]
    # gives me all songs with a relation
    member = VibeMember.query.filter(
        VibeMember.vibe_id == vibeId and VibeMember.song_id == songId
    ).first()
    db.session.delete(member)
    return "success"


# example logic
# songs = (
#         db.session.query(Song)
#         .join(VibeMember)
#         .filter(VibeMember.vibe_id == vibe_id)
#         .all()
#     )
