export const CharacterInfo = () => {
  return (
    <section className="relative w-full mx-auto max-w-screen-md grid grid-cols-2 gap-8">
      <article className="rounded-lg card-gradient">
        <img
          className="object-cover object-top w-full rounded-lg max-h-96"
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
          alt="CharacterPicture"
        />
        <h2 className="py-2 text-2xl font-extrabold text-center text-gray-300">
          Walter White
        </h2>
      </article>
      <article className="space-y-4">
        <DataFieldText title="Nickname" content="Walter white" />
        <DataFieldText title="Ocupation" content={["string", "string"]} />
        <DataFieldText title="Status" content="Walter white" />
        <DataFieldText
          title="Appear in seasons: "
          content={["1", "2", "3", "4", "5"]}
          type="season"
        />
      </article>
    </section>
  );
};

interface DataFieldTextProps {
  title: string;
  content: string | string[];
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
          {content.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center w-16 h-16 align-middle rounded-lg card-gradient justify-center"
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
