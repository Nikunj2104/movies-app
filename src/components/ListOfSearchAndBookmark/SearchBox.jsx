import React from "react";

export default function SearchBox(props) {
  return (
    <div>
      <input
        type="search"
        placeholder=" Search here"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        className="forSeaschbox"
      />
    </div>
  );
}
