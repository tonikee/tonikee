from fastapi import APIRouter, HTTPException
from models import ContactForm, ContactFormCreate
from database import contact_forms_collection
from typing import List

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("", response_model=ContactForm)
async def create_contact_form(form: ContactFormCreate):
    """Create a new contact form submission"""
    form_obj = ContactForm(**form.dict())
    await contact_forms_collection.insert_one(form_obj.dict())
    return form_obj

@router.get("", response_model=List[ContactForm])
async def get_contact_forms():
    """Get all contact form submissions (admin)"""
    forms = await contact_forms_collection.find().sort("created_at", -1).to_list(100)
    return [ContactForm(**form) for form in forms]

@router.get("/{form_id}", response_model=ContactForm)
async def get_contact_form(form_id: str):
    """Get a specific contact form submission"""
    form = await contact_forms_collection.find_one({"id": form_id})
    if not form:
        raise HTTPException(status_code=404, detail="Contact form not found")
    return ContactForm(**form)