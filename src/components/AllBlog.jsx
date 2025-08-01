"use client";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { format } from "date-fns";

const getLimitedHTML = (html, limit = 100) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.substring(0, limit) + (text.length > limit ? "..." : "");
};

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const blogCategories = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "data-science", label: "Data Science" },
    { value: "programming", label: "Programming" },
    { value: "tech-news", label: "Tech News" },
    { value: "software-engineering", label: "Software Engineering" },
    { value: "gadgets", label: "Gadgets & Reviews" },
    { value: "gaming", label: "Gaming" },
    { value: "productivity", label: "Productivity & Tools" },
    { value: "entrepreneurship", label: "Entrepreneurship" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "self-improvement", label: "Self-Improvement" },
    { value: "finance", label: "Finance & Investing" },
    { value: "lifestyle", label: "Lifestyle & Wellness" },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        blogList.sort(
          (a, b) =>
            (b?.createdAt?.toMillis?.() || 0) -
            (a?.createdAt?.toMillis?.() || 0)
        );

        setBlogs(blogList);
        setFilteredBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    setFilteredBlogs((prev) => {
      return blogs.filter((blo) => blo?.category?.includes(category));
    });
  }, [category]);

  useEffect(() => {
    setFilteredBlogs((prev) => {
      return blogs.filter((blo) => {
        if (blo.title.includes(search) || blo?.category?.includes(search))
          return true;
      });
    });
  }, [search]);

  return (
    <div className="min-h-screen p-6 bg-[#121212] pt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-white mt-6">
        Latest Blogs
      </h2>

      <div className="flex justify-between">
        <div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
            className="text-black p-2 pr-8"
          >
            <option value="" disabled>
              Select Category
            </option>
            {blogCategories.map((cate, index) => {
              return (
                <option key={index} value={cate.value}>
                  {cate.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="text-black p-2 pr-10 w-full rounded"
          />
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-white">Loading blogs...</p>
      ) : filteredBlogs.length === 0 ? (
        <p className="text-center text-white">No blogs available.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {filteredBlogs.map((blog) => {
              const limitedText = getLimitedHTML(blog.value, 100); // Replace 'value' if your field name is different

              return (
                <Link href={`/blog/${blog.id}`} key={blog.id} className="group">
                  <div className="bg-gray-900 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                    <div className="overflow-hidden w-full h-40 object-cover rounded-md">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-125"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-white flex items-center gap-3">
                        <SlCalender />
                        <span>
                          {format(
                            new Date(blog.createdAt.seconds * 1000),
                            "PPP"
                          )}
                        </span>
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-blue-700">
                        {blog.title}
                      </h3>

                      <div
                        dangerouslySetInnerHTML={{ __html: limitedText }}
                        className="w-full mt-2 text-gray-300"
                      />

                      <a
                        className="text-white flex items-center gap-3 mt-6 hover:text-blue-700 transition-colors duration-300 ease-in-out grouplink"
                        href={`/blog/${blog.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <span>Read More</span>
                        <FaArrowRightLong className="grouplink-hover:text-blue-700" />
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
