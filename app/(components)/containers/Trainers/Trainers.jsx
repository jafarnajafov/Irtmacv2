import MaxWidth from "../../MaxWidth/MaxWidth";
import Bredcump from "../../global_containers/Bredcump";
import TrainersData from "../../global_containers/TrainersData/TrainersData";

const Trainers = ({ data, trainers_short, trainers_long, seemore, params }) => {
  return (
    <section className="my-[85px] lg:my-[40px] lg:px-[20px]">
      <MaxWidth>
        <Bredcump
          name={trainers_short}
          href={`${params}/telimciler`}
          longtext={trainers_long}
        />

        <div className="mt-[40px] grid grid-cols-12 gap-[24px]">
          {data &&
            data?.map((cur) => (
              <TrainersData key={cur?.id} cur={cur} params={params} />
            ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Trainers;
