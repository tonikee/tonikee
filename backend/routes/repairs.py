from fastapi import APIRouter, HTTPException
from models import RepairService
from database import repair_services_collection
from typing import List

router = APIRouter(prefix="/repairs", tags=["repairs"])

@router.get("/services", response_model=List[RepairService])
async def get_repair_services():
    """Get all repair services"""
    services = await repair_services_collection.find({"active": True}).to_list(100)
    return [RepairService(**service) for service in services]

@router.get("/services/{service_id}", response_model=RepairService)
async def get_repair_service(service_id: str):
    """Get a specific repair service"""
    service = await repair_services_collection.find_one({"id": service_id})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return RepairService(**service)