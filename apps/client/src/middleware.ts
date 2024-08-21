import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  const isPathInvalid = url.pathname === '/rock' || url.searchParams.has('Id');

  // Check for /rock path and 'Id' parameter (case-sensitive)
  if (isPathInvalid && url.searchParams.has('Id')) {
    const referer = request.headers.get('referer');

    // Check if the referer is not present or does not match your domain
    if (!referer) {
      console.log('Blocked direct access to:', url.href);
      return NextResponse.redirect(new URL('/', request.url)); // Redirect to 404
    }
  }

  return NextResponse.next(); // Allow other requests
}
