import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
} from '@/components/ui/table';

export function FilamentTableCard() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Filament</CardTitle>
        <CardDescription>View your filaments.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Brand</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Diameter</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">PolyMaker</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>1.75mm</TableCell>
              <TableCell className="text-right">$25.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
