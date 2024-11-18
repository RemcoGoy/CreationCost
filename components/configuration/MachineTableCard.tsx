import * as React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
} from '@/components/ui/table';

export function MachineTableCard() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Machines</CardTitle>
        <CardDescription>View your machines.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Brand</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Bambu Lab</TableCell>
              <TableCell>P1S</TableCell>
              <TableCell>FDM</TableCell>
              <TableCell className="text-right">$800.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
