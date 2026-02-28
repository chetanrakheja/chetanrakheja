import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { links } from "@/lib/links";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const destination = links[slug];

  if (destination) {
    return NextResponse.redirect(destination, { status: 301 });
  }

  return new NextResponse(null, { status: 404 });
}
