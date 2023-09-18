import Image from "next/image";

export default function Page() {
  return (
    // map from 1 to 12
    <div className="columns-3 gap-4 my-8">
      {Array.from(Array(10).keys()).map((i) => (
        <Image
          key={i}
          src={`/images/temp/${i + 1}.jpg`}
          width="300"
          height="300"
          alt="temp"
          className="mb-4 rounded-lg"
        />
        // <Image src="/images/temp/{}.jpg" width="300" height="300" alt="temp" />
      ))}
    </div>
  );
}
