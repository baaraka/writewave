import Image from "next/image";

const Comment = () => {
  return (
    <div className="mt-12">
      <h1 className="text-gray-500 mb-7 text-3xl">Comments</h1>

      <div className="flex items-center justify-between gap-7">
        <textarea className="w-full p-2 text-gray-500">
          write a comment...
        </textarea>
        <button className="py-4 px-5 bg-green-500 font-bold rounded-md">
          Send
        </button>
      </div>

      <div className="mt-12">
        <div className="mb-12">
          <div className="flex items-center gap-5">
            <Image
              src="/coding.png"
              alt=""
              height={50}
              width={50}
              className="object-cover rounded-full"
              style={{ width: "50px", height: "50px" }}
            />

            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="text-xl font-medium">Baraka Doe</span>
              <span>23-04-2023</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            ratione quas dolorum ipsa fugit, sit a tenetur est obcaecati
            corrupti cum nesciunt quis officia reiciendis. Incidunt reiciendis
            quaerat possimus id!s
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5">
            <Image
              src="/coding.png"
              alt=""
              height={50}
              width={50}
              className="object-cover rounded-full"
              style={{ width: "50px", height: "50px" }}
            />

            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="text-xl font-medium">Baraka Doe</span>
              <span>23-04-2023</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            ratione quas dolorum ipsa fugit, sit a tenetur est obcaecati
            corrupti cum nesciunt quis officia reiciendis. Incidunt reiciendis
            quaerat possimus id!s
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5">
            <Image
              src="/coding.png"
              alt=""
              height={50}
              width={50}
              className="object-cover rounded-full"
              style={{ width: "50px", height: "50px" }}
            />

            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="text-xl font-medium">Baraka Doe</span>
              <span>23-04-2023</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            ratione quas dolorum ipsa fugit, sit a tenetur est obcaecati
            corrupti cum nesciunt quis officia reiciendis. Incidunt reiciendis
            quaerat possimus id!s
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5">
            <Image
              src="/coding.png"
              alt=""
              height={50}
              width={50}
              className="object-cover rounded-full"
              style={{ width: "50px", height: "50px" }}
            />

            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="text-xl font-medium">Baraka Doe</span>
              <span>23-04-2023</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            ratione quas dolorum ipsa fugit, sit a tenetur est obcaecati
            corrupti cum nesciunt quis officia reiciendis. Incidunt reiciendis
            quaerat possimus id!s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
