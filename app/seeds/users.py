from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username="Demo", email="demo@aa.io", password="password")

    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    # It is now restarting identity and cascading as well
    # dependent rows will also be deleted with cascade
    # restart identity is going to reset auto increment back to 1
    # else you will have user 1 with number 600
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
