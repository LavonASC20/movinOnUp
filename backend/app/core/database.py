"""Initialize the database connection and create tables."""

from fastapi import FastAPI
from sqlmodel import SQLModel, create_engine, Session, select
from sqlalchemy_utils import database_exists, create_database
from contextlib import asynccontextmanager
import os
from models import Admin, Tutor, TutorTier, Student, StudentTier, Parent
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL, echo=False)
if not database_exists(engine.url):
    create_database(engine.url)

def init_db() -> None:
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        if not session.exec(select(TutorTier)).first():
            session.add(TutorTier(id=1, name='Standard', pay_rate=30.0))
            session.add(TutorTier(id=2, name='Pro', pay_rate=30.0))
            session.add(TutorTier(id=3, name='Premier', pay_rate=30.0))
            session.commit()  
        if not session.exec(select(StudentTier)).first():
            session.add(StudentTier(id=1, name='Foundation'))
            session.add(StudentTier(id=2, name='Pro'))
            session.add(StudentTier(id=3, name='Out of This World'))
            session.commit()
        yield session

def insert_test_data(session):
    if not session.exec(select(Admin)).first():
        session.add(Admin(id=1, first_name='John', last_name='Doe', 
                        email='john_doe@gmail.com', password='johnAdminpass', phone_number='123-456-7890',
                        status='active'))
        session.commit()
    if not session.exec(select(Tutor)).first():
        session.add(Tutor(id=1, first_name='Jane', last_name='Smith',
                        email='jane_smith@gmail.com', password='janeTutorpass', phone_number='987-654-3210',
                        status='active', tutor_tier_id=None,
                        tier = TutorTier(id=1, name='Standard', pay_rate=30.0)))
        session.commit()
    if not session.exec(select(Student)).first():
        session.add(Student(id=1, first_name='Jane', last_name='Smith',
                        email='jane_smith@gmail.com', password='janeStudentpass', status='active', 
                        tutor_tier_id=None, tier = StudentTier(id=1, name='Foundation')))
        session.commit()
    if not session.exec(select(Parent)).first():
        session.add(Parent(id=1, first_name='Henry', last_name='Smith', email='henrysmith@gmail.com',
                            phone_number='6460001111', status='active', 
                            children=[
                                Student(id=1, first_name='Jane', last_name='Smith',
                                email='jane_smith@gmail.com', password='janeStudentpass', 
                                status='active', tutor_tier_id=None, 
                                tier = StudentTier(id=2, name='Pro')),
                            ]))
        session.commit()