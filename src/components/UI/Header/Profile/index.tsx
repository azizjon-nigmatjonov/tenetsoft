import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex justify-end">
      <div className="rounded-full h-[40px] w-[40px] overflow-hidden">
        <Image
          width={40}
          height={40}
          className="object-cover"
          src="/images/user.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};
