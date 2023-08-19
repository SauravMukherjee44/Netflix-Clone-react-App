import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { useSession, signIn, signOut } from 'next-auth/react'

function Header() {
  const [show, setShow] = useState(false);

  const [loginShow,setLoginShow] = useState(false);
  const {data : session} = useSession();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: `${show ? "black" : "transparent"}` }}
      className="transition-all duration-1000 flex fixed z-50 top-0 w-full  items-center px-3"
    >
      <div className="flex-1">
        <Image
          width={100}
          height={50}
          src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
        />
      </div>

      <div className="cursor-pointer mr-5">
        <BsCollectionPlay className="text-white text-2xl" />
      </div>
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden" onClick={()=>setLoginShow(true)} >
        {session ? 
          <Image width={50} height={50} src={session.user.image}/>
        :
          <Image width={50} height={50} src="https://www.w3schools.com/howto/img_avatar.png" />
        }
      </div>
      <div className={`absolute top-[50px] right-[20px] ${loginShow ? "flex" : "hidden"} p-[15px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg`}>
        {!session ? 
        <div className="flex w-full flex-col">
          <p>You are not logged in!!</p>
          <button className="w-full bg-red-600 p-[5px] rounded-md mt-[5px]" onClick={()=>signIn()}>Log In</button>
        </div>
        : 
        <div className="flex w-full flex-col">
          <div className="flex flex-col"><span className="text-base font-bold">{session.user.name}</span><span className="text-sm font-thin">{session.user.email}</span></div>
          <button className="w-full bg-red-600 p-[5px] rounded-md mt-[5px]" onClick={()=>signOut()}>Log Out</button>
        </div>
        }
      </div>
    </div>
  );
}

export default Header;
