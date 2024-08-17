import { useTranslation } from 'react-i18next';
import Blog1 from './blog1';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TranslationKeys } from 'src/types/translationKeys';
import Blog2 from './blog2';
import Blog3 from './blog3';

interface Blog {
  id: number;
  titleKey: TranslationKeys; // Use the defined type
  image: string;
  component: React.ReactNode;
}

export const BlogList: Blog[] = [
  {
    id: 1,
    titleKey: 'blog-title',
    image: 'images/blog/blogimg3.jpg',
    component: <Blog1 />
  },
  {
    id: 2,
    titleKey: 'family.blog-title',
    image: 'images/blog/blogimg2.jpg',
    component: <Blog2 />
  },
  {
    id: 3,
    titleKey: 'startup.blog-title',
    image: 'images/blog/blogimg1.jpg',
    component: <Blog3 />
  },
  // Other blog entries...
];

export const ResidentBlog: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');
  const { id } = useParams<{ id: string }>();
  const [selectedBlog, setSelectedBlog] = useState<React.ReactNode>(null);

  useEffect(() => {
    const blog = BlogList.find(blog => blog.id === Number(id));
    if (blog) {
      setSelectedBlog(blog.component);
    } else {
      setSelectedBlog(null); // If no blog matches, reset the state
    }
  }, [id]);

  const handleClickToBlog = () => {
    setSelectedBlog(null);
    navigate(`/blog`);
    window.scrollTo(0, 0);
  };

  const handleBlogClick = (blogId: number) => {
    navigate(`/blog/${blogId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="mt-20 px-4 md:px-8 p-8">
      <div className='container shadow-lg p-8 bg-gray-50'>
        {!selectedBlog && (
          <h4 className="mb-8 text-center sm:text-3xl xl:text-5xl p-4 text-black rounded-t-lg font-bold text-3xl">
            {t('our-blogs')}
          </h4>
        )}
        
        {selectedBlog ? (
          <div>
            {selectedBlog}
            <div className='flex justify-center'>
              <button
                onClick={() => handleClickToBlog()}
                className="p-3 bg-customblue text-white rounded-lg shadow-md hover:bg-customblue-dark transition duration-300 transform hover:scale-105"
              >
                {t('back-blog')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogList.map(blog => (
              <div
                key={blog.id}
                className="card cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                onClick={() => handleBlogClick(blog.id)}
              >
                <img src={blog.image} alt={t(blog.titleKey)} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="text-xl font-bold mt-2">{t(blog.titleKey)}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResidentBlog;
