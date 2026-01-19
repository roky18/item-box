import { connect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

//  GET
export async function GET(request) {
  const itemsCollection = connect("items");
  const result = await itemsCollection.find().toArray();
  return NextResponse.json(result);
}

//  POST
export async function POST(req) {
  const body = await req.json();
  const itemsCollection = connect("items");
  const result = await itemsCollection.insertOne(body);
  return NextResponse.json(result);
}
