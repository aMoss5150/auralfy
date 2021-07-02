from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from .db import db

Base = declarative_base()


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

    vibes = db.relationship(
        "Vibe",
        secondary="vibe_members",
        back_populates="songs",
    )

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
