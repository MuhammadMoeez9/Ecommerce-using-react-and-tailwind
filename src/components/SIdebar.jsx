import React from "react";

function Sidebar({ categoryfunc, }) {
  return (
    <aside className="h-[700px] w-[300px] ml-2 mt-4 ">
      <div className="border">
        <select name="language" class="drop-down" id="language" onChange={categoryfunc}>
          <option value="All">Default</option>
          <option value="men's clothing">Men's</option>
          <option value="women's clothing">Women's </option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;
