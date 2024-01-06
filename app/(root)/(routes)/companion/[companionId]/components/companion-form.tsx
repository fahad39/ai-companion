"use client";
import { Category, Companion } from "@prisma/client";
import React from "react";

interface CompanionForm {
  initalData: Companion | null;
  categories: Category[];
}

const CompanionForm = ({ initalData, categories }: CompanionForm) => {
  return <div>CompanionForm</div>;
};

export default CompanionForm;
