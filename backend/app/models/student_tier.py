"""Represents a tier category for students, with associated additional info/permissions."""

from datetime import datetime, timezone
from sqlmodel import Column, SQLModel, Field, Relationship, JSON
from typing import Any, Optional, List, TYPE_CHECKING

if TYPE_CHECKING:
    from .student import Student

class StudentTier(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, unique=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None
    authorized_resources: dict[str, Any] = Field(
        default={
            "homework": False,
            "graded_feedback": False,
            "personalized_comments": False,
            "office_hour": False,
            "foundation_model_access": {"user": "", "password": ""}
        },
        sa_column=Column(JSON)
    )
    
    students: List["Student"] = Relationship(back_populates="tier")
