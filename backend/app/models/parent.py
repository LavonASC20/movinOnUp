""""Represents a parent or guardian of a student."""

from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List, TYPE_CHECKING
from datetime import datetime, timezone

if TYPE_CHECKING:
    from .student import Student

class Parent(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    email: str = Field(index=True, unique=True)
    phone_number: str
    status: Optional[str] = "active"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None
    children: List["Student"] = Relationship(back_populates="parent")