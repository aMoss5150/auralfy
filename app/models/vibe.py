from .db import db


class Vibe(db.Model):
    __tablename__ = "vibes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(99), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    users = db.relationship("User", back_populates="vibes")
    songs = db.relationship("Song", back_populates="vibes")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
        }
