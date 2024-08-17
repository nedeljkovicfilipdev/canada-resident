import { useNavigate } from 'react-router-dom';
import { BlogList } from "../resident-blog";
import { useTranslation } from 'react-i18next';

export const ResidentLatest: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');
  const latestBlogs = BlogList.slice(0, 3); // Get the latest 3 blogs

  const handleClick = (id: number) => {
    navigate(`blog/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="mt-20 px-4 md:px-8 container mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">{t('blog-latest')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBlogs.map(blog => (
          <div
            key={blog.id}
            className="card cursor-pointer shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            onClick={() => handleClick(blog.id)} // Navigate to Blog with specific ID
          >
            <img src={blog.image} alt={t(blog.titleKey)} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mt-2">{t(blog.titleKey)}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResidentLatest;
