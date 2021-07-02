from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from .db import db


Base = declarative_base()

vibe_members = Table(
    "vibe_members",
    Base.metadata,
    vibes_id=Column(db.Integer, ForeignKey("vibes.id"), primary_key=True),
    songs_id=Column(db.Integer, ForeignKey("songs.id"), primary_key=True),
)
