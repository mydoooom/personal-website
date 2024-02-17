export const Hero = () => {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="grid grid-cols-[1fr_3fr] items-start gap-10 prose">
          <p>Hi! My name is</p>
          <div className="flex flex-col">
            <h1 className="m-0"> Tran Viet Anh</h1>
            <em>Web Developer</em>
          </div>
        </div>
      </div>
    </>
  );
};
