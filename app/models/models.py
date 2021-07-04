from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy import MetaData, create_engine

Base = declarative_base()


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    vibes = db.relationship("Vibe", back_populates="users")

    @property
    def password(self):
        return self.hashed_password

    # convenience function that will generate a password has,
    # if we try to check the password, we can un hash...
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # you have to write your own TO DICT methods to convert to JSON easily
    def to_dict(self):
        return {"id": self.id, "username": self.username, "email": self.email}


class Song(db.Model, Base):
    __tablename__ = "songs"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    album_name = db.Column(db.String(255))
    artist_spotify_id = db.Column(db.String(255), nullable=False)
    song_spotify_id = db.Column(db.String(255), nullable=False, unique=True)
    danceability = db.Column(db.Numeric(asdecimal=False), nullable=False)
    energy = db.Column(db.Numeric(asdecimal=False), nullable=False)
    key = db.Column(db.Integer, nullable=False)
    mode = db.Column(db.Integer, nullable=False)
    valence = db.Column(db.Numeric(asdecimal=False), nullable=False)
    tempo = db.Column(db.Numeric(asdecimal=False), nullable=False)

    vibes = db.relationship("VibeMember", back_populates="song")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "artist": self.artist,
            "album_name": self.album_name,
            "artist_spotify_id": self.artist_spotify_id,
            "song_spotify_id": self.song_spotify_id,
            "danceability": self.danceability,
            "energy": self.energy,
            "key": self.key,
            "mode": self.mode,
            "valence": self.valence,
            "tempo": self.tempo,
        }

    def __repr__(self):
        return f"{self.name}: {self.artist}"


class Vibe(db.Model, Base):
    __tablename__ = "vibes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(99), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    users = db.relationship("User", back_populates="vibes")
    songs = db.relationship("VibeMember", back_populates="vibe")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
        }


class VibeMember(db.Model):
    __tablename__: "vibe_members"
    vibe_id = db.Column(db.Integer, ForeignKey("vibes.id"), primary_key=True)
    song_id = db.Column(db.Integer, ForeignKey("songs.id"), primary_key=True)
    song = db.relationship("Song", back_populates="vibes")
    vibe = db.relationship("Vibe", back_populates="songs")

    def to_dict(self):
        return {"members": [self.vibe_id, self.song_id]}
