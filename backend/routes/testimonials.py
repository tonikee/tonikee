from fastapi import APIRouter, HTTPException
from models import Testimonial
from database import testimonials_collection
from typing import List

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

@router.get("", response_model=List[Testimonial])
async def get_testimonials():
    """Get all approved testimonials"""
    testimonials = await testimonials_collection.find({"approved": True}).to_list(100)
    return [Testimonial(**testimonial) for testimonial in testimonials]

@router.get("/{testimonial_id}", response_model=Testimonial)
async def get_testimonial(testimonial_id: str):
    """Get a specific testimonial"""
    testimonial = await testimonials_collection.find_one({"id": testimonial_id})
    if not testimonial:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return Testimonial(**testimonial)