from fastapi import APIRouter, HTTPException
from models import AccessoryCategory
from database import accessory_categories_collection
from typing import List

router = APIRouter(prefix="/accessories", tags=["accessories"])

@router.get("/categories", response_model=List[AccessoryCategory])
async def get_accessory_categories():
    """Get all accessory categories"""
    categories = await accessory_categories_collection.find({"active": True}).to_list(100)
    return [AccessoryCategory(**category) for category in categories]

@router.get("/categories/{category_id}", response_model=AccessoryCategory)
async def get_accessory_category(category_id: str):
    """Get a specific accessory category"""
    category = await accessory_categories_collection.find_one({"id": category_id})
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return AccessoryCategory(**category)