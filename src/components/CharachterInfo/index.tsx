export const CharacterInfo = () => {
  return (
    <section className="relative w-full mx-auto max-w-screen-md grid grid-cols-2 gap-8">
      <article className="rounded-lg card-gradient">
        <img
          className="object-cover object-top w-full rounded-lg max-h-96"
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
          alt="CharacterPicture"
        />
        <h2 className="text-2xl font-extrabold text-center py-2 text-gray-300">
          Walter White
        </h2>
      </article>
      <article className="space-y-4">
        <DataFieldText title="Nickname" content="Walter white" />
        <DataFieldText title="Ocupation" content={["string", "string"]} />
        <DataFieldText title="Status" content="Walter white" />
      </article>
    </section>
  );
};

interface DataFieldTextProps {
  title: string;
  content: string | string[];
}

export const DataFieldText: React.FC<DataFieldTextProps> = ({
  title,
  content,
}) => {
  if (typeof content === "object") {
    return (
      <section className="text-gray-300">
        <h4 className="font-extrabold ">{title}</h4>
        <div className="space-y-2">
          {content.map((value) => (
            <div
              key={value}
              className="flex items-center h-8 px-4 align-middle rounded-lg card-gradient"
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
