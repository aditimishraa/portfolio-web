import Navbar from "@/components/Navbar";

export default function Projects() {
    return(
        <div className="flex flex-col items-center">
            <div className="w-2/3">
                <Navbar />
            </div>
            <hr className="w-2/3 border-0 h-0.5 opacity-35 bg-gray-600" />
        </div>
    );
}