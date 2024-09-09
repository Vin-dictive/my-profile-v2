import Spinner from "~/components/ui/spinner";

export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <Spinner />
        </div>
    )
}