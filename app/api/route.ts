import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.travelpayouts.com/data/en/cities.json"
    );

    // https://api.travelpayouts.com/data/en/cities.json
    const data = await res.json();

    //   return NextResponse.json(JSON.stringify(data));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Error in fetching data" + error, { status: 200 });
  }
}

export const POST = async (request: Request) => {
  try {
  } catch (error) {}
};
