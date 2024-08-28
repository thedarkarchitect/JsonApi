import React, { useState, useEffect } from "react";
import Post from "../components/Post";

const Posts = () => {
    // const user = localStorage.getItem("user");
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchposts = async () => {
    //         setLoading(true);
    //         setError(null);
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //             const data = await res.json();
    //             console.log(data);
    //             setPosts(data);
    //         } catch (error) {
    //             setError("Error fetching data");
    //             console.error("Error fetching data", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchposts();
    // }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                // Check if posts are already cached in localStorage
                const cachedPosts = localStorage.getItem("posts");

                if (cachedPosts) {
                    // Use cached posts if available
                    setPosts(JSON.parse(cachedPosts));
                } else {
                    // Fetch posts if not cached
                    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                    const data = await res.json();
                    console.log(data);
                    setPosts(data);
                    // Cache the fetched posts in localStorage
                    localStorage.setItem("posts", JSON.stringify(data));
                }
            } catch (error) {
                setError("Error fetching data");
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const postsPerPage = 10;
    const totalPages = Math.ceil(posts.length / postsPerPage);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentposts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    if (loading) {
        return <div className="flex justify-center mt-4">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center mt-4 text-red-500">{error}</div>;
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 p-12 ">
                    {currentposts.map((post) => (
                            <Post key={post.id} item={post} />
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center mt-4 pb-7">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-white border-2 border-customYellow hover:bg-customYellow rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => handlePageChange(number + 1)}
                        className={`px-4 py-2 mx-2 ${
                            currentPage === number + 1
                                ? "bg-customYellow text-white"
                                : "bg-white border-2 border-customYellow"
                        } rounded-lg`}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-white border-2 border-customYellow hover:bg-customYellow rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Posts;
