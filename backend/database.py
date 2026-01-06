from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Collections
contact_forms_collection = db.contact_forms
digi_tariffs_collection = db.digi_tariffs
repair_services_collection = db.repair_services
accessory_categories_collection = db.accessory_categories
unlock_operators_collection = db.unlock_operators
testimonials_collection = db.testimonials
settings_collection = db.settings

async def get_database():
    return db