----------------------------------Schema----------------------------------------

```py
class User(db.Model, UserMixin): 
    __tablename__ = "users"

    id: db.Column(db.Integer, primary_key=True)
    email: db.Column(db.String(255), nullable=False, unique=True)
    username: db.Column(db.String(255), nullable=False, unique=True)
    hashed_password: db.Column(db.String(50))

    vibes = db.relationship("Vibe", back_populates="users")
     # ^        #remember    ^^^^ |references other|^^^^ references 
     # ^        #                 |   MODEL NAME   |     itself
     # ^
     # the var name references the other models TABLENAME either SINGLE OR PLURALS 
     # depending on the use case
```

---Vibes will essentially be a LIST of songs that LIVE INSIDE that vibe
    created off a MOOD or VIBE that the user defines

```py
class Vibe(db.Model):
    __tablename__ = "vibes"

    id: db.Column(db.Integer, primary_key=True)
    name: db.Column(db.String(25), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
     # ^                                #remember  ^^^^^^^^ references TABLENAME and column   
    user = db.relationship("User", back_populates="vibes")
    songs = db.relationship("Song", back_populates="vibes")
```


---Songs will hold the various references
```py
class Song(db.Model):
    __tablename__ = "songs"

    id: db.Column(db.Integer, primary_key=True)
    name: db.Column(db.String(255), nullable=False)
    artist: db.Column(db.String(255), nullable=False)
    album_name: db.Column(db.String(255))
    vibe_id: db.Column(db.Integer, db.ForeignKey("vibes.id"))
    # ids stored as STRING in SPOTIFY DOCS
    artist_spotify_id: db.Column(db.String(255) , nullable=False,unique=True) 
    song_spotify_id: db.Column(db.String(255), nullable=False, unique=True) 
    # ids stored as STRING in SPOTIFY DOCS
    valence: db.Column(db.Numeric(asdecimal=False), nullable=False)
    key: db.Column(db.Integer, nullable=False)
    # could I tie this to some kind of color?
    mode: db.Column(db.Integer, nullable=False)
    # ^  ^ MAJOR is 1(TRUE) MINOR is 0(FALSE)
    # ^ further use to modify to enhance uniqueness?
    #---------------------------------------------
    # AUX >>> next 4?
    energy: db.Column(db.Numeric(asdecimal=False), nullable=False)
    tempo: db.Column(db.Numeric(asdecimal=False), nullable=False)
    danceability: db.Column(db.Numeric(asdecimal=False), nullable=False)
    # ENDAUX--------------------------------------

    vibe = db.relationship("Vibe", back_populates="songs")
```