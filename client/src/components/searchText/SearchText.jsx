import React from "react";

const SearchText = () => {
  return (
    <>
      <label for="basic-url" class="form-label">
        <h2>Filter</h2>
      </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          Something
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          Min
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          Max
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Address
        </label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};

export default SearchText;
