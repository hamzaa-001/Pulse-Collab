import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./search.svg"
        width={150}
        height={150}
        alt="No Search Found"
      />
      <h2 className="text-2xl font-semibold mt-2">No Result Found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching for something Else
      </p>
    </div>
  );
};

export default EmptySearch;
