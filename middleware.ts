import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);

const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isProtectedRoute = createRouteMatcher(["/user(.*)", "/admin(.*)"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isUserRoute = createRouteMatcher(["/user(.*)"]);

export default clerkMiddleware(
  async (auth, req: NextRequest) => {
    const { nextUrl } = req;
    const { userId, sessionClaims } = auth();
    const role = sessionClaims?.metadata?.role;
    const isLoggedIn = !!auth().userId;

    if ((isAuthRoute(req) || isPublicRoute(req)) && userId) {
      if (role === "user") {
        return Response.redirect(new URL("/user/dashboard", nextUrl));
      } else if (role === "admin") {
        return Response.redirect(new URL("/admin/dashboard", nextUrl));
      }
    }

    if (isAdminRoute(req)) {
      if (role !== "admin") {
        return Response.redirect(new URL("/", nextUrl));
      }
    }

    if (isUserRoute(req)) {
      if (role !== "user") {
        return Response.redirect(new URL("/", nextUrl));
      }
    }

    if (isProtectedRoute(req)) {
      auth().protect();
    }

    if (!isLoggedIn && !isPublicRoute(req) && !isAuthRoute(req)) {
      return Response.redirect(new URL("/sign-in", nextUrl));
    }

    return;
  },
  { debug: false }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
