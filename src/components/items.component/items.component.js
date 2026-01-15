import classes from "./items.module.css";
import { itemsData } from "./items.data.js";
import { ItemComponent } from "./item.component/item.component.js";

export const ItemsComponent = () => {
  return (
    <div className={classes.container}>
      {itemsData.map((item, index) => (
        <ItemComponent
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
          salePrice={item.salePrice}
          currency={item.currency}
        />
      ))}
    </div>
  );
};
