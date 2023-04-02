import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

export const hashPassword = (password) => bcrypt.hash(password, 10); //for registering

export const comparePasswords = (plainTextPassword, hashedPassword) =>
    bcrypt.compare(plainTextPassword, hashedPassword);