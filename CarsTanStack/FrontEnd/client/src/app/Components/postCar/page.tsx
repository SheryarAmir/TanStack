"use client";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCar } from '../API/CarRoutes';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CarIcon, Calendar, DollarSign, Palette, Tag } from "lucide-react";



export default function PostCar() {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState("");

  const mutation = useMutation({
    mutationFn: postCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      setName("");
      setModel("");
      setYear(0);
      setPrice(0);
      setColor("");
      alert("Car added successfully!");
    },
    onError: () => {
      alert("Failed to add car");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, model, year, price, color });
  };

  return (
   <Card className="max-w-md mx-auto mt-10 border border-gray-200 shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-primary">Add New Car</CardTitle>
        <CardDescription className="text-center">Enter the details of the car you want to add</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <CarIcon className="h-4 w-4" />
              Car Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Toyota Camry"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Car Model
            </Label>
            <Input
              id="model"
              placeholder="e.g. SE"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Car Year
            </Label>
            <Input
              id="year"
              type="number"
              placeholder="e.g. 2023"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Car Price
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="e.g. 25000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="color" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Car Color
            </Label>
            <Input
              id="color"
              placeholder="e.g. Blue"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit} disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? "Submitting..." : "Add Car"}
        </Button>
      </CardFooter>
    </Card>

  );
}
