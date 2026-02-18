import { Suspense } from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <Suspense fallback={<div className="text-center">Loading login form...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
}
