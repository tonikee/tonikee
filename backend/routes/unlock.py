from fastapi import APIRouter, HTTPException
from models import UnlockOperator
from database import unlock_operators_collection
from typing import List

router = APIRouter(prefix="/unlock", tags=["unlock"])

@router.get("/operators", response_model=List[UnlockOperator])
async def get_unlock_operators():
    """Get all unlock operators"""
    operators = await unlock_operators_collection.find({"active": True}).to_list(100)
    return [UnlockOperator(**operator) for operator in operators]

@router.get("/operators/{operator_id}", response_model=UnlockOperator)
async def get_unlock_operator(operator_id: str):
    """Get a specific unlock operator"""
    operator = await unlock_operators_collection.find_one({"id": operator_id})
    if not operator:
        raise HTTPException(status_code=404, detail="Operator not found")
    return UnlockOperator(**operator)