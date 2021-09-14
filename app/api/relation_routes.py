from flask import Blueprint, request, jsonify
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


@relation_routes.route("/", methods=["DELETE"])
def delete_a_relation():
    vibeId = request.json["vibeId"]
    songId = request.json["songId"]
    # gives me all songs with a relation
    member = VibeMember.query.filter(
        VibeMember.vibe_id == vibeId, VibeMember.song_id == songId
    ).first()
    length = VibeMember.query.filter(VibeMember.vibe_id == vibeId).count()
    if length == 1:
        vibe = Vibe.query.filter(Vibe.id == vibeId).first()
        db.session.delete(member)
        db.session.delete(vibe)
        db.session.commit()
        return {"success": "success"}

    db.session.delete(member)
    db.session.commit()
    return {"success": "success"}


@relation_routes.route("/", methods=["POST"])
def create_a_relation():
    songId = request.json["songId"]
    vibeId = request.json["vibeId"]
    # gives me all songs with a relation

    length = VibeMember.query.filter(
        VibeMember.vibe_id == vibeId, VibeMember.song_id == songId
    ).count()
    # if length == 1:
    #     return jsonify("already in vibe")
    if length != 1:
        new_member = VibeMember(song_id=songId, vibe_id=vibeId)
        db.session.add(new_member)
        db.session.commit()
    return {"success": "success"}


# example logic
# songs = (
#         db.session.query(Song)
#         .join(VibeMember)
#         .filter(VibeMember.vibe_id == vibe_id)
#         .all()
#     )
