import Link from "next/link";
import React from "react";

export interface BlogData {
    blog: Blog[]
}

export interface Blog {
    id: number;
    title: string;
    content: string;
    date: string;
}

export default function Posts({ blogs }: { blogs: BlogData }) {
    return (
        <div className="flex flex-col h-screen pt-10 pl-10">
            <div className="text-3xl font-bold">Blogs.</div>
            <div className="flex flex-col justify-center">
                {blogs.blog.length > 0 ? (
                    blogs.blog.map((blogPost) => (
                        <div key={blogPost.id} className="flex flex-row justify-between p-5 mt-5">
                            <div className="w-4/5 mr-2 flex-grow p-2">
                                <div className="text-2xl font-semibold">
                                    <Link href={`/blogs/viewBlog?blogId=${blogPost.id}`}>{blogPost.title}</Link>
                                </div>
                                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                <div>{blogPost.content.slice(0, 100) + "...."}</div>
                            </div>
                            <div className="w-1/5 m-0 flex-grow flex flex-col justify-between p-2">
                                <div className="text-right">{blogPost.date}</div>
                                <div className="text-right">{Math.ceil(blogPost.content.length / 100)} minutes</div>
                            </div>
                        </div>
                    ))
                ) : (
                    // Skeleton Loading
                    <div className="flex flex-row justify-between p-5 mt-5">
                        <div className="w-4/5 mr-2 flex-grow p-2 animate-pulse">
                            <div className="text-2xl font-semibold bg-gray-200 h-8"></div>
                            <div className="h-4 bg-gray-200 mt-2"></div>
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="h-4 bg-gray-200 mt-2"></div>
                        </div>
                        <div className="w-1/5 m-0 flex-grow flex flex-col justify-between p-2">
                            <div className="text-right bg-gray-200 h-4"></div>
                            <div className="text-right bg-gray-200 h-4 mt-2"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
