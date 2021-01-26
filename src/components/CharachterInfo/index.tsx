import { Characters } from "src/types/Characters";

interface CharacterInfoProps {
  data: Characters;
}
export const CharacterInfo: React.FC<CharacterInfoProps> = ({ data }) => {
  return (
    <section className="relative w-full mx-auto max-w-screen-md grid grid-cols-2 gap-8">
      <article className="rounded-lg card-gradient">
        <img
          className="object-cover object-top w-full rounded-lg max-h-96"
          src={data.img}
          alt="CharacterPicture"
        />
        <h2 className="py-2 text-2xl font-extrabold text-center text-gray-300">
          {data.name}
        </h2>
      </article>
      <article className="space-y-4">
        <DataFieldText title="Nickname" content={data.nickname} />
        <DataFieldText title="Ocupation" content={data.occupation} />
        <DataFieldText title="Status" content={data.status} />
        <DataFieldText
          title="Appear in seasons: "
          content={data.appearance}
          type="season"
        />
      </article>
    </section>
  );
};

type Content = (string | string[]) | number[];
interface DataFieldTextProps {
  title: string;
  content: Content;
  type?: "season";
}

export const DataFieldText: React.FC<DataFieldTextProps> = ({
  title,
  content,
  type,
}) => {
  if (typeof content === "object" && type !== "season") {
    return (
      <section className="text-gray-300">
        <h4 className="font-extrabold ">{title}</h4>
        <div className="space-y-2">
          {/*@ts-ignore*/}
          {content.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center h-8 px-4 align-middle rounded-lg card-gradient"
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (typeof content === "object" && type === "season") {
    return (
      <section className="text-gray-300">
        <h4 className="font-extrabold ">{title}</h4>
        <div className="flex space-x-4">
          {/*@ts-ignore*/}
          {content.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-16 h-16 align-middle rounded-lg card-gradient"
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="text-gray-300">
      <h4 className="font-extrabold ">{title}</h4>
      <div className="flex items-center h-16 px-4 align-middle rounded-lg card-gradient">
        <p>{content}</p>
      </div>
    </section>
  );
};
