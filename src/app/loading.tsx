import Loader from "@/components/ui/Loader";

export default function Loading() {
    return (
        <div className="w-full h-[50vh] flex items-center justify-center">
            <Loader size="lg" />
        </div>
    );
}
