import WishHeader from "./wishlistHeader";
import WishListList from "./wishlistlist";
import WishTotal from "./wishTotal";

const Wishlist = ({ wishList, setWishList, checkLists, setCheckLists }) => {
  const handleRemove = (id) => {
    setWishList(wishList.filter((el) => el.id !== id));
    setCheckLists(checkLists.filter((check) => check !== id));
  };

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkItems = new Set(checkLists);
      wishList.forEach((item) => checkItems.add(item.id));
      setCheckLists(Array.from(checkItems));
    } else {
      setCheckLists([]);
    }
  };

  const isAllChecked =
    wishList.length === checkLists.length && checkLists.length !== 0;

  return (
    <>
      <div className="header">위시리스트</div>
      <WishHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked} />
      {wishList.length === 0 ? (
        <div className="empty">
          <p>관심상품이 없습니다.</p>
          <p>원하는 상품을 위시리스트에 담아보세요!</p>
        </div>
      ) : (
        wishList.map((item) => {
          return (
            <WishListList
              key={`wishlist-${item.id}`}
              wishList={wishList}
              handleRemove={handleRemove}
              handleCheckList={handleCheckList}
              checkLists={checkLists}
            />
          );
        })
      )}
      <WishTotal
        wishList={wishList}
        setWishList={setWishList}
        checkLists={checkLists}
        setCheckLists={setCheckLists}
      />
    </>
  );
};

export default Wishlist;
