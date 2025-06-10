import { LightBulb } from '../images/LightBulb';

export const LightBulbTopic = ({ topic, textColor = 'text-indigo-600' }) => {
  return (
    <article className={`${textColor} flex gap-4`}>
      <LightBulb />
      <p>{topic}</p>
    </article>
  );
};
