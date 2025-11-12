from fastapi import APIRouter

from api.routes import admin, parent, student, tutor

api_router = APIRouter()

api_router.include_router(tutor.router)
# api_router.include_router(student.router)
# api_router.include_router(parent.router)
# api_router.include_router(admin.router)
