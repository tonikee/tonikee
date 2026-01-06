from fastapi import APIRouter, HTTPException
from models import DigiTariff
from database import digi_tariffs_collection
from typing import List

router = APIRouter(prefix="/digi", tags=["digi"])

@router.get("/tariffs", response_model=List[DigiTariff])
async def get_digi_tariffs(type: str = None):
    """Get all DIGI tariffs, optionally filtered by type"""
    query = {"active": True}
    if type:
        query["type"] = type
    
    tariffs = await digi_tariffs_collection.find(query).to_list(100)
    return [DigiTariff(**tariff) for tariff in tariffs]

@router.get("/tariffs/{tariff_id}", response_model=DigiTariff)
async def get_digi_tariff(tariff_id: str):
    """Get a specific DIGI tariff"""
    tariff = await digi_tariffs_collection.find_one({"id": tariff_id})
    if not tariff:
        raise HTTPException(status_code=404, detail="Tariff not found")
    return DigiTariff(**tariff)