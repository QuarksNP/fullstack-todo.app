import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export interface UserModel extends User {}

export interface ExpressNextFunction extends NextFunction {}
export interface ExpressResponse extends Response {}
export interface ExpressRequest extends Request {
    user?: UserModel
}