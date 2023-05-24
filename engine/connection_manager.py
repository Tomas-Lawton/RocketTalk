import json
from typing import List, Dict, Any
from pydantic import BaseModel
from fastapi import FastAPI, Request, HTTPException, WebSocket, WebSocketDisconnect

class RequestModel(BaseModel):
    user_data: Dict[str, Any]

class ResponseModel(BaseModel):
    status: str
    result_sketch: Dict[str, Any]


class Connection_Manager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []
        self.process_is_active = False

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        await self.main_sketch.stop()
        del self.main_sketch

    async def broadcast_explore_sketch(self, result_sketch: ResponseModel):
        for connection in self.active_connections:
            await connection.send_json(result_sketch)

    async def process_user_request(self, request: RequestModel):
            print(request)

            if request["status"] == "something":
                print()
