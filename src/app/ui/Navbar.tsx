import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="px-4 w-full flex-row  h-full flex  bg-white ">
        <div className=" justify-start h-full flex-row  flex gap-5">
          <div className="flex gap-5 w-full h-full">
            <Link href="/">
              <img className="h-full w-full " src="logo.svg"></img>
            </Link>
            <div className="w-full flex  h-full left-[150px] top-[44px] ">
              <div className="pt-6 h-6 left-[26px] top-0   items-center inline-flex">
                <Link href="https://www.facebook.com/profile.php?id=100049702466113">
                  <img className="w-6 h-6" src="facebook.png" />
                </Link>
              </div>
              <div className="pt-6 h-6 left-[26px] top-0   items-center inline-flex">
                <Link href="https://www.instagram.com/biuro_podrozy_glob/">
                  <img className="w-6 h-6" src="insta.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex justify-end items-center ">
          <img className="w-6 h-6" src="lupa.svg" />
        </div>
        <div className="flex justify-end items-center ">
          <img className="w-6 h-6" src="vector.svg" />
        </div>
      </div>
    </>
  );
};
