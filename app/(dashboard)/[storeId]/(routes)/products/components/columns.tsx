"use client";

import { ColumnDef } from "@tanstack/react-table";

import CellActions from "./cell-actions";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  weight: number;
  sizes: string;
  colors: string;
  category: string;
  isFeatured: Boolean;
  isArchived: Boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "sizes",
    header: "Variants",
  },
  {
    accessorKey: "colors",
    header: "Finishes",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
