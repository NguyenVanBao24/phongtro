import React, { useEffect, useState } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [page] = useSearchParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    page ? dispatch(getPostsLimit(page)) : dispatch(getPostsLimit(1));
  }, []);

  return (
    <div className="w-full border rounded-md p-2 bg-white shadow-md">
      <div className="flex justify-between items-center my-[3px]">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 12:05 12/12/2022</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text={"Mặc định "} />
        <Button bgColor="bg-gray-200" text={"Mới nhất "} />
        <Button bgColor="bg-gray-200" text={"Video "} />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => (
            <Item
              key={item?.id}
              address={item?.address}
              attributes={item?.attributes}
              description={JSON.parse?.(item?.description)}
              images={JSON.parse(item?.images?.image)}
              star={+item?.star}
              title={item?.title}
              user={item?.user}
            />
          ))}
      </div>
    </div>
  );
};

export default List;
