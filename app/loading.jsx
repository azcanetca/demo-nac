const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-[#eee] h-screen fixed top-0 right-0 left-0 z-[2800] transition-all">
      <div className="fire">
        <div className="fire-left">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-center">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-right">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-bottom">
          <div className="main-fire"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
