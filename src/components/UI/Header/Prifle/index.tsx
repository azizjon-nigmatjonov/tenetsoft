export const Profile = () => {
  return (
    <div className="flex justify-end">
      <div className="rounded-full h-[40px] w-[40px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/user.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};
