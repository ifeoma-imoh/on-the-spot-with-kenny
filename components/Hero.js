import Button from "./Button";
export default function Hero() {
  return (
    <div className="mx-auto w-3/4 pb-72 ">
      <h1 className="text-brand-100 text-7xl w-7/12 text-center mx-auto pb-8">
        Take the <span className="text-brand-200">spotlight</span> and talk tech
        with us
      </h1>
      <p className="text-xl text-brand-300 w-7/12 text-center mx-auto pb-8">
        We cover the latest advancements in technology to give you an
        entertaining and insightful look into some of the worlds most talented
        people.
      </p>
      <div className="w-2/5 flex justify-between mx-auto ">
        <Button backgroundColor="bg-brand-200">Join Us</Button>
        <Button border="border-solid  border-2 border-brand-200">
          Listen to episodes{" "}
        </Button>
      </div>
    </div>
  );
}
