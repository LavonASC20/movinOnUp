from fastapi import HTTPException, APIRouter, Depends
from sqlmodel import Session, select
from typing import List
from core.database import get_session
from models import Tutor, TutorCreate, TutorTier, TutorUpdate

router = APIRouter()

# template for crud operations:
# use endpoint to gather information like IDs, singular vs full data retrieval, batch insert/update etc 

# @router.<CRUD>(<endpoint / path>, <response_model>)
# def <fn_name> (<args>) :
#   some db query logic
#   return data

# sections are partitioned by category of interaction:
# CRUD: Create, Read, Update, Delete

#___________________GET (read)__________________________________________________#
@router.get('/tutors', response_model=List[Tutor])
def read_tutors(session: Session = Depends(get_session)):
    data = session.exec(select(Tutor)).all()
    return data

@router.get('/tutors/{id}', response_model=Tutor)
def read_tutor(id: int, session: Session = Depends(get_session)):
    data = session.get(Tutor, id)
    if not data:
        raise HTTPException(status_code=404, detail=f'Tutor ID  {id}  Not Found!')
    return data

# include user query subset data (search for tutors with specialty of chemistry, etc)

#___________________GET (read)__________________________________________________#



#___________________POST (create)__________________________________________________#
@router.post('/tutors', response_model=None)
def create_tutor(tutor: TutorCreate, session: Session = Depends(get_session)):
    query = select(Tutor).where(Tutor.email == tutor.email)
    data = session.exec(query).all()
    if data:
        raise HTTPException(status_code=409, detail=f'Conflict! Email already exists')
    db_tutor = Tutor.model_validate(tutor)
    session.add(db_tutor)
    session.commit()
    session.refresh(db_tutor)
    return db_tutor
#___________________POST (create)__________________________________________________#



#___________________PATCH (update in-place)__________________________________________________#
@router.patch('/tutors/{id}', response_model=None)
def update_tutor(id: int, tutor_update: TutorUpdate, session: Session = Depends(get_session)):
    db_tutor = session.get(Tutor, id)
    if not db_tutor:
        raise HTTPException(status_code=404, detail=f'Tutor ID  {id}  Not Found!')
    update_dict = tutor_update.model_dump(exclude_unset=True)
    db_tutor.sqlmodel_update(update_dict)
    session.add(db_tutor)
    session.commit()
    session.refresh(db_tutor)
    return db_tutor
#___________________PATCH (update in-place)__________________________________________________#



#___________________DELETE (delete)__________________________________________________#
@router.delete('/tutors/{id}', response_model=None)
def delete_tutor(id: int, session: Session = Depends(get_session)):
    tutor = session.get(Tutor, id)
    if not tutor:
        raise HTTPException(status_code=404, detail=f'Tutor ID: {id} Not Found!')
    session.delete(tutor)
    session.commit()
#___________________DELETE (delete)__________________________________________________#