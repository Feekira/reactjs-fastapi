from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get")
async def get_data():
    return {"body":" test used reactjs and fastapi"}

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)