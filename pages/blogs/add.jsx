import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveBlog = (data) => {
        setData(JSON.stringify(data))
    }

    return (
        <div style={{ margin: '1rem' }}>
            <form onSubmit={handleSubmit(saveBlog)}>
                <h1>New Blog</h1>
                <label htmlFor="title">Title</label><br />
                <input id="title" {...register("firstName")} placeholder="Blog Title" /><br />

                <label htmlFor="category">Category</label>
                <select id="category" {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">News</option>
                    <option value="B">Life</option>
                </select><br />
                <label htmlFor="content">Category</label><br />
                <textarea id="text" {...register("aboutYou")} placeholder="About you" /><br />
                <input type="submit" />
                <p>{data}</p><br />
            </form>
        </div>
    );
}import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveBlog = (data) => {
        setData(JSON.stringify(data))
    }

    return (
        <div style={{ margin: '1rem' }}>
            <form onSubmit={handleSubmit(saveBlog)}>
                <h1>New Blog</h1>
                <label htmlFor="title">Title</label><br />
                <input id="title" {...register("firstName")} placeholder="Blog Title" /><br />

                <label htmlFor="category">Category</label>
                <select id="category" {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">News</option>
                    <option value="B">Life</option>
                </select><br />
                <label htmlFor="content">Category</label><br />
                <textarea id="text" {...register("aboutYou")} placeholder="About you" /><br />
                <input type="submit" />
                <p>{data}</p><br />
            </form>
        </div>
    );
}