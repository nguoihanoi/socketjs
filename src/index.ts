import socketIO, { Server as SocketIOServer } from "socket.io";
import {  Server as HTTPServer } from "http"; 

export class SocketIO {
  private io: SocketIOServer;  
  constructor(httpServer: HTTPServer) { 
    this.io = socketIO(httpServer);
  } 
  public Server() {
    return this.io;
  } 
}
