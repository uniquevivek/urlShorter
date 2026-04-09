import { useState } from "react";
import { shortenUrl } from "../api/urlApi";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!url.startsWith("http")) {
      alert("Enter valid URL (include http/https)");
      return;
    }

    try {
      setLoading(true);
      const data = await shortenUrl(url);
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6">
          🔗 URL Shortener
        </h1>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 outline-none mb-4"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          {loading ? "Processing..." : "Shorten URL"}
        </button>

        {/* Result */}
        {shortUrl && (
          <div className="mt-6 bg-white/30 p-4 rounded-lg flex items-center justify-between backdrop-blur-md">

            <span className="text-white text-sm truncate">
              {shortUrl}
            </span>

            <button
              onClick={copyToClipboard}
              className="ml-2 bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-gray-100"
            >
              Copy
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default UrlForm;