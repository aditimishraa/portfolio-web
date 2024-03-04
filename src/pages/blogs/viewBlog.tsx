import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Blog, { BlogInterface } from "@/components/Blog";
import axios from "axios";
import { useRouter } from "next/router";
import * as dotenv from 'dotenv';

dotenv.config();

export default function ViewBlog() {
    const router = useRouter();
    const [blog, setBlog] = useState<BlogInterface | null>(null);

    const { blogId } = router.query;
    console.log(router.query)
    console.log(blogId)

    useEffect(() => {
        async function fetchBlog() {
            try {
                if (blogId) {
                    console.log(blogId)
                    console.log('BACKEND_URL',process.env.NEXT_PUBLIC_BACKEND_URL)
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/${blogId}`);
                    setBlog(response.data);
                    console.log(response)
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        }

        fetchBlog();
    }, [blogId]);

    return (
        <div className="flex flex-col items-center border-0">
            <div className="w-2/3">
                <Navbar />
            </div>
            <hr className="w-2/3 border-0 h-0.5 opacity-35 bg-gray-600" />
            <div className="w-2/3">
                {blog && <Blog blog={blog} />}
            </div>
        </div>
    );
}
