
import { AboutUs } from './features/aboutUs/AboutUs';
import { Courses } from './features/courses/Courses';
import { Banner } from './features/banner/Banner';
import { Categories } from './features/categories/Categories';
import Layout from './Layout';
import { WhyChooseUs } from './features/whyChooseUs/WhyChooseUs';

function HomePage() {
  return (
    <Layout>
      <Banner />
      <AboutUs />
      <Categories />
      <Courses />
      <WhyChooseUs />
    </Layout>
  );
}

export default HomePage;
