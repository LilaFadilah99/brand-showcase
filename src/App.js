import React from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import FormAddCosmetics from "./components/FormAddCosmetics";

class App extends React.Component {
  constructor(props) {
    super(props); // meneruskan semua milik parent class ke child class

    this.state = {
      cosmetics: [],
      name: "",
      price: null,
      imageUrl: "",
      description: "",
    };

    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleAddProducts = this.handleAddProducts.bind(this);
  }

  // belum selesai. harus ambil data untuk update state
  handleAddProducts(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/cosmetic", {
        name: this.state.name,
        price: this.state.price,
        imageUrl: this.state.imageUrl,
      })
      .then((data) => {
        console.log("berhasil add");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDeleteProduct(id) {
    console.log(id);
    axios
      .delete(`http://localhost:3000/cosmetic/${id}`)
      .then(() => {
        console.log("success delete");
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/cosmetic")
      .then(({ data }) => {
        console.log(data);
        this.setState(() => ({
          cosmetics: data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <FormAddCosmetics handleAddProducts={this.handleAddProducts} />
          <h1 className="text-center">Daftar Cosmetics</h1>
          <div className="row">
            {this.state.cosmetics.map((el) => {
              return <ProductCard key={el.id} name={el.name} price={el.price} description={el.description} imageUrl={el.imageUrl} handleDeleteProduct={this.handleDeleteProduct} id={el.id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
