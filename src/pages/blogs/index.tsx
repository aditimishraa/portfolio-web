import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Posts, { BlogData } from "@/components/Posts";
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export default function Blogs() {
    const [blogs, setBlogs] = useState<BlogData>({ blog: [] });
    console.log('BACKEND_URL',process.env.NEXT_PUBLIC_BACKEND_URL)
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/bulk`);
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col items-center border-0">
            <div className="w-2/3">
                <Navbar />
            </div>
            <hr className="w-2/3 border-0 h-0.5 opacity-35 bg-gray-600" />
            <div className="w-2/3">
                <Posts blogs={blogs} />
            </div>    
        </div>
    );
}
