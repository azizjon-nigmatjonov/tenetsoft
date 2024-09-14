"use client";

import { SwiperWrapper } from "../../SwiperWrapper";

const HomeBanner = () => {
  return (
    <div className="container">
      <SwiperWrapper
        swiperList={[
          { image: "https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/original_thumb/0a026a71.jpg?version=1618113595", name: "1" },
          { image: "https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/original_thumb/0a026a71.jpg?version=1618113595", name: "2" },
          { image: "https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/original_thumb/0a026a71.jpg?version=1618113595", name: "3" },
        ]}
      />
    </div>
  );
};

export default HomeBanner;
