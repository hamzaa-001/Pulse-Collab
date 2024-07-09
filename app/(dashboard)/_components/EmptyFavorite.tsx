import Image from "next/image";

const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./favorites.svg"
        width={150}
        height={150}
        alt="No Favorites Found"
      />
      <h2 className="text-2xl font-semibold mt-2">No Favorites</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Favoriting a board
      </p>
    </div>
  );
};

export default EmptyFavorite;
