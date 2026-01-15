import "./header.component.css";

export const HeaderComponent = () => {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>
            Furniture<span>Store</span>
          </h1>
          <h2>The biggest choice on the web</h2>
        </div>
        <div className="header__buttons">
          <ul className="header__buttons-list">
            <li>Log in</li>
            <li>Create an account</li>
            <li>Check out</li>
          </ul>
          <a href="#" className="header__cart-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png"
              alt="Cart Icon"
            />
            <p>My cart:</p>
            <span className="cart-text">
              <span className="item-count">0 item(s)</span> –{" "}
              <span className="total-price">$0.00</span>
            </span>
          </a>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search store..."
          />
        </div>
      </div>
    </section>
  );
};
