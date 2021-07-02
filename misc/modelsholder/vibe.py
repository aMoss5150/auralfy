from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from .db import db
from . import vibe_members

Base = declarative_base()


class Vibe(db.Model, Base):
    __tablename__ = "vibes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(99), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    users = db.relationship("User", back_populates="vibes")
    songs = db.relationship(
        "Song",
        secondary="vibe_members",
        lazy="subquery",
        back_populates="vibes",
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
        }
