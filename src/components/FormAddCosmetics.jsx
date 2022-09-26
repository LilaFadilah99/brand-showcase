import React from "react";

class FormAddCosmetics extends React.Component {
  render() {
    return (
      <>
        <h1>Add cosmetics</h1>
        <div className="row col-6 justify-content-center">
          <form action="" onSubmit={() => this.props.handleAddProducts()}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                imageUrl
              </label>
              <input type="text" className="form-control" id="imageUrl" />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                price
              </label>
              <input type="number" className="form-control" id="price" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                description
              </label>
              <input type="text" className="form-control" id="description" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default FormAddCosmetics;
