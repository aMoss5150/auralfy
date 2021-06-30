from .db import db


class Song(db.Model):
    __tablename__ = "songs"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    album_name = db.Column(db.String(255))
    vibe_id = db.Column(db.Integer, db.ForeignKey("vibes.id"))
    artist_spotify_id = db.Column(db.String(255), nullable=False)
    song_spotify_id = db.Column(db.String(255), nullable=False, unique=True)
    danceability = db.Column(db.Numeric(asdecimal=False), nullable=False)
    energy = db.Column(db.Numeric(asdecimal=False), nullable=False)
    key = db.Column(db.Integer, nullable=False)
    mode = db.Column(db.Integer, nullable=False)
    valence = db.Column(db.Numeric(asdecimal=False), nullable=False)
    tempo = db.Column(db.Numeric(asdecimal=False), nullable=False)

    vibes = db.relationship("Vibe", back_populates="songs")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "artist": self.artist,
            "album_name": self.album_name,
            "vibe_id": self.vibe_id,
            "artist_spotify_id": self.artist_spotify_id,
            "song_spotify_id": self.song_spotify_id,
            "danceability": self.danceability,
            "energy": self.energy,
            "key": self.key,
            "mode": self.mode,
            "valence": self.valence,
            "tempo": self.tempo,
        }
