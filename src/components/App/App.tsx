import React from "react";

import { useGetListQuery } from "../../app/api";
import { ItemListInit } from "../ItemsList/ItemListInit";
import { ItemListEdited } from "../ItemListEdited/ItemListEdited";
import { Loader } from "../Loader/Loader";
import { List } from "../../types/List";

export const App: React.FC = () => {
  const { data: items = [], isLoading, isError } = useGetListQuery();

  function editItems(data: List[], idProp: any, parentProp: any) {
    const tree = Object.fromEntries(
      data.map((el: any) => [el[idProp], { ...el, children: [] }]),
    );

    return Object.values(tree).filter(
      (el: any) =>
        !(tree[el[parentProp]] && tree[el[parentProp]].children.push(el)),
    );
  }

  const editedElements: any = editItems(items, "id", "parent_id");

  return (
    <div className="container">
      <h1 className="text-center">The challenge</h1>
      <div className="text-center mt-5">
        {isLoading && <Loader />}
        {isError && <p>Oops... something went wrong</p>}
      </div>

      <div className="d-flex justify-content-around mt-5">
        {items && <ItemListInit itemsList={items} />}

        <div>
          {editedElements && <ItemListEdited itemsList={editedElements} />}
        </div>
      </div>
    </div>
  );
};
