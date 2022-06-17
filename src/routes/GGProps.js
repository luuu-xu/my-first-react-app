import { DefaultPropsComponent, DemoComponentClass, DemoComponentFunction, Parent } from '../components/GGPropsComponents';
import { GGClock } from '../components/GGStateComponents';

const GGProps = () => {
  return (
    <div>
      <DemoComponentClass user="luuu-xu" />
      <DemoComponentFunction user="luuu-xu"/>
      <Parent />
      <DefaultPropsComponent />
      <GGClock title="luuu-xu" />
    </div>
  );
};

export default GGProps;