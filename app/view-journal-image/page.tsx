import Header from "../components/Header";

function ViewJournalImage() {
  return (
    <div className="h-screen">
      <Header />

      <div className="w-full h-full flex">
        <div className="w-1/2 h-full bg-neutral-800">Photo place</div>

        <div className="w-1/2 h-full flex flex-col ">
          <div className="w-full h-1/5 flex bg-purple-500 text-purple-100">
            <div className="w-1/2 h-full">Author</div>

            <div className="w-1/2 h-full">Collab or Personal</div>
          </div>

          <div className="w-full h-4/5 flex">
            <div className="w-1/3 h-full bg-neutral-800 border-2 border-purple-500">
              Description
            </div>

            <div className="w-2/3 h-full flex flex-col bg-neutral-800  border-2 border-purple-500">
              Comments
              <div className="">Profile Photo: Comment</div>
              <div className="">Profile Photo: Comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJournalImage;
