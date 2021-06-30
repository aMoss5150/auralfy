from app.models import db, Song


# Adds a demo user, you can add other users here if you want
def seed_songs():
    a = Song(
        name="Stairway To Heaven Remaster",
        artist="Led Zeppelin",
        album_name="IV",
        artist_spotify_id="36QJpDe2go2KgaRleHCDTp",
        song_spotify_id="5CQ30WqJwcep0pYcV4AMNc?si=16d2683b6819452c",
        danceability=0.338,
        energy=0.340,
        key=9,
        mode=0,
        valence=0.197,
        tempo=82.433,
    )
    b = Song(
        name="Immigrant Song Remaster",
        artist="Led Zeppelin",
        album_name="III",
        artist_spotify_id="36QJpDe2go2KgaRleHCDTp",
        song_spotify_id="78lgmZwycJ3nzsdgmPPGNx?si=72b4e5864abb4f18",
        danceability=0.564,
        energy=0.932,
        key=11,
        mode=1,
        valence=0.619,
        tempo=112.937,
    )

    c = Song(
        name="G.O.M.D.",
        artist="J. Cole",
        album_name="2014 Forest Hills Drive",
        artist_spotify_id="6l3HvQ5sa6mXTsMTB19rO5",
        song_spotify_id="16qYlQ6koFxYVbiJbGHblz?si=1d8a2dbba1a04ee9",
        danceability=0.890,
        energy=0.932,
        key=4,
        mode=0,
        valence=0.304,
        tempo=128.084,
    )
    d = Song(
        name="A Tale of 2 Citiez",
        artist="J. Cole",
        album_name="2014 Forest Hills Drive",
        vibe_id="",
        artist_spotify_id="6l3HvQ5sa6mXTsMTB19rO5",
        song_spotify_id="7lL3MvFWFFSD25pBz72Agj?si=7bb51af6779b4d29",
        danceability=0.559,
        energy=0.556,
        key=6,
        mode=1,
        valence=0.362,
        tempo=189.861,
    )
    e = Song(
        name="ELEMENT.",
        artist="Kendrick Lamar",
        album_name="DAMN",
        vibe_id="",
        artist_spotify_id="2YZyLoL8N0Wb9xBt1NhZWg",
        song_spotify_id="1EaKU4dMbesXXd3BrLCtYG?si=809c68a2e0834dd7",
        danceability=0.748,
        energy=0.705,
        key=4,
        mode=0,
        valence=0.483,
        tempo=189.891,
    )
    f = Song(
        name="good kid, m.A.A.d. city",
        artist="Kendrick Lamar",
        album_name="m.A.A.d. city",
        vibe_id="",
        artist_spotify_id="2YZyLoL8N0Wb9xBt1NhZWg",
        song_spotify_id="2cDCojn6uIBM6A5xTAbl3H?si=7bc53705be214534",
        danceability=0.487,
        energy=0.729,
        key=2,
        mode=1,
        valence=0.217,
        tempo=91.048,
    )
    g = Song(
        name="untitled 07|2014 - 2016",
        artist="Kendrick Lamar",
        album_name="untitled unmastered",
        vibe_id="",
        artist_spotify_id="2YZyLoL8N0Wb9xBt1NhZWg",
        song_spotify_id="40IQooNkPRVtn4zlE3ZFpA?si=d6ecdbb955b748de",
        danceability=0.567,
        energy=0.463,
        key=6,
        mode=0,
        valence=0.324,
        tempo=126.982,
    )
    h = Song(
        name="Rich Kids",
        artist="Polyphia",
        album_name="New Levels New Devils",
        vibe_id="",
        artist_spotify_id="4vGrte8FDu062Ntj0RsPiZ",
        song_spotify_id="4QDvf8oOrSAz1bt1tDiwAR?si=9a72356051184505",
        danceability=0.511,
        energy=0.767,
        key=6,
        mode=0,
        valence=0.398,
        tempo=174.982,
    )
    i = Song(
        name="G.O.A.T.",
        artist="Polyphia",
        album_name="New Levels New Devils",
        vibe_id="",
        artist_spotify_id="4vGrte8FDu062Ntj0RsPiZ",
        song_spotify_id="0YPuRrM2NwzdtuShUKkts6?si=fe89b30a37384c95",
        danceability=0.660,
        energy=0.760,
        key=11,
        mode=0,
        valence=0.359,
        tempo=107.028,
    )
    j = Song(
        name="He Won't Go",
        artist="Adele",
        album_name="21",
        vibe_id="",
        artist_spotify_id="4dpARuHxo51G3z768sgnrY",
        song_spotify_id="3uVsdnIglL7aTjm8X08J0M?si=12a2cdb1fdc54e6a",
        danceability=0.706,
        energy=0.570,
        key=0,
        mode=0,
        valence=0.728,
        tempo=159.908,
    )
    k = Song(
        name="Right As Rain",
        artist="Adele",
        album_name="19",
        vibe_id="",
        artist_spotify_id="4dpARuHxo51G3z768sgnrY",
        song_spotify_id="6oW04c2E7lebl09WHsBAWO?si=5c76d6271518496a",
        danceability=0.842,
        energy=0.679,
        key=1,
        mode=1,
        valence=0.918,
        tempo=137.200,
    )
    l = Song(
        name="Teardrops",
        artist="Joss Stone",
        album_name="The Soul Sessions, Vol. 2",
        vibe_id="",
        artist_spotify_id="7bvcQXJHkFiN1ppIN3q4fi",
        song_spotify_id="2qX751oMEJNL0UmwoFBcVb?si=c77f93f0aca340b0",
        danceability=0.651,
        energy=0.587,
        key=8,
        mode=0,
        valence=0.687,
        tempo=135.953,
    )
    m = Song(
        name="I Got The...",
        artist="Joss Stone",
        album_name="The Soul Sessions, Vol. 2",
        vibe_id="",
        artist_spotify_id="7bvcQXJHkFiN1ppIN3q4fi",
        song_spotify_id="2tToHpzNxe4GpYKWywaJyz?si=86b3988397e740c0",
        danceability=0.576,
        energy=0.639,
        key=5,
        mode=1,
        valence=0.640,
        tempo=85.648,
    )
    n = Song(
        name="Spolied",
        artist="Joss Stone",
        album_name="Mind Body & Soul",
        vibe_id="",
        artist_spotify_id="7bvcQXJHkFiN1ppIN3q4fi",
        song_spotify_id="08ydcS9NTm1a2csSppGsJT?si=7c948dc038464d90",
        danceability=0.569,
        energy=0.567,
        key=2,
        mode=1,
        valence=0.292,
        tempo=110.120,
    )
    o = Song(
        name="Security",
        artist="Joss Stone",
        album_name="Mind Body & Soul",
        vibe_id="",
        artist_spotify_id="7bvcQXJHkFiN1ppIN3q4fi",
        song_spotify_id="76lM91HmwrbURhCWVhzGvf?si=cefa60facec849b1",
        danceability=0.577,
        energy=0.771,
        key=8,
        mode=0,
        valence=0.550,
        tempo=135.955,
    )
    p = Song(
        name="No Tellin",
        artist="Drake",
        album_name="If You're Reading This It's Too Late",
        vibe_id="",
        artist_spotify_id="3TVXtAsR1Inumwj472S9r4",
        song_spotify_id="2durxb17bXcmQJHSt8JAdO?si=17c5b9fa8cf84e10",
        danceability=0.823,
        energy=0.467,
        key=0,
        mode=0,
        valence=0.618,
        tempo=95.026,
    )
    q = Song(
        name="Used To",
        artist="Drake",
        album_name="If You're Reading This It's Too Late",
        vibe_id="",
        artist_spotify_id="3TVXtAsR1Inumwj472S9r4",
        song_spotify_id="63p3Slj0shAFP0Q7dQetj5?si=2b65790bb4e74fb3",
        danceability=0.926,
        energy=0.427,
        key=10,
        mode=0,
        valence=0.304,
        tempo=96.025,
    )
    r = Song(
        name="Intake",
        artist="Volumes",
        album_name="Via",
        vibe_id="",
        artist_spotify_id="1DgmdsnwOexqTH8ohPCFAU",
        song_spotify_id="5Cw30VW6hKXdVaSyFjbxzt?si=fc5689bbdccd4409",
        danceability=0.546,
        energy=0.941,
        key=1,
        mode=0,
        valence=0.424,
        tempo=120.008,
    )
    s = Song(
        name="Paid In Full",
        artist="Volumes",
        album_name="Via",
        vibe_id="",
        artist_spotify_id="1DgmdsnwOexqTH8ohPCFAU",
        song_spotify_id="3GzRbYVu6D5BTFB4FrjWat?si=3587f167ef194319",
        danceability=0.327,
        energy=0.981,
        key=10,
        mode=0,
        valence=0.0818,
        tempo=109.850,
    )
    t = Song(
        name="I'm Charming",
        artist="The Black Dahlia Murder",
        album_name="Miasma",
        vibe_id="",
        artist_spotify_id="4xTDPgk4jHCF0qui3dH6BS",
        song_spotify_id="0Fqyclz7oQP6cs3plyBetL?si=c3ab413b01bb4867",
        danceability=0.462,
        energy=0.995,
        key=1,
        mode=0,
        valence=0.0392,
        tempo=95.314,
    )
    u = Song(
        name="Deathmask Divine",
        artist="The Black Dahlia Murder",
        album_name="Nocturnal",
        vibe_id="",
        artist_spotify_id="4xTDPgk4jHCF0qui3dH6BS",
        song_spotify_id="3oCTRjyXmT1MMn4nVQMKBm?si=164bdcac78d94029",
        danceability=0.471,
        energy=0.993,
        key=1,
        mode=1,
        valence=0.0672,
        tempo=113.996,
    )
    v = Song(
        name="Codex",
        artist="Veil Of Maya",
        album_name="[id]",
        vibe_id="",
        artist_spotify_id="2i7CQcVBh2K6uOR3CH09M1",
        song_spotify_id="5QKuewRvIREh6ceUuYUoDi?si=f57aa1c31f3a4131",
        danceability=0.450,
        energy=0.922,
        key=7,
        mode=1,
        valence=0.278,
        tempo=94.973,
    )
    w = Song(
        name="Namaste",
        artist="Veil Of Maya",
        album_name="[id]",
        vibe_id="",
        artist_spotify_id="2i7CQcVBh2K6uOR3CH09M1",
        song_spotify_id="3V3hIOQmenaqmBMGBfhRTx?si=14afd411b4b34693",
        danceability=0.355,
        energy=0.906,
        key=6,
        mode=0,
        valence=0.315,
        tempo=78.624,
    )
    x = Song(
        name="Unbreakable",
        artist="Veil Of Maya",
        album_name="[id]",
        vibe_id="",
        artist_spotify_id="2i7CQcVBh2K6uOR3CH09M1",
        song_spotify_id="6WnkfT1WrkNN41r8eU6cwa?si=4abb910577ed44d9",
        danceability=0.350,
        energy=0.935,
        key=7,
        mode=1,
        valence=0.280,
        tempo=180.512,
    )
    db.session.add(
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x
    )
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_songs():
    # It is now restarting identity and cascading as well
    # dependent rows will also be deleted with cascade
    # restart identity is going to reset auto increment back to 1
    # else you will have user 1 with number 600
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
