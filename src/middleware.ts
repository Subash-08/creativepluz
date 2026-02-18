import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        // console.log('[Middleware] Request:', req.nextUrl.pathname);
        const response = NextResponse.next();
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

        const token = req.nextauth.token;
        const isAuth = !!token;
        const isAuthPage = req.nextUrl.pathname.startsWith("/login");

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/admin/dashboard", req.url));
            }
            return response;
        }

        if (
            req.nextUrl.pathname.startsWith("/admin") &&
            token?.role !== "admin" &&
            token?.role !== "editor"
        ) {
            return NextResponse.rewrite(new URL("/403", req.url));
        }

        return response;
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                const path = req.nextUrl.pathname;

                // Allow access to login/register pages
                if (path.startsWith("/login") || path.startsWith("/register")) {
                    return true;
                }

                // Public routes (everything not starting with /admin and not /dashboard)
                if (!path.startsWith("/admin")) {
                    // If accessing dashboard directly, require auth
                    if (path.startsWith("/dashboard")) return !!token;
                    return true;
                }

                // Protected /admin routes require token
                return !!token;
            },
        },
        pages: {
            signIn: "/login",
        }
    }
);

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
