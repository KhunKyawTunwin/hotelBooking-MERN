import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nothern Rare In Shan-State</span>
        <span className="fpCity">Yangon</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Southern Shan-State Taunggyi</span>
        <span className="fbCity">Taunggyi</span>
        <span className="fpPrice">Starting from $220</span>
        <div className="fpRating">
          <button>10</button>
          <span>Best To Stay</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1526725702345-bdda2b97ef73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Eastern Shan-State Hotels</span>
        <span className="fbCity">NangSan</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>7.8</button>
          <span>Best To Stay</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nyaung Shwe-Innlay</span>
        <span className="fbCity">ShanState-Taunggyi</span>
        <span className="fpPrice">Starting from $50 to $300</span>
        <div className="fpRating">
          <button>10</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
