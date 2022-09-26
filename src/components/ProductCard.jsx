import React from "react";

class ProductCard extends React.Component {
  render() {
    return (
      <>
        <div className="mb-3 col-md-3 col-6">
          <div className="card h-100 rounded-2 shadow-sm poductsCard">
            <div className="inner">
              <img src={this.props.imageUrl} className="card-img-top img-fluid" alt="paket 1" style={{ width: "150px" }} />
            </div>
            <div className="card-body">
              <p className="card-title fw-bold">{this.props.name}</p>
              <p className="card-text" style={{ fontSize: "15px" }}>
                Rp. {new Intl.NumberFormat(["ban", "id"]).format(this.props.price)}
              </p>
              <p style={{ fontSize: "12px" }}>{this.props.description}</p>
              <button type="button" className="btn btn-info" onClick={() => this.props.handleDeleteProduct(this.props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
