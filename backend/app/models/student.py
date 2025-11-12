"""Represents a student in one of our courses."""

from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, TYPE_CHECKING
from datetime import datetime, timezone

if TYPE_CHECKING:
    from .student_tier import StudentTier
    from .parent import Parent

class Student(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str 
    last_name: str
    email: str = Field(index=True, unique=True)
    status: Optional[str] = "active"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None
    student_tier_id: Optional[int] = Field(default=None, foreign_key="studenttier.id")
    tier: "StudentTier" = Relationship(back_populates="students")
    parent_id: Optional[int] = Field(default=None, foreign_key="parent.id")
    parent: Optional["Parent"] = Relationship(back_populates="children")