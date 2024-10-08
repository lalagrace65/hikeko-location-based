import { mongooseConnect } from "@/lib/mongoose";
import { Trails } from "@/models";
import { NextResponse } from 'next/server';

export async function GET() {
  await mongooseConnect();
  const trailData = await Trails.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return NextResponse.json(trailData);
}