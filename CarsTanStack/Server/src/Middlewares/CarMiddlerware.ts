import express from 'express';

export function applyBodyParsers(app:any) {
  app.use(express.json()); // Parses JSON data
  app.use(express.urlencoded({ extended: false })); // Parses form data
}

