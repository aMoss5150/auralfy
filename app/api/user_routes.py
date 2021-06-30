from flask import Blueprint
from flask_login import login_required
from app.models import User

user_routes = Blueprint("users", __name__)

# this is more of an example of how to build a CRUD feature with
# a blueprint... more of a demo sort of feature!


@user_routes.route("/")
@login_required
def users():
    users = User.query.all()
    # dont forget to convert this to dict to make sure we
    # we can jsonify it automatically
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/<int:id>")
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
