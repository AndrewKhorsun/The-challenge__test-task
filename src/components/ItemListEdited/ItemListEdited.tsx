import React from "react";

import { List } from "../../types/List";

type Props = {
  itemsList: List[];
};

export const ItemListEdited: React.FC<Props> = ({ itemsList }) => {
  
  return (
    <>
      {itemsList.map((item) => (
        <ul key={item.id}>
          <li>{item.label}</li>
          {item.children && item.children.length > 0 ? (
            <ItemListEdited itemsList={item.children} />
          ) : null}
        </ul>
      ))}
    </>
  );
};
