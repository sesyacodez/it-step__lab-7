import classes from "./item.module.css";

export const ItemComponent = ({ image, title, price, salePrice, currency }) => {
  return (
    <div className={classes.item}>
      {salePrice && <span className={classes.saleBadge}>SALE</span>}
      <div className={classes.imageWrapper}>
        <img src={image} alt={title} className={classes.image} />
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.priceWrapper}>
          {salePrice ? (
            <>
              <span className={classes.oldPrice}>
                {currency}
                {price}
              </span>
              <span className={classes.salePrice}>
                {currency}
                {salePrice}
              </span>
            </>
          ) : (
            <span className={classes.price}>
              {currency}
              {price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
