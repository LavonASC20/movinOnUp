"""Represents a system administrator who can manage tutors, students, and parents."""

from sqlmodel import SQLModel, Field
from typing import Optional 
from datetime import datetime, timezone

class Admin(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    email: str = Field(index=True, unique=True)
    phone_number: str
    status: Optional[str] = "active"  
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None
    role: Optional[str] = None