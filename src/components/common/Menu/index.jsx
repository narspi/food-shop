import React, { forwardRef } from "react";
import "./styles.scss";
import MenuItem from "./MenuItem";

const Menu = forwardRef(({list},ref) => {
  return (
    <main className="main" ref={ref}>
      {list && list.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  );
});

export default Menu;
