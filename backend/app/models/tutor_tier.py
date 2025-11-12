"""Represents a tier category for tutors, with associated pay rates."""

from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List, TYPE_CHECKING

if TYPE_CHECKING:
    from .tutor import Tutor

class TutorTier(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, unique=True)
    pay_rate: float

    tutors: List["Tutor"] = Relationship(back_populates="tier")
