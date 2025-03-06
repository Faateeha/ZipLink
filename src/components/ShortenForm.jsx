import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiTrash, FiCopy } from "react-icons/fi";


const ShortenForm = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [history, setHistory] = useState([])

    useEffect(() => {
        const savedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [] ;
        setHistory(savedLinks);
    }, [])

    const handleShorten = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setShortenedUrl("");

        if(!url.trim()) {
            setError("Please enter a valid URL");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

            if (!response.ok) {
                throw new Error("Failed to shorten URL");
            }

            const shortUrl = await response.text();
            setShortenedUrl(shortUrl);

            const newHistory = [{original: url, short: shortUrl}, ...history];
            setHistory(newHistory);
            localStorage.setItem("shortenedLinks", JSON.stringify(newHistory));
            setUrl("")
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("Something went wrong, please try again!")
        }
        setLoading(false);
    };
    const handleDelete = (index) => {
        const updatedHistory = history.filter((_, i) => i !== index);
        setHistory(updatedHistory);
        localStorage.setItem("shortenedLinks", JSON.stringify(updatedHistory));
    };

    return (
        <div className="max-w-md mx-auto mt-[5rem] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">URL Shortener</h2>
            <form onSubmit={handleShorten} className="flex flex-col space-y-4">
                <input type="url" placeholder="Enter URL..." className="p-2 border border-green-300 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400" value={url} onChange={(e) => setUrl(e.target.value)} required/>

                <button type="submit" className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition" disabled={loading}>
                    {loading ? "Shortening" : "Shorten URL"}
                </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>
            }
            {shortenedUrl && (
                <div className="mt-4 p-2 bg-gray-100 text-center rounded-md">
                    <p className="text-sm">Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{shortenedUrl}</a>
                    <CopyToClipboard text={shortenedUrl}>
                        <button className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">copy</button>
                    </CopyToClipboard>
                </div>
            )}

            {history.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Shortened Links History</h3>
                    <ul className="space-y-2">{history.map((link, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded-md flex justify-between space-x-2">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-700 truncate">Original: {link.original}</p>
                                <a href={link.short} traget="_blankk" rel="noopener noreferrer" className="text-blue-600 underline">{link.short}</a>
                            </div>
                            <CopyToClipboard text={link.short}>
                                <button className=" px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"><FiCopy size={18}/></button>
                            </CopyToClipboard>
                            <button onClick={() => handleDelete(index)} className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                            <FiTrash size={18} />
                                    </button>
                        </li>
                    ))}</ul>
                </div>
            )}
        </div>
    )
}

export default ShortenForm;