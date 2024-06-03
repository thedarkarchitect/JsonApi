import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { useAuth } from "../AuthProvider";

const Shop = () => {
    const user = localStorage.getItem("user");
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("https://petco.onrender.com/api/v1/products/");
                const data = await res.json();
                setProducts(data.products);
            } catch (error) {
                setError("Error fetching data");
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const productsPerPage = 10;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
                    {currentProducts.map((product) => (
                        <Product key={product.id} item={product} />
                    ))}
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

export default Shop;
