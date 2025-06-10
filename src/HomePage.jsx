
import { AboutUs } from './features/aboutUs/AboutUs';
import { Courses } from './features/courses/Courses';
// import { Banner } from './features/banner/Banner';
import { Categories } from './features/categories/Categories';
import Layout from './Layout';
import { WhyChooseUs } from './features/whyChooseUs/WhyChooseUs';
import { Educations } from './features/educations/Educations';
import { Banner2 } from './features/banner/Banner2';

function HomePage() {
  return (
    <Layout>
      <Banner2 />
      {/* <Banner /> */}
      <AboutUs />
      <Categories />
      <Courses />
      <WhyChooseUs />
      <Educations />
    </Layout>
  );
}

export default HomePage;
