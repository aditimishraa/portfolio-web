import moment from "moment";

export interface BlogInterface {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    blog: Blog
}
export interface Blog {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}
export default function Blog({ blog }: { blog: BlogInterface }) {
    const {title, content, createdAt} = blog.blog;
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-600 text-sm mb-2">Published on: {moment(createdAt).format("DD/MM/YYYY")}</p>
            <div className="prose">
                <p>{content}</p>
            </div>
        </div>
    );
}