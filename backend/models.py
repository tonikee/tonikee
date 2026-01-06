from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact Form Model
class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str

# DIGI Tariff Model
class DigiTariff(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    type: str  # 'mobile' or 'combo'
    name: str
    price: str
    data: Optional[str] = None
    speed: Optional[str] = None
    calls: Optional[str] = None
    features: List[str]
    popular: bool = False
    active: bool = True

# Repair Service Model
class RepairService(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    icon: str
    time: str
    warranty: str
    active: bool = True

# Accessory Category Model
class AccessoryCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    icon: str
    items: List[str]
    active: bool = True

# Unlock Operator Model
class UnlockOperator(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    logo: str
    time: str
    method: str
    instant: bool = False
    active: bool = True

# Testimonial Model
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int
    text: str
    date: str
    approved: bool = True

# Settings Model
class Settings(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    key: str
    value: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)