from contextlib import asynccontextmanager
from fastapi import FastAPI
from core.database import init_db
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from api.main import api_router

@asynccontextmanager 
async def lifespan(app: FastAPI):
    init_db()
    yield

# can also add a title via FastAPI(title="insert title here"), similarly for root_path
app = FastAPI(lifespan=lifespan) 

# middleware security allows requests only to the origins in allow_origins (change as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:8000",  # postgres backend hosted here
        "http://localhost:5173",  # Vite default
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# add routes from app/routes/main.py
# explore more into the prefix settings
app.include_router(api_router)

# default endpoint response (view on backend startup)
@app.get("/")
async def read_root():
    return {"message": "api initialized successfully"}

# running backend locally
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)