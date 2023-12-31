import Header from "../components/Header";

function ViewJournalImage() {
  return (
    <div className="h-screen">
      <Header />

      <div className="w-full h-full p-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-4/6 m-1 md:m-5 p-5 bg-neutral-800 rounded-md">
          <div className="h-full w-full border-2 border-white bg-neutral-700 rounded-md shadow-around shadow-pink-600">
            <img
              src="/placeholder_photo.jpg"
              alt="placeholder"
              className="w-full h-full object-fit"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex m-1 md:m-5 flex-col ">
          <div className="w-full h-12 mb-5 flex bg-purple-500 text-purple-100 rounded-md">
            <div className="w-1/2 h-full p-2">
              <h1 className="font-bold"> Sam's Drawing </h1>
              {/*Can have multiple authors*/}
            </div>

            <div className="w-1/2 h-full p-2 border-black border-l-4">
              <h1 className="font-bold">Personal</h1>
              {/* Collab or Personal */}
            </div>
          </div>

          {/* The border gives too much clutter maybe */}

          <div className="w-full h-full md:h-4/6 p-5 flex flex-col md:flex-row bg-neutral-800 rounded-md">
            <div className="w-full md:w-1/3 h-60 md:h-full p-2 rounded-md ">
              <div className="h-fit p-2 bg-neutral-700 rounded-lg">
                <h1 className="text-center font-bold"> DESCRIPTION </h1>
              </div>

              <div className="h-2 w-full mt-2 bg-pink-600 flex justify-center items-center rounded-full">
                <div className="h-1 w-full bg-white rounded-full"></div>
              </div>

              <div className="h-5/6 p-2 mt-2 overflow-y-auto">
                <span className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, temporibus. Autem, dolor accusantium. Fugit provident
                  dolorum temporibus commodi a ea optio adipisci recusandae
                  quisquam incidunt rem tempora quaerat quidem suscipit at
                  molestias aperiam porro, dolorem labore hic? Et vel,
                  repellendus aut natus accusantium minima mollitia alias
                  deserunt nobis nihil rerum quisquam iure ab ex. Reprehenderit
                  deleniti culpa rerum. Modi, atque. Facilis, voluptatibus omnis
                  inventore sunt nulla eaque quae. Aspernatur obcaecati
                  blanditiis enim vitae minus. Sit magni ipsa quis, harum
                  consequuntur voluptatibus quaerat quas reiciendis sed natus,
                  fugiat nobis enim esse beatae modi. Cumque, dicta expedita,
                  assumenda sapiente architecto ipsam minima quasi quaerat, id
                  cupiditate suscipit. Repudiandae nisi hic doloremque
                  cupiditate consectetur ut pariatur qui, laudantium vitae vel
                  exercitationem debitis deserunt.
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3 ml-1 p-2 h-full flex flex-col bg-neutral-800 rounded-md">
              <div className="h-fit p-2 bg-neutral-700 rounded-lg">
                <h1 className="text-center font-bold"> COMMENTS </h1>
              </div>

              <div className="h-2 w-full mt-2 bg-pink-600 flex justify-center items-center rounded-full">
                <div className="h-1 w-full bg-white rounded-full"></div>
              </div>

              <div className="h-80 md:h-full mt-2 overflow-y-auto">
                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="h-20 w-20 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="/ghosty_profilepic.jpg"
                      alt="ghosty profile pic"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">Ghosty</p>
                    <p className="font-thin">This isn't a drawing though 🤨</p>
                  </div>
                </div>

                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                    <img
                      className="w-12 h-12 object-cover"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">Bob</p>
                    <p className="font-thin">I am Bob </p>
                  </div>
                </div>

                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="h-20 w-20 rounded-full border-2 border-white  overflow-hidden">
                    <img
                      src="/pfp.jpg"
                      alt="profile pic"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">Kat</p>
                    <p className="font-thin">I like neon </p>
                  </div>
                </div>

                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                    <img
                      className="w-12 h-12 object-cover"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">Amy</p>
                    <p className="font-thin">Its saur pretty ❤️ </p>
                  </div>
                </div>

                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                    <img
                      className="w-12 h-12 object-cover"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">Tim</p>
                    <p className="font-thin">Yo this is my photo</p>
                  </div>
                </div>

                <div className="flex h-24 p-2 m-2 bg-neutral-700 rounded-lg">
                  <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                    <img
                      className="w-12 h-12 object-cover"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                    <p className="text-2xl">user123456</p>
                    <p className="font-thin">hello ur so cool</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJournalImage;
