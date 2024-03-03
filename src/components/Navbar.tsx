import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <div className="flex justify-center p-4 border-0">
            <div className="w-2/3">
                <div className="flex justify-between">
                    <div>
                        a.🪴
                    </div>

                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className={"text-base " +
                                    (currentRoute === "/" ? "text-blue-700 underline" : "text-black")
                                    }>
                                    <div className={"hover:bg-blue-700 hover:text-white cursor-pointer"}>home</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs"
                                    className={
                                        "text-base hover:bg-blue-700 hover:text-white" +
                                        (currentRoute === "/blogs" ? " text-blue-700 underline" : " text-black")
                                    }
                                    >
                                    blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects"
                                    className={
                                        "text-base hover:bg-blue-700 hover:text-white" +
                                        (currentRoute === "/projects" ? " text-blue-700 underline" : "")
                                    }
                                    >
                                    projects
                                </Link>

                            </li>
                            <li>
                                <Link href="/about"
                                    className={
                                        "text-base hover:bg-blue-700 hover:text-white" +
                                        (currentRoute === "/about" ? "  text-blue-700 underline" : "")
                                    }
                                    >
                                    about me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
  
        </div>

    );
}