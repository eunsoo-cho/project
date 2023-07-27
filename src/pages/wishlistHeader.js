const WishHeader = ({ handleAllCheck, isAllChecked }) => {
  return (
    <>
      <div className="title-wrap">
        <div className="title-table">
          <input
            type="checkbox"
            onChange={(e) => {
              handleAllCheck(e.currentTarget.checked);
            }}
            checked={isAllChecked}
          />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </div>
      </div>
    </>
  );
};

export default WishHeader;
