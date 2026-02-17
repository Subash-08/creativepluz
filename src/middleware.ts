import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        // Security Headers
        const response = NextResponse.next();
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

        const token = req.nextauth.token;
        const isAuth = !!token;
        const isAuthPage = req.nextUrl.pathname.startsWith("/admin/login");

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/admin/dashboard", req.url));
            }
            return response;
        }

        if (
            req.nextUrl.pathname.startsWith("/admin") &&
            req.nextUrl.pathname !== "/admin/login" &&
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

                // Allow access to login page
                if (path.startsWith("/admin/login")) {
                    return true;
                }

                // Public routes (everything not starting with /admin or /dashboard)
                if (!path.startsWith("/admin") && !path.startsWith("/dashboard")) {
                    return true;
                }

                // Protected routes require token
                return !!token;
            },
        },
    }
);

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
