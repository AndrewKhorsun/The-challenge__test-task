import React from "react";

import { List } from "../../types/List";

type Props = {
  itemsList: List[];
};

export const ItemListInit: React.FC<Props> = ({ itemsList }) => {
  return (
    <ul>
      {itemsList.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};
