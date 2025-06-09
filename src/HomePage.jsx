
import { AboutUs } from './features/aboutUs/AboutUs';
import { Courses } from './features/courses/Courses';
// import { Banner } from './features/banner/Banner';
import { Categories } from './features/categories/Categories';
import Layout from './Layout';
import { WhyChooseUs } from './features/whyChooseUs/WhyChooseUs';
import { Programs } from './features/programs/Programs';
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
      <Programs />
    </Layout>
  );
}

export default HomePage;
