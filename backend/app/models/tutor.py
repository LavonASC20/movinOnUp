"""Represents a tutor who provides academic support to students."""

from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, TYPE_CHECKING
from datetime import datetime, timezone

if TYPE_CHECKING:
    from .tutor_tier import TutorTier

class Tutor(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    email: str = Field(index=True) 
    password: str # later on, make sure this is a valid password
    phone_number: str # later on, make sure this is a valid phone number
    status: Optional[str] = "active" # later on, make sure this is either "active" or "inactive"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None
    tutor_tier_id: Optional[int] = Field(default=None, foreign_key="tutortier.id")
    tier: Optional["TutorTier"] = Relationship(back_populates="tutors")

class TutorCreate(SQLModel):
    first_name: str
    last_name: str
    email: str = Field(index=True)
    phone_number: str
    password: str

class TutorUpdate(SQLModel):
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str] = Field(index=True)
    phone_number: Optional[str]
    status: Optional[str]
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    password: Optional[str]
    tutor_tier_id: Optional[int] = Field(default=None, foreign_key="tutortier.id")
    tier: Optional["TutorTier"] = Relationship(back_populates="tutors")